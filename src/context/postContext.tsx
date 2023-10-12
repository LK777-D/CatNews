"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { PostContxt, PostT } from "@/types/Types";
import {
  collection,
  addDoc,
  getDoc,
  onSnapshot,
  query,
  QuerySnapshot,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";

export const PostContext = createContext<PostContxt | null>(null);

const PostContextProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postText, setPostText] = useState("");
  const [topic, setTopic] = useState("option1");
  const [posts, setPosts] = useState<PostT[]>([]);

  const router = useRouter();

  const addPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title !== "" && description !== "" && postText !== "") {
      const timestamp = serverTimestamp();
      await addDoc(collection(db, "posts"), {
        title: title,
        description: description,
        postText: postText,
        submissionDate: timestamp,
        topic: topic,
      });
      router.push("/posts");
    }
  };

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("submissionDate", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr: PostT[] = [];

      querySnapshot.forEach((doc) => {
        const postData = doc.data() as PostT;
        const postWithId = { ...postData, id: doc.id };
        itemsArr.push(postWithId);
      });
      setPosts(itemsArr);

      return () => unsubscribe();
    });
  }, []);

  const contextValue: PostContxt = {
    title,
    setTitle,
    posts,
    setPosts,
    description,
    setDescription,
    postText,
    setPostText,
    addPost,
    setTopic,
    topic,
  };

  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};
export default PostContextProvider;

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("Context provider error");
  }

  return context;
};

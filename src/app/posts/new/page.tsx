"use client";
import PostForm from "@/components/PostForm";
import { usePostContext } from "@/context/postContext";

const NewPost = () => {
  const { posts } = usePostContext();

  return (
    <section className="w-full min-h-[140vh] bg-slate-100/50 flex items-center justify-center">
      <PostForm />
    </section>
  );
};

export default NewPost;

"use client";
import { usePostContext } from "@/context/postContext";
import PostCard from "./PostCard";
import Crypto from "./Crypto";
const PostsList = () => {
  const { posts } = usePostContext();
  return (
    <section>
      <div className="h-full flex flex-col justify-start items-center gap-10 xl:items-start">
        <h1 className="text-3xl fontbold text-gray-600 ">
          #Recent Posts({posts.length})
        </h1>
        {posts.map((post, i) => (
          <PostCard
            key={i}
            title={post.title}
            description={post.description}
            postText={post.postText}
            submissionDate={post.submissionDate}
            topic={post.topic}
          />
        ))}
      </div>
    </section>
  );
};

export default PostsList;

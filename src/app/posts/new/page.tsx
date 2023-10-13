"use client";
import PostForm from "@/components/PostForm";

const NewPost = () => {
  return (
    <section
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/023/729/629/large_2x/old-newspaper-texture-newspaper-wallpaper-generative-ai-photo.jpg')`,
      }}
      className="w-full min-h-[140vh] bg-cover bg-center flex items-center justify-center"
    >
      <PostForm />
    </section>
  );
};

export default NewPost;

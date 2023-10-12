import PostForm from "@/components/PostForm";

const NewPost = async () => {
  return (
    <section className="w-full min-h-[140vh] bg-slate-100/50 flex items-center justify-center">
      <PostForm />
    </section>
  );
};

export default NewPost;

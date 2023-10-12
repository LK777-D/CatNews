import PostsList from "@/components/postList";
import Crypto from "@/components/Crypto";
// import Testimonials from "@/components/Testimonials";
import Link from "next/link";

const Forum = async () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col gap-20">
      <div className="flex flex-col text-center mt-20 mb-5 text-blue-950 ">
        <span className=" textshad fontbold text-2xl lg:text-4xl ">
          Post And Discuss World News
        </span>
        <span className="textshad fontbold text-3xl lg:text-5xl">
          At Cat News Forum
        </span>
      </div>
      <div className=" hidden lg:block text-center fontbold text-3xl text-blue-950 ">
        <p className="textshad">
          Place where users across the world share news for you to discuss!
        </p>
        <p className="textshad">
          Share your thoughts - Create post about the topic you want !{" "}
          <Link
            className="text-red-600 fontbold text-md hover:text-red-500 transition duration-300 ease-in "
            href="/posts/new"
          >
            Create Post
          </Link>
        </p>
      </div>
      <div className="lg:hidden text-center ">
        <Link
          className="bg-blue-800 text-white fontbold px-20 py-3 rounded-3xl hover:bg-blue-700 transition duration-300 ease-in-out "
          href="posts/new"
        >
          Create Post
        </Link>
      </div>
      <div>
        <div className="xl:flex items-start justify-center gap-14">
          <div>
            <PostsList />
          </div>

          <div className=" hidden xl:block  ">
            <Crypto />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;

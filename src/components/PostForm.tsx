"use-client";

import NewPost from "@/app/posts/new/page";
import { usePostContext } from "@/context/postContext";
import Link from "next/link";
import Logo from "./Logo";

const PostForm = () => {
  const {
    title,
    description,
    postText,
    setTitle,
    setDescription,
    setPostText,
    addPost,
    setTopic,
  } = usePostContext();

  return (
    <>
      <form className="bg-white rounded-lg w-[95%] md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-lg p-6 mx-auto">
        <h2 className="text-2xl text-center text-gray-800 font-semibold mb-4">
          Create a New Post
        </h2>

        <p className="text-center text-gray-600 text-lg mb-6">
          Share your thoughts with the world. All input fields are required.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="title"
              className="text-gray-800 text-lg font-semibold"
            >
              Post Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              className="border rounded-lg w-full p-3 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
              placeholder="Enter Post Title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="text-gray-800 text-lg font-semibold"
            >
              E-mail
            </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              type="email"
              required
              id="description"
              className="border rounded-lg w-full p-3 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="topic"
              className="text-gray-800 text-lg font-semibold"
            >
              Choose a Topic
            </label>
            <select
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-3 rounded-lg text-lg text-gray-600 border focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            >
              <option value="option1">Select a Topic...</option>
              <option value="sports">Sports</option>
              <option value="politics">Politics</option>
              <option value="tech">Tech</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="text"
            className="text-gray-800 text-lg font-semibold mt-5"
          >
            Post Text
          </label>
          <textarea
            required
            onChange={(e) => setPostText(e.target.value)}
            id="text"
            className="border rounded-lg p-3 h-[30vh] w-full focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter Post Main Text..."
          />
        </div>
        <div className="flex flex-col gap-4 items-center mt-6">
          <button
            className="bg-blue-500 w-[60%] text-white text-lg px-4 py-2 rounded-3xl hover:bg-blue-600 focus:outline-none transition duration-300"
            type="submit"
            onClick={addPost}
          >
            Submit Post
          </button>
          <Link
            href=""
            className="text-gray-900 text-lg w-[60%] text-center border border-gray-400 px-4 py-2 rounded-3xl hover:border-gray-700 focus:outline-none transition duration-300"
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
};

export default PostForm;

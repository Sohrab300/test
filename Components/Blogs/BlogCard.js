import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const BlogCard = ({ blog }) => {
  const router = useRouter();
  const {
    id,
    title,
    content,
    thumbNail,
    readTime,
    blogCategory,
    createdAt,

    posted,
    blogId,
  } = blog;

  const date = new Date(createdAt);
  const textGradient =
    "text-transparent bg-clip-text bg-[linear-gradient(135deg,_#8E00E4_0%,_#BD27AB_40%,_#D93E8A_67%,_#F95963_100%)]";

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate().toString().padStart(2, "0");
  const monthIndex = date.getMonth();
  const month = monthNames[monthIndex];
  const year = date.getFullYear();

  const formattedDateStr = `${month} ${day}, ${year}`;

  const words = content.split(" ");

  const trimmedContent = words.slice(0, 30).join(" ");

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  };

  const slug = slugify(title);

  function trimTitle(title) {
    if (title.length > 50) {
      return title.substring(0, 30) + "...";
    }
    return title;
  }

  function trimdesc(desc) {
    if (desc.length > 220) {
      return desc.substring(0, 490) + "...";
    }
    return desc;
  }
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };
  return (
    <div
      className="bg-white flex flex-col items-center justify-between min-h-[500px] border rounded-2xl shadow-xl cursor-pointer border-[#333333] p-2"
      onClick={() => router.push(`/blogs/${slug}-${id}`)}
    >
      <div className=" w-full">
        <div className="relative w-full h-[250px] rounded-xl overflow-hidden ">
          {/* Gradient placeholder */}
          {!loaded && (
            <div
              className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"
              style={{ zIndex: 1 }}
            ></div>
          )}

          {/* Actual image */}
          <img
            className={`absolute inset-0 w-full h-full object-cover ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            src={thumbNail}
            alt={title}
            onLoad={handleImageLoad}
          />
        </div>

        <div className="px-5 pt-3">
          {/* <p className="bg-pink-50  inline-block py-2 px-3 text-gray-500 rounded-3xl text-sm  font-medium">
            {blogCategory}
          </p> */}
          <div>
            {" "}
            <p className="text-2xl font-semibold  pt-3 ">{title}</p>{" "}
          </div>

          <div className="flex justify-between items-center py-3">
            <p>{formattedDateStr}</p>
          </div>
          <p
            className="text-[#777E8B] mb-5 text-left "
            dangerouslySetInnerHTML={{
              __html: trimmedContent,
            }}
          />
        </div>
      </div>
      <div className="flex items-center w-full justify-between  mb-5 px-5">
        <Link href={`/blogs/${slug}-${id}`}>
          <button className={`text-lg ${textGradient} underline font-medium`}>
            View Post
          </button>
        </Link>
        <p className={`${textGradient} font-medium`}>{readTime} min read</p>
      </div>
    </div>
  );
};

export default BlogCard;

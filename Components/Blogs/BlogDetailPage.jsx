import Image from "next/image";
import React, { useState } from "react";

const imageLoader = ({ src }) => src;

function BlogDetailPage({ blog }) {
  const {
    id,
    title,
    content,
    thumbNail,
    readTime,

    createdAt,

    posted,
    blogCategory,
  } = blog;

  const date = new Date(createdAt);

  const [likes, setLikes] = useState(1200);
  const [userAction, setUserAction] = useState(null); // 'liked', 'disliked', or null

  const handleLike = () => {
    if (userAction === "liked") {
      setLikes(likes - 1);
      setUserAction(null);
    } else {
      setLikes(userAction === "disliked" ? likes + 1 : likes + 1);
      setUserAction("liked");
    }
  };

  const handleDislike = () => {
    if (userAction === "disliked") {
      setUserAction(null);
    } else {
      if (userAction === "liked") setLikes(likes - 1);
      setUserAction("disliked");
    }
  };

  // Formatting 1200 to 1.2k
  const formatLikes = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + "k" : num;
  };

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

  const shareOnSocialMedia = (platform, blogTitle) => {
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/share/1Cu3WLv3WC/`;
        break;
      case "twitter":
        shareUrl = `https://x.com/minglewise?s=20`;
        break;

      default:
        return;
    }
    window.open(shareUrl, "_blank");
  };

  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="w-full mx-auto px-4 pt-36 pb-20">
      <h1 className="text-5xl font-medium leading-normal text-center my-16">
        {title}
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="font-medium lg:flex  lg:flex-row flex flex-col space-y-3 lg:space-y-0  justify-between items-center py-3">
          <div className="flex items-center space-x-2">
            <p>{formattedDateStr}</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle
                cx="4"
                cy="4"
                r="4"
                transform="matrix(-1 0 0 1 8 0)"
                fill="#4F4F4F"
              />
            </svg>
            <p>{readTime} min read</p>
          </div>

          <div className="flex items-center space-x-4 ">
            <button onClick={() => shareOnSocialMedia("twitter", blog?.title)}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="simple-icons:x">
                  <path
                    id="Vector"
                    d="M17.3259 1.05713H20.6992L13.3293 9.4813L22 20.9424H15.2112L9.8945 13.9904L3.80967 20.9424H0.4345L8.31783 11.9315L0 1.05805H6.96117L11.7673 7.41238L17.3259 1.05713ZM16.1425 18.9239H18.0116L5.9455 2.97021H3.93983L16.1425 18.9239Z"
                    fill="black"
                  />
                </g>
              </svg>{" "}
            </button>

            <button onClick={() => shareOnSocialMedia("facebook", blog?.title)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="22"
                viewBox="0 0 11 22"
                fill="none"
              >
                <path
                  d="M8.99732 3.65292H10.9144V0.154917C10.5837 0.10725 9.4462 0 8.12145 0C2.05595 0 3.7062 7.19583 3.4647 8.25H0.413574V12.1605H3.46382V22H7.20357V12.1614H10.1304L10.5951 8.25092H7.2027C7.3672 5.66225 6.53682 3.65292 8.99732 3.65292Z"
                  fill="blue"
                />
              </svg>{" "}
            </button>
          </div>
        </div>
        {/* like and dislike buttons here */}
        <div className="flex items-center space-x-4 border-r pr-6 mt-4">
          <button
            onClick={handleLike}
            className="flex items-center space-x-2 group transition-all"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={userAction === "liked" ? "#43A047" : "none"}
              stroke={userAction === "liked" ? "#43A047" : "#4F4F4F"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
            <span
              className={`text-lg font-semibold ${userAction === "liked" ? "text-[#43A047]" : "text-[#43A047]"}`}
            >
              {formatLikes(likes)}
            </span>
          </button>

          <button onClick={handleDislike} className="group transition-all">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={userAction === "disliked" ? "#757575" : "none"}
              stroke={userAction === "disliked" ? "#757575" : "#4F4F4F"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" />
            </svg>
          </button>
        </div>

        <div className="my-8 flex flex-col items-center justify-between">
          {!loaded && (
            <div
              className="rounded-t w-full h-[250px]  bg-gradient-to-b from-gray-50 to-gray-200"
              style={{ zIndex: 1 }}
            ></div>
          )}
          <Image
            className={`rounded-t object-cover w-full h-auto ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            loader={imageLoader}
            src={thumbNail}
            alt={title}
            width={1200}
            height={360}
            sizes="100vw"
            unoptimized
            onLoad={handleImageLoad}
          />
          <div className="mt-8 max-w-5xl">
            <p
              className=" mb-5 "
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;

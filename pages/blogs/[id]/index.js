import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import BlogCard from "@/Components/Blogs/BlogCard";
import BlogDetailPage from "@/Components/Blogs/BlogDetailPage";
import Loader from "@/Components/Shared/Loader";

function Index() {
  const router = useRouter();
  const { id } = router.query;
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  function extractIdFromURL(url) {
    try {
      if (!url) {
        throw new Error("Invalid URL");
      }
      const parts = url.split("/");
      const lastPart = parts[parts.length - 1];
      if (!lastPart) {
        throw new Error("URL does not contain an ID");
      }
      const id = lastPart.split("-").pop();
      if (!id) {
        throw new Error("ID could not be extracted from URL");
      }
      return id;
    } catch (error) {
      console.error("Error extracting ID from URL:", error.message);
      return null;
    }
  }

  const blogID = extractIdFromURL(id);

  useEffect(() => {
    const fetchData = async () => {
      const serializedData = localStorage.getItem("blogData");
      let parsedData;

      if (serializedData) {
        parsedData = JSON.parse(serializedData);
      } else {
        try {
          const response = await axios.post(
            "https://us-central1-minglewise2019.cloudfunctions.net/blogsApis/get-single-blog",
            {
              id: blogID,
            },
          );

          parsedData = [response.data];
        } catch (error) {
          console.error("Fetching blog data failed:", error);
          parsedData = [];
        }
      }

      setBlogData(parsedData);
      setLoading(false);
    };

    if (blogID) {
      fetchData();
    }
  }, [blogID]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const matchingBlog = blogData
    ? blogData.find((blog) => blog.id === blogID)
    : null;

  const relatedBlogs = blogData?.filter(
    (blog) =>
      blog.blogCategory === matchingBlog?.blogCategory && blog.id !== blogID,
  );

  const top3RelatedBlogs = relatedBlogs?.slice(0, 3);
  // Temporary modification to show the current blog thrice for preview
  //   const top3RelatedBlogs = matchingBlog
  //     ? [matchingBlog, matchingBlog, matchingBlog]
  //     : [];

  return (
    <div className="bg-[#fbf5ff]">
      <Head>
        {matchingBlog && (
          <>
            <title>{matchingBlog.title}</title>
          </>
        )}
      </Head>
      {matchingBlog && <BlogDetailPage blog={matchingBlog} />}

      {top3RelatedBlogs && top3RelatedBlogs.length > 0 && (
        <div className="max-w-7xl mx-auto px-8 pt-16 pb-36">
          <h3 className="my-10 font-medium text-2xl">Related Blogs</h3>
          <div className="grid lg:grid-cols-3 2xl:grid-cols-3 gap-7">
            {top3RelatedBlogs?.map((relatedBlog) => (
              <BlogCard key={relatedBlog.id} blog={relatedBlog} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;

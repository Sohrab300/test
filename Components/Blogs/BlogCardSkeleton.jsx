import React from "react";

const BlogCardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded shadow-md">
      <div className="h-40 bg-gray-300 rounded mb-4 "></div>
      <div className="mb-2 h-4 bg-gray-300 rounded"></div> 
      <div className="mb-4 h-3 bg-gray-300 rounded"></div> 
      <div className="flex items-center">
        <div className="h-4 w-4 bg-gray-300 rounded-full mr-2"></div> 
        <div className="h-4 w-16 bg-gray-300 rounded"></div> 
      </div>
    </div>
  );
};

export default BlogCardSkeleton;

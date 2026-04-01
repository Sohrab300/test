import BlogCard from "@/Components/Blogs/BlogCard";
import BlogCardSkeleton from "@/Components/Blogs/BlogCardSkeleton";
import {
  fetchBlogDataFailure,
  fetchBlogDataSuccess,
  fetchCategoriesFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
} from "@/redux/actions";

import axios from "axios";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownloadApp from "@/Components/Home/DownloadApp";

export default function Home() {
  const dispatch = useDispatch();
  const buttons = [{ label: "All" }, { label: "Latest" }];
  const [loading, setLoading] = useState(true);

  const loadingCategories = useSelector(
    (state) => state.category.loadingCategories,
  );
  const categories = useSelector((state) => state.category.categories);
  const categoriesError = useSelector(
    (state) => state.category.categoriesError,
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        dispatch(fetchCategoriesRequest());
        const response = await axios.get(
          "https://us-central1-minglewise2019.cloudfunctions.net/getBlogCategories",
        );
        dispatch(fetchCategoriesSuccess(response.data));
      } catch (error) {
        dispatch(fetchCategoriesFailure(error.message));
      }
    };

    fetchCategories();
  }, [dispatch]);
  //  console.log(categories);
  const notImportantCategories = categories.filter(
    (category) => !category.isImportant,
  );
  // console.log(notImportantCategories.length);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleCategoryChange = (category) => {
    //  console.log(category);
    setSelectedCategory(category);
    setActiveButton("");
  };
  const blogData = useSelector((state) => state.blog.blogData);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const serializedData = JSON.stringify(blogData);
      localStorage.setItem("blogData", serializedData);
    } else {
      console.error("localStorage is not available in this environment.");
    }
  }, [blogData]);

  const [activeButton, setActiveButton] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
    setSelectedCategory("");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://us-central1-minglewise2019.cloudfunctions.net/blogsApis/get-user-blogs",
          { categories: selectedCategory, sortName: activeButton },
        );
        dispatch(fetchBlogDataSuccess(response.data));
        setLoading(false);
      } catch (error) {
        dispatch(fetchBlogDataFailure(error.message));
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, activeButton, selectedCategory]);

  // console.log(blogData);
  // console.log(isDropdownOpen);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsDropdownOpen]);
  return (
    <main className="bg-[#fbf5ff] py-24 lg:px-6 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-24">
          {/* Heading with Gradient */}
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent">
              Community
            </span>{" "}
            <span className="text-[#333333]">Blog</span>
          </h2>

          {/* Description Text */}
          <p className="text-[#444444] text-lg md:text-xl lg:text-xl leading-relaxed md:leading-snug max-w-4xl md:max-w-6xl mx-auto font-['Poppins']">
            MingleWise App which makes online dating easier, safer, more
            engaging and productive. We would be happy to tell you more about
            our business — please drop us a line at{" "}
            <a
              href="mailto:pr@minglewise.com"
              className="text-[#444444] hover:text-black transition-colors"
            >
              pr@minglewise.com
            </a>{" "}
            to know more about our community
          </p>
        </div>
        <div className="flex flex-wrap justify-start  px-6 pt-10 pb-4 lg:gap-16 2xl:gap-20  gap-x-12 gap-y-3 mb-10">
          {buttons.map((button) => (
            <button
              key={button.label}
              className={`lg:text-lg custom-transition hover:text-[#cc56b8] lg:pb-1 ${
                activeButton === button.label
                  ? "font-bold  border-b-2 border-[#cc56b8] text-[#cc56b8]"
                  : "font-medium border-b-2 border-transparent"
              }`}
              onClick={() => handleButtonClick(button.label)}
            >
              {button.label}
            </button>
          ))}
          {categories
            .filter((categoryObj) => categoryObj.isImportant)
            .map((categoryObj) => (
              <button
                key={categoryObj.category}
                className={`lg:text-lg custom-transition hover:text-[#cc56b8] lg:pb-1 ${
                  selectedCategory[0] === categoryObj.category
                    ? "font-bold  border-b-2 border-[#cc56b8] text-[#cc56b8]"
                    : "font-medium border-b-2 border-transparent"
                }`}
                onClick={() => handleCategoryChange(categoryObj.category)}
              >
                {categoryObj.category}
              </button>
            ))}
        </div>

        {/* {notImportantCategories.length > 0 && (
          <div className="flex items-center lg:justify-end justify-center  space-x-4 container mx-auto pr-5 mb-6">
            <p className="hidden lg:block">Choose Category : </p>
            <p className="lg:hidden block">Category :</p>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-[210px] lg:w-[240px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:text-darkGreen focus:outline-none focus:border-darkGreen"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  style={{
                    color: selectedCategory.length > 0 ? "#cc56b8 " : "inherit",
                  }}
                >
                  {selectedCategory.length > 0
                    ? selectedCategory
                    : "Select a Category"}
                </button>
              </div>

              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className={` origin-top-right absolute right-0 mt-2 w-[100%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                  style={{ maxHeight: "300px", zIndex: 999 }}
                >
                  {loadingCategories ? (
                    <p>Loading categories...</p>
                  ) : categoriesError ? (
                    <p>Error fetching categories: {categoriesError}</p>
                  ) : (
                    categories.map((category) => (
                      <button
                        key={category.category}
                        onClick={() => {
                          handleCategoryChange(category.category);
                          setIsDropdownOpen(false);
                        }}
                        className={`block px-5 py-2 text-sm ${
                          selectedCategory === category.category
                            ? "text-[#cc56b8] font-semibold"
                            : "text-gray-700 hover:text-[#cc56b8]"
                        }`}
                        role="menuitem"
                      >
                        {category.category}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        )} */}

        {loading && (
          <div className="grid lg:grid-cols-3 2xl:grid-cols-3 gap-7">
            {Array.from({ length: 6 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* {!loading && blogData.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <img src="/no-data.png" width={500} height={350} className="" />
            <p className="text-gray-700 mb-5">
              Blog for{" "}
              <span className="text-[#cc56b8]"> {selectedCategory}</span>{" "}
              category is not available !
            </p>
            {selectedCategory && (
              <button
                key="reset"
                onClick={() => {
                  setSelectedCategory([]);
                  setIsDropdownOpen(false);
                  setLoading(true);
                  setActiveButton("All");
                }}
                className="bg-[#cc56b8]  text-white px-6 py-3 rounded-3xl "
                role="menuitem"
              >
                Browse All
              </button>
            )}
          </div>
        )} */}
        {activeButton === "All" && (
          <div className="grid lg:grid-cols-3 2xl:grid-cols-3 gap-7 2xl:gap-12">
            {blogData?.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        )}
        {activeButton === "Latest" && (
          <div className="grid lg:grid-cols-3 2xl:grid-cols-3 gap-7 2xl:gap-12">
            {blogData?.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        )}
        {activeButton === "" && (
          <div className="grid lg:grid-cols-3 2xl:grid-cols-3 gap-7 2xl:gap-12">
            {blogData.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        )}
        <div className="mt-16">
          <DownloadApp />
        </div>
      </div>
    </main>
  );
}

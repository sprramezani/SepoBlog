import { useQuery } from "@apollo/client/react";
import { Search } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import Loader from "../Loader";

function SearchBox() {
  const [search, setSearch] = useState("");
  const { loading, error, data } = useQuery(GET_BLOGS_INFO);
  const [resultsPosition, setResultsPosition] = useState({
    top: 0,
  });
  const inputRef = useRef(null);

  const filteredBlogs =
    search.trim() && data?.posts
      ? data.posts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase()),
        )
      : [];

  useEffect(() => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setResultsPosition({
        top: rect.bottom + window.scrollY,
      });
    }
  }, [search, inputRef.current]);

  const resultsDropdown = (
    <div
      style={{
        top: resultsPosition.top,
      }}
      className="bg-white rounded-xl mt-5 absolute overflow-y-auto z-50 max-h-[14rem] shadow-xl w-full max-w-md left-[35.3%]"
    >
      {loading && <Loader />}
      {error && (
        <p className="p-3 text-sm text-center">خطا در دریافت اطلاعات</p>
      )}

      {!loading && filteredBlogs.length === 0 && (
        <p className="p-3 text-sm text-gray-500 text-center">
          نتیجه‌ای پیدا نشد
        </p>
      )}

      {filteredBlogs.map((post) => (
        <Link
          key={post.id}
          to={`/blogs/${post.slug}`}
          className="block px-4 py-3 text-sm cursor-pointer truncate hover:bg-gray-100 border-b border-gray-300 hover:border-gray-400 last:border-none"
          onClick={() => setSearch("")} // بستن با کلیک روی نتیجه
        >
          {post.title}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="relative w-full max-w-md mt-10">
      {/* INPUT */}
      <div className="bg-white flex px-4 items-center rounded-xl shadow-lg">
        <input
          ref={inputRef}
          type="text"
          className="py-4 outline-none w-full text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="دنبال چه مطلبی میگردی؟"
        />
        <Search className="text-blue-500" />
      </div>

      {/* RESULTS */}
      {search && createPortal(resultsDropdown, document.body)}
    </div>
  );
}

export default SearchBox;

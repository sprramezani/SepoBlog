import { useQuery } from "@apollo/client/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import Loader from "../Loader";

function AuthorsPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <p>Error ...</p>;
  return (
    <section className="mt-35 max-w-[1360px] mx-auto">
      <div className="md:flex h-[450px] gap-x-5 space-y-5 px-7 md:px-0">
        <div className="bg-white md:w-300 py-10 h-full text-center rounded-2xl shadow-xl">
          <div className="w-70 h-70 overflow-hidden rounded-full mx-auto border-8 border-gray-200">
            <img
              src={data.author.avatar.url}
              className="w-full h-full object-cover"
              alt={data.author.name}
            />
          </div>
          <p className="text-3xl font-[YekanExtraBold] mt-4 mb-2 truncate text-[#0F172A]">
            {data.author.name}
          </p>
          <p className="text-[#64748B] truncate">{data.author.field}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl font-[YekanExtraBold] mb-4">درباره نویسنده</p>
          <p className="leading-8 text-justify">
            {data.author.description.text}
          </p>
        </div>
      </div>
      <div className="justify-center mb-25 md:mt-15 mt-165">
        <h2 className="text-3xl font-[yekanBold] text-center my-10">
          مقالات {data.author.name}
        </h2>
      </div>
      <div className="w-full justify-items-center mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20">
        {data.author.post.length === 0 && (
          <p className="text-center col-span-3 text-[#64748B]">
            این نویسنده هنوز مقاله‌ای منتشر نکرده است.
          </p>
        )}
        {data.author.post.map((post) => (
          <div
            key={post.id}
            className="w-90 bg-white p-5 rounded-2xl relative shadow-lg"
          >
            <div className="w-80 h-50 object-cover -top-15 relative shadow-lg rounded-xl overflow-hidden">
              <img
                src={post.coverPhoto.url}
                className="w-full h-full"
                alt={post.title}
              />
            </div>
            <div className="px-2 relative -top-10">
              <p className="truncate font-[yekanBold] text-[#0F172A]">
                {post.title}
              </p>
              <p className="line-clamp-3 mt-3 text-[#64748B] text-sm text-justify">
                {post.content.text}
              </p>
            </div>
            <Link to={`/blogs/${post.slug}`} className="w-full relative -top-1 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md shadow-blue-500/50 hover:shadow-blue-600/50 transition-all duration-300 font-[yekanBold] text-white py-3 flex justify-center rounded-lg cursor-pointer">
              مشاهده مقاله
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AuthorsPage;

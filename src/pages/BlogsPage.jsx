import React from "react";
import { Link, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../graphql/queries";
import { useQuery } from "@apollo/client/react";
import sanitize from "sanitize-html";
import Loader from "../components/Loader";
import { Eye } from "lucide-react";

function BlogsPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <p>Error ...</p>;
  return (
    <section className="mt-30 md:mt-35 px-0 md:px-10 max-w-[1360px] mx-5 md:mx-auto gap-x-5 gap-y-10 flex flex-col md:flex-row">
      <div>
        <div className="p-5 bg-white rounded-2xl shadow-xl">
          <div className="rounded-2xl overflow-hidden w-full h-50 md:h-130 mb-10">
            <img
              src={data.post.coverPhoto.url}
              className="object-cover w-full h-full"
              alt={data.post.title}
            />
          </div>
          <h3 className="text-xl md:text-2xl font-[YekanExtraBold] my-5 md:px-5">
            {data.post.title}
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitize(data.post.content.html),
            }}
            className="text-justify leading-8 md:p-5 p-2"
          ></div>
        </div>
        <div className="p-5 bg-white rounded-2xl shadow-xl flex flex-col sm:flex-row items-center sm:justify-between gap-x-5 mt-10">
          <div className="flex items-center gap-x-5">
            <div className="w-27 h-27 overflow-hidden rounded-full border-4 border-gray-200 shadow-md hover:scale-105 transition-transform duration-300">
              <img
                src={data.post.author.avatar.url}
                alt={data.post.author.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* اطلاعات نویسنده */}
            <div className="mt-4 sm:mt-0 text-center sm:text-right">
              <p className="text-gray-500 text-sm font-medium">نویسنده:</p>
              <p className="text-gray-800 text-lg font-semibold truncate">
                {data.post.author.name}
              </p>
            </div>
          </div>

          {/* دکمه مشاهده */}
          <Link to={`/authors/${data.post.author.slug}`} className="mt-6 sm:mt-0 flex items-center cursor-pointer justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md">
            <Eye className="w-5 h-5 text-gray-600" />
            مشاهده نویسنده
          </Link>
        </div>
      </div>
      <div className="md:w-350 bg-white p-5 rounded-2xl shadow-xl h-fit">
        sidebar
      </div>
    </section>
  );
}

export default BlogsPage;

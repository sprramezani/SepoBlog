import { Link, useParams } from "react-router-dom";
import { GET_BLOG_INFO, GET_BLOGS_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client/react";
import sanitize from "sanitize-html";
import Loader from "../Loader";
import { Copy, Eye } from "lucide-react";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

function BlogsPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  const {
    loading: blogsLoading,
    error: blogsError,
    data: blogsData,
  } = useQuery(GET_BLOGS_INFO);
  if (loading || blogsLoading) return <Loader />;
  if (error || blogsError) return <p>Error ...</p>;
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

            <div className="mt-4 sm:mt-0 text-center sm:text-right">
              <p className="text-gray-500 text-sm font-medium">نویسنده:</p>
              <p className="text-gray-800 text-lg font-semibold truncate">
                {data.post.author.name}
              </p>
            </div>
          </div>

          <Link
            to={`/authors/${data.post.author.slug}`}
            className="mt-6 sm:mt-0 flex items-center cursor-pointer justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md"
          >
            <Eye className="w-5 h-5 text-gray-600" />
            مشاهده نویسنده
          </Link>
        </div>
        <CommentForm slug={slug} />
        <Comments data={data} />
      </div>
      <div className="gap-y-5 md:gap-y-10 flex flex-col">
        <div className="md:w-100 bg-white p-5 rounded-2xl shadow-xl h-fit">
          <h3 className="text-xl font-[YekanBold] mb-5">اشتراک گذاری</h3>
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-3">
            <input
              type="text"
              value={`https://blog.sepehrramezani.ir/blogs/${data.post.slug}`}
              readOnly
              dir="ltr"
              className="flex-1 bg-transparent text-sm text-gray-700 outline-none truncate text-left select-all"
            />
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  `https://blog.sepehrramezani.ir/blogs/${data.post.slug}`,
                )
              }
              className="flex items-center gap-1 p-2 cursor-pointer text-sm rounded-lg 
                 bg-blue-500 text-white hover:bg-blue-600 active:scale-95
                 transition-all duration-200"
            >
              <Copy className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        <div className="md:w-100 bg-white p-5 rounded-2xl shadow-xl h-fit">
          <h3 className="text-xl font-[YekanBold] mb-5">جدیدترین مقالات</h3>
          {blogsData.posts.slice(0, 5).map((post) => (
            <Link
              to={`/blogs/${post.slug}`}
              key={post.id}
              className="flex items-center gap-x-3 mb-2 last:mb-0 hover:border-blue-400 p-3 transition-all duration-300 border-b-2 border-gray-100"
            >
              <span className="truncate text-sm overflow-hidden text-ellipsis whitespace-nowrap w-full">
                {post.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogsPage;


import { useQuery } from "@apollo/client/react";
import { ChevronsLeft } from "lucide-react";
import { GET_BLOG_INFO } from "../../graphql/queries";

function Blogs() {
  const { loading, error, data } = useQuery(GET_BLOG_INFO);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error ...</p>;
  return (
    <div className="px-7 md:px-20 max-w-[1360px] mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-[yekanBold] text-center my-10">جدیدترین مقالات</h2>
        <button className="flex items-center gap-x-1 text-[#4F8DF7] cursor-pointer">
          مشاهده بیشتر
          <ChevronsLeft size={18} />
        </button>
      </div>
      <div className="w-full justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20">
        {data.posts.slice(0, 6).map((post) => (
          <div key={post.id} className="w-90 bg-white p-5 rounded-2xl relative shadow-lg">
            <div className="w-80 h-50 object-cover -top-15 relative shadow-lg rounded-xl overflow-hidden">
              <img
                src={post.coverPhoto.url}
                className="w-full h-full"
                alt={post.title}
              />
            </div>
            <div className="px-2 relative -top-10">
              <p className="truncate font-[yekanBold] text-[#0F172A]">{post.title}</p>
              <p className="line-clamp-3 mt-3 text-[#64748B] text-sm text-justify">
                {post.content.text}
              </p>
            </div>
            <button className="w-full bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md shadow-blue-500/50 hover:shadow-blue-600/50 transition-all duration-300 font-[yekanBold] text-white py-3 rounded-lg cursor-pointer">
              مشاهده مقاله
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;

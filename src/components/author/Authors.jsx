import { ChevronsLeft } from "lucide-react";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client/react";
import "../../styles/authorSlider.css";
import { Link } from "react-router-dom";

function Authors() {
  const { loading, error, data } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error ...</p>;

  return (
    <div className="px-7 md:px-20 max-w-[1360px] mx-auto">
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-[yekanBold] text-center my-10">
          نویسندگان
        </h2>
        <button className="flex items-center gap-x-1 text-[#4F8DF7] cursor-pointer">
          مشاهده همه
          <ChevronsLeft size={18} />
        </button>
      </div>
      <div
        className="author-slider"
        style={{
          "--width": "380px",
          "--height": "150px",
          "--quantity": data.authors.length,
        }}
      >
        <div className="author-list">
          {data.authors.slice(0, 6).map((author, index) => (
            <div
              key={author.id || index}
              className="author-item"
              style={{ "--position": index + 1 }}
            >
              <Link to={`/authors/${author.slug}`} className="flex bg-white shadow-lg w-100 cursor-pointer mt-5 hover:shadow-blue-300/50 transition-all duration-300 h-20 pl-5 py-4 rounded-2xl">
                <div className="w-27 relative h-27 rounded-full overflow-hidden -top-8 -right-3 shadow-lg">
                  <img
                    src={author.avatar.url}
                    className="w-full h-full object-cover"
                    alt={author.name}
                  />
                </div>
                <div className="relative">
                  <p className="font-[YekanBold] truncate">{author.name}</p>
                  <p className="text-sm truncate text-[#64748B]">
                    {author.field}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Authors;

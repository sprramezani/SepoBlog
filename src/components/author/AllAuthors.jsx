import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client/react";
import Loader from "../Loader";
import { Link } from "react-router-dom";

function AllAuthors() {
  const { loading, error, data } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;
  if (error) return <p>Error ...</p>;
  return (
    <section className="mt-30 md:mt-35 px-7 md:px-0 max-w-[1360px] mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl md:text-3xl font-[yekanBold] text-center my-10">
          نویسندگان
        </h2>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {data.authors.map((author) => (
          <div key={author.id}>
            <Link
              to={`/authors/${author.slug}`}
              className="flex bg-white shadow-lg w-80 md:w-100 cursor-pointer mt-5 hover:shadow-blue-300/50 transition-all duration-300 h-20 pl-5 py-4 rounded-2xl"
            >
              <div className="w-25 h-25 md:w-27 md:h-27 relative rounded-full overflow-hidden -top-7 md:-top-8 -right-3 shadow-lg">
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
    </section>
  );
}

export default AllAuthors;

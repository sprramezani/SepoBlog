import React from "react";

function Comments({ data }) {
  return (
    <div className="p-5 bg-white rounded-2xl shadow-xl mt-10">
      <h3 className="text-xl font-[YekanBold] mb-5">نظرات</h3>
      {data.post.comment.length === 0 && (
        <p className="text-gray-500 text-center py-10">هنوز نظری ثبت نشده است.</p>
      ) }
      {data.post.comment.map((comment, index) => (
        <div
          key={index}
          className="border-b border-gray-200 bg-gray-50 p-5 rounded-2xl mb-4 last:mb-0 last:border-b-0"
        >
          <div className="flex">
            <span className="bg-gray-300 w-10 h-10 block text-center pt-2.5 rounded-full">
              {comment.email[0].toUpperCase()}
            </span>
            <div className="items-center ms-3">
              <p className="text-gray-800 font-medium">{comment.name}</p>
              <p className="text-gray-500 text-sm mt-1">{comment.email}</p>
            </div>
          </div>
          <p className="text-gray-700 mt-3">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;

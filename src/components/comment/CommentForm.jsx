import { useState } from "react";

function CommentForm({slug}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
  return (
    <div className="p-5 bg-white rounded-2xl shadow-xl flex flex-col mt-10">
      <h3 className="text-xl font-[YekanBold] mb-5">ارسال نظر</h3>
      <div className="grid md:grid-cols-2 w-full gap-5 mb-5">
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          value={name}
          onClick={(e) => setName(e.target.value)}
          className="bg-gray-50 shadow-sm p-2 rounded-xl outline-none"
        />
        <input
          type="email"
          placeholder="ایمیل"
          value={email}
          onClick={(e) => setEmail(e.target.value)}
          className="bg-gray-50 shadow-sm p-2 rounded-xl outline-none"
        />
      </div>
      <textarea
        type="text"
        placeholder="توضیحات"
        value={comment}
        onClick={(e) => setComment(e.target.value)}
        className="bg-gray-50 shadow-sm p-2 rounded-xl outline-none max-h-40 min-h-24"
      />
      <button className="bg-blue-600 py-2 px-4 w-fit text-white rounded-xl cursor-pointer hover:bg-blue-500 mt-5 ms-auto">
        ارسال نظر
      </button>
    </div>
  );
}

export default CommentForm;

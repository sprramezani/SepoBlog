import React from 'react'

function Footer() {
  return (
    <footer className="w-full pt-15 pb-6 text-center text-sm text-slate-400">
      <p>
        طراحی و توسعه‌ی این وبلاگ به‌عنوان نمونه‌کار انجام شده است |{" "}
        برای آشنایی بیشتر با من و پروژه‌ها{" "}
        <a
          href="https://sepehrramezani.ir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          اینجا کلیک کنید
        </a>
      </p>
    </footer>
  )
}

export default Footer
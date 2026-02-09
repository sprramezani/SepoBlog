import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./components/home/HomePage";
import BlogsPage from "./components/blog/BlogsPage";
import AuthorsPage from "./components/author/AuthorsPage";
import AllBlogs from "./components/blog/AllBlogs";
import AllAuthors from "./components/author/AllAuthors";

function App() {
  return (
    <>
    <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogsPage />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/authors/:slug" element={<AuthorsPage />} />
          <Route path="/authors" element={<AllAuthors />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;

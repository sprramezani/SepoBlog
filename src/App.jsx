import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./components/home/HomePage";
import BlogsPage from "./components/blog/BlogsPage";
import AuthorsPage from "./components/author/AuthorsPage";

function App() {
  return (
    <>
    <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogsPage />} />
          <Route path="/authors/:slug" element={<AuthorsPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;

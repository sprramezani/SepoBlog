import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AuthorsPage from "./pages/AuthorsPage";
import BlogsPage from "./pages/BlogsPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogsPage />} />
        <Route path="/authors/:slug" element={<AuthorsPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;

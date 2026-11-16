import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";

const BlogList = lazy(() => import("./pages/BlogList"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg" />}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </Suspense>
  );
}

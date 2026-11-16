import { Link, useParams } from "react-router-dom";
import BlogLayout from "../components/BlogLayout";
import MarkdownContent from "../components/MarkdownContent";
import { projects } from "../data/projects";
import { getProjectDetails } from "../data/projectDetails";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.id === slug);
  const content = getProjectDetails(slug);

  if (!project || !content) {
    return (
      <BlogLayout backTo="/#projects" backLabel="Back to projects">
        <h1 className="font-heading text-2xl font-semibold">
          Project details not found
        </h1>
        <p className="text-muted mt-2">
          <Link to="/#projects" className="link-accent">
            Back to projects
          </Link>
        </p>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout backTo="/#projects" backLabel="Back to projects">
      <article>
        <p className="text-sm font-mono text-muted">{project.year}</p>
        <h1 className="mt-3 font-heading text-3xl md:text-4xl font-semibold leading-tight">
          {project.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="text-xs px-2 py-0.5 rounded bg-surface border border-border text-muted"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-10">
          <MarkdownContent content={content} />
        </div>
      </article>
    </BlogLayout>
  );
}

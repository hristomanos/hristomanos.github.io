import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function getYouTubeVideoId(href) {
  const match = href?.match(
    /^(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})(?:[?&#/].*)?$/i,
  );
  return match?.[1];
}

function getImageWidth(title) {
  const match = title?.match(/^width=(\d+(?:\.\d+)?)(px|%)?$/i);
  return match ? `${match[1]}${match[2] ?? "px"}` : undefined;
}

export default function MarkdownContent({ content }) {
  return (
    <div
      className="prose prose-invert prose-emerald max-w-none
        prose-headings:font-heading prose-headings:font-semibold
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-code:text-accent prose-code:bg-surface prose-code:px-1 prose-code:rounded
        prose-pre:bg-surface prose-pre:border prose-pre:border-border"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p({ node, children, ...props }) {
            const paragraphContent =
              node?.children?.filter(
                (child) => !(child.type === "text" && !child.value.trim()),
              ) ?? [];
            const containsOnlyImages =
              paragraphContent.length > 0 &&
              paragraphContent.every(
                (child) => child.type === "element" && child.tagName === "img",
              );

            if (containsOnlyImages) {
              return (
                <div className="my-4 flex flex-wrap items-start gap-4">
                  {children}
                </div>
              );
            }

            return <p {...props}>{children}</p>;
          },
          a({ href, children, ...props }) {
            const videoId = getYouTubeVideoId(href);
            if (!videoId) {
              return (
                <a href={href} {...props}>
                  {children}
                </a>
              );
            }

            return (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title="YouTube video player"
                className="my-6 aspect-video w-full rounded-lg"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            );
          },
          img({ src, alt, title, ...props }) {
            const width = getImageWidth(title);
            return (
              <img
                src={src}
                alt={alt ?? ""}
                title={width ? undefined : title}
                className="m-0 h-auto max-w-full"
                style={width ? { width } : undefined}
                {...props}
              />
            );
          },
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const isBlock = Boolean(match);
            if (isBlock) {
              return (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

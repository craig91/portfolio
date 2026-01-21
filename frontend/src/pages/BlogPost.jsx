import { Link, useParams } from "react-router-dom";
import blogPosts from "../data/blog";

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="stack">
        <h2>Post not found</h2>
        <p className="small">That article doesn’t exist (or the slug is wrong).</p>
        <Link className="btn" to="/blog">
          Back to Blog →
        </Link>
      </section>
    );
  }

  const date = new Date(post.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <section className="stack">
      <div className="stack" style={{ gap: 8 }}>
        <div className="kicker">Blog</div>
        <h2>{post.title}</h2>
        <p className="small">{date}</p>
      </div>

      <div className="prose">
        {post.blocks.map((block, i) => {
          if (block.type === "p") {
            return <p key={i}>{block.text}</p>;
          }

          if (block.type === "img") {
            return (
              <figure key={i} className="figure">
                <img
                  src={block.src}
                  alt={block.alt || ""}
                  loading="lazy"
                />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
          }

          if (block.type === "code") {
            return (
              <pre key={i}>
                <code>{block.code}</code>
              </pre>
            );
          }

          return null;
        })}
      </div>

      <div className="hero-actions" style={{ marginTop: 14 }}>
        <Link className="btn" to="/blog">
          ← Back to Blog
        </Link>
      </div>
    </section>
  );
}

export default BlogPost;

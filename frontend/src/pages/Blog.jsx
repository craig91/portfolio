import { Link } from "react-router-dom";
import blogPosts from "../data/blog";

function Blog() {
  return (
    <section className="stack">
      <div className="stack" style={{ gap: 8 }}>
        <div className="kicker">Writing</div>
        <h2>Blog</h2>
        <p className="small">
          Short, high-signal write-ups: what I built, what broke, how I fixed it,
          and what I learned.
        </p>
      </div>

      <div className="grid" style={{ gap: 16 }}>
        {blogPosts.map((post, index) => {
          const date = new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
          });

          const firstParagraph =
            post.blocks?.find((b) => b.type === "p")?.text ?? "";

          const preview =
            firstParagraph.length > 220
              ? firstParagraph.slice(0, 220) + "…"
              : firstParagraph;

          return (
            <article key={index} className="card">
              <div className="card-title">
                <h3>{post.title}</h3>
                <span className="card-meta">{date}</span>
              </div>

              <p>{preview}</p>

              <div className="hero-actions" style={{ marginTop: 14 }}>
                <Link className="btn" to={`/blog/${post.slug}`}>
                  Read more →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Blog;


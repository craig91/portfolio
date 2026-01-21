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

          const preview =
            post.content?.trim().length > 220
              ? post.content.trim().slice(0, 220) + "…"
              : post.content?.trim();

          return (
            <article key={index} className="card">
              <div className="card-title">
                <h3>{post.title}</h3>
                <span className="card-meta">{date}</span>
              </div>

              <p className="clamp-3">{post.content.trim()}</p>

              {/* Optional: keep this even before you build full post pages */}
              <div className="hero-actions" style={{ marginTop: 14 }}>
                <button className="btn" type="button">
                  Read more →
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Blog;

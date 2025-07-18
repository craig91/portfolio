import blogPosts from "../data/blog";

function Blog() {
    return (
<section>
      <h2>Blog</h2>
      {blogPosts.map((post, index) => (
        <article key={index}>
          <header>
            <h3>{post.title}</h3>
            <small>{new Date(post.date).toLocaleDateString()}</small>
          </header>
          <p>{post.content.trim()}</p>
        </article>
      ))}
    </section>
    )
}

export default Blog;
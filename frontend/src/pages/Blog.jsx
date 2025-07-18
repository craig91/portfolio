import blogPosts from "../data/blog";

function Blog() {
    return (
        <div>
            <h2>Blog</h2>
            {blogPosts.map((post, index) => (
                <div key={index} style={{ marginBottom: "2rem"}}>
                    <h3>{post.title}</h3>
                    <p><em>{new Date(post.date).toLocaleDateString()}</em></p>
                    <p>{post.content.trim()}</p>
                </div>
            ))}
        </div>
    )
}

export default Blog;
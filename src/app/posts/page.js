


const PostPage = async() => {
    const res = await fetch('http://localhost:3004/posts',{
        cache: 'force-cache'
    });
    const posts = await res.json();
    return (
        <div>
            <h1>Total Postsss is: {posts.length}</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    posts.map(post => <div key={posts.id} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{post.title}</h2>
                      <p>description:{post.description}</p>
                      <p>Like: {post.likeCount}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default PostPage;


const DetailPage = async({params}) => {
    const res = await fetch(`http://localhost:3004/posts/${params.id}`);
    const post = await res.json();
    return (
        <div className="m-12">
            <h2>title: {post.title}</h2>
            <h3>description: {post.description}</h3>
            <p>Likes: {post.likeCount}</p>
        </div>
    );
};

export default DetailPage
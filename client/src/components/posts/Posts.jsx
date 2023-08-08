import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
    //TEMPORARY
    // const posts = [
    //     {
    //         id: 1,
    //         desc: "Love For All, Hatred For None.",
    //         photo: "assets/post/1.jpeg", date: "5 mins ago",
    //         userId: 1, like: 32, comment: 9
    //     },
    //     {
    //         id: 2,
    //         photo: "assets/post/2.jpeg",
    //         date: "15 mins ago",
    //         userId: 2, like: 2, comment: 1
    //     },
    //     { id: 3, desc: "Every moment is a fresh beginning.", photo: "assets/post/3.jpeg", date: "1 hour ago", userId: 3, like: 61, comment: 2 },
    // ];

    // return <div className="posts">
    //     {posts.map((post) => (
    //         <div>
    //             <Post key={post.id} post={post} />
    //         </div>
    //     ))}
    // </div>;

    return (
        <div className="posts">
            <Post />
        </div>
    );
};

export default Posts;

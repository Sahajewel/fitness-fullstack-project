import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const posts = [
    {
        id: 1,
        title: "How to start a fitness journey?",
        content: "I want to start my fitness journey but don't know where to begin. Any tips?",
        votes: 5,
    },
    {
        id: 2,
        title: "Best post-workout meals?",
        content: "What are some great meals to have after a workout for muscle recovery?",
        votes: 3,
    },
];

export default function Voting() {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const { signIn, user } = useContext(AuthContext)
    const [postVotes, setPostVotes] = useState(
        posts.map((post) => ({ id: post.id, votes: post.votes }))
    );

    const handleVote = (postId, type) => {
        if (!user) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Please Login",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        setPostVotes((prevVotes) =>
            prevVotes.map((post) =>
                post.id === postId
                    ? {
                        ...post,
                        votes: type === "up" ? post.votes + 1 : post.votes - 1,
                    }
                    : post
            )
        );
    }
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Voting</h2>
                {/* Login Toggle */}
                <div className="flex justify-center mb-6">
                    <Link to="/login">
                        <button
                            onClick={() => setUserLoggedIn(!userLoggedIn)}
                            className={`px-4 py-2 text-white rounded-lg ${userLoggedIn ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
                                }`}
                        >
                            {userLoggedIn ? "Logout" : "Login"}
                        </button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {posts.map((post) => {
                        const postVote = postVotes.find((p) => p.id === post.id);
                        return (
                            <div
                                key={post.id}
                                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{post.content}</p>
                                <div className="flex items-center justify-between">
                                    {/* Voting Buttons */}
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => handleVote(post.id, "up")}
                                            className="text-green-500 hover:text-green-600 text-lg"
                                            title="Upvote"
                                        >
                                            ▲
                                        </button>
                                        <button
                                            onClick={() => handleVote(post.id, "down")}
                                            className="text-red-500 hover:text-red-600 text-lg"
                                            title="Downvote"
                                        >
                                            ▼
                                        </button>
                                    </div>
                                    <span className="text-gray-800 font-semibold">
                                        Votes: {postVote?.votes || post.votes}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

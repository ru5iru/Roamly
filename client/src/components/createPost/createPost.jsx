import React, { useState } from "react";
import "./createPost.scss"
import Close from "../../assets/close.png";
import Line from "../../assets/Line1.png";
import Photo from "../../assets/Image.png";
import Video from "../../assets/video.png";
import Location from "../../assets/location.png";



const CreatePost = ({ togglePostDiscardVisibility, togglePostDoneVisibility, toggleExploreBarVisibility, togglePostFailVisibility }) => {

    const [postText, setPostText] = useState("");
    const user_id = 1;
    // const post_id = 154;

    const handleChange = (event) => { setPostText(event.target.value); };

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const body = { post_id, user_id, postText };
    //         // console.log(body);
    //         const response = fetch("http://localhost:5000/share", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(body)
    //         });
    //         // run {togglePostDiscardVisibility} here
    //         toggleExploreBarVisibility();
    //         togglePostDoneVisibility();

    //         // console.log("Error in CreatePost.jsx");
    //         console.log(response);
    //     } catch (err) {
    //         console.error(err.message);
    //         togglePostFailVisibility();
    //     }
    // };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const body = { user_id, postText };

            // Make the fetch call and await the response
            const response = await fetch("http://localhost:5000/share", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                // If response status is not OK (2xx), handle the error
                const errorData = await response.json(); // Assuming server sends error details as JSON
                const errorMessage = errorData.error || "An error occurred on the server.";
                console.error(errorMessage);

                // Call the fail visibility function
                togglePostFailVisibility();
            } else {
                // Request was successful, proceed with your logic
                toggleExploreBarVisibility();
                togglePostDoneVisibility();
            }
        } catch (err) {
            console.error(err.message);
            togglePostFailVisibility();
        }
    };


    const handleClose = () => {
        setIsVisible(false);
    };

    // to set the visibility of the drag and drop 
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    return (
        <div className="createPost">
            <div className="contents">
                <form>
                    <div className="head">
                        <h3>Create Post</h3>
                        {/* <img className="close" src={Close} alt="" onClick={() => console.log("Button clicked!")} /> */}
                        <img className="close" src={Close} alt="" onClick={togglePostDiscardVisibility} />


                    </div>
                    <img className="line" src={Line} alt="" />
                    <div className="create">

                        <textarea
                            placeholder="Write your post here..."
                            value={postText}
                            onChange={handleChange}
                        />


                    </div>

                    {isVisible && <div className="dragnDrop">
                        <p>Drag and Drop your media here</p>
                    </div>}

                    <div className="addMedia">
                        <div className="media">
                            <p>Add to Your Post</p>
                            <div className="icons">
                                <img className="photo" onClick={toggleVisibility} src={Photo} alt="" />
                                <img className="video" src={Video} alt="" />
                                <img className="location" src={Location} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="Cpost">
                        <button
                            onClick={onSubmit}
                        >Post</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;

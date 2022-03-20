import React from "react";
import "./Blog.css";

const Blog = (props) => {
    return (
        <div className="article-blog">
            <h2>{props.heading}</h2>
            <h5>{props.author}</h5>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                nemo maiores, et aspernatur molestiae maxime architecto nostrum
                nam ratione saepe.
            </p>
        </div>
    );
};

export default Blog;

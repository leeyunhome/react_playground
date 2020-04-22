import React, { useState } from 'react';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const onClick = () => {
        setLiked(true);
    }
    
    return (
        <div>
            <button onClick={onClick}>{liked ? "liked" : "like"}</button>
        </div>
    );
};

export default LikeButton;
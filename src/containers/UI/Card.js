import { useState, useEffect } from "react";

import "./Card.css";

const Card = ({ children }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFlipped(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="card">
            <div className={`card-inner ${flipped ? "card-flip" : ""}`}>
                {children}
            </div>
        </div>
    );
};

export default Card;

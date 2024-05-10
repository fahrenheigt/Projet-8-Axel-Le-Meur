import { Link } from "react-router-dom";

export default function Card({logement}) {
    return (
        <div className="card" style={getBackgroundImage(logement.cover)}>
            <a className="link text-2xl bold" href={`/logement/${logement.id}`}>
                {logement.title}
            </a>
        </div>
    );
}

function getBackgroundImage(url) {
    return {
        backgroundImage: 'url(' + url + ')',
        backgroundSize: 'cover'
    }
}
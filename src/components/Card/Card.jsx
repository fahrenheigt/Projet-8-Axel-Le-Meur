import { Link } from "react-router-dom";

export default function Card({logement}) {
    return (
        <div className="card-container__card rounded-sm" style={getBackgroundImage(logement.cover)}>
            <a className="card-container__card__link text-sm bold" href={`/logement/${logement.id}`}>
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
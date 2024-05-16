
export default function Banner({source}) {
    return (
        <div className="my-13">
            <div className={((source === 'home') ? 'home-bg'  : 'about-bg') + " flex flex-center rounded-lg"}>
                <h1 className="banner__title outline">{(source === 'home') ? 'Chez vous, partout et ailleurs' : ''}</h1>
            </div>
        </div>
    );
}
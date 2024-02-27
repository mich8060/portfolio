import "./image.scss";

function Full({ type, caption, alt, src, bg }) {
    return (
        <figure className={`image 
            ${type === 'large' ? 'image--large' : ''}
            ${type === 'advanced' ? 'image--advanced' : ''}
            ${type === 'container' ? 'image--container' : ''}
            ${type === 'caption' ? 'image--caption' : ''}
        `}
            style={{ background: bg || 'white' }}
        >
            {type === "container" ? (
                <div className="image--content">
                    <img
                        src={src}
                        alt={alt}
                    />
                </div>
            ) : (
                <>
                    <img src={src} alt={alt} />
                    {caption && (
                        <figcaption>{caption}</figcaption>
                    )}
                </>
            )}
        </figure>
    )
}

export default Full;

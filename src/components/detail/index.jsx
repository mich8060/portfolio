import './details.scss';

function Details({renderArticle}){
    return(
        <section className="details">
            <div className="details--container">
                {renderArticle()}
            </div>
        </section>
    )
}

export default Details;
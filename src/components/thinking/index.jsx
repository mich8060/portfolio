import './thinking.scss';

function Thinking({children}){
    return(
        <section className="thinking">
            <div className="thinking--container">
                <div className="thinking--content">{children}</div>
            </div>
        </section>
    )
}

export default Thinking;
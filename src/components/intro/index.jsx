import './intro.scss';

function Intro({children}){
    return(
        <section className="intro">
            <div className="intro--container">
                {children}
            </div>
        </section>
    )
}

export default Intro;
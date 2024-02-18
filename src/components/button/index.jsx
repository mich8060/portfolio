import './button.scss';

function Button({label, tabindex}){
    return(
        <button className="button" tabindex={tabindex}>{label}</button>
    )
}

export default Button;
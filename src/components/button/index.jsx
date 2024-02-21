import './button.scss';

function Button({label, tabindex, onClick}){
    return(
        <button className="button" tabindex={tabindex} onClick={onClick}>{label}</button>
    )
}

export default Button;
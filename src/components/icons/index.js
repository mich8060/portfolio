import './icons.scss';
import data from './data.json';

function Icons(props){

    let path = "";

    path = data.map((item,idx) => {
        if(item.name === props.name){
            return <path d={item.path} fillRule="evenodd" />;
        }else{
            return false;
        }
    });

    return(
        <span className={`icons ${props.size}`} title={props.name}>
            <svg role="image" title={props.name} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {path}
            </svg>
        </span>
    )
}

export default Icons;
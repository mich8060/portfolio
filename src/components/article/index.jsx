import { Link } from 'react-router-dom';
import './article.scss';

import Button from '../button';

function Article({title, excerpt, href}){
    return(
        <div className="article">
            <small className="article--tag">Article</small>
            <strong className="article--title">{title}</strong>
            <p className="article--excerpt">
                {excerpt}
            </p>
            <Button label="Read More" tabindex="-1" />
            <Link to={href} title={title}></Link>
        </div>
    )
}

export default Article;
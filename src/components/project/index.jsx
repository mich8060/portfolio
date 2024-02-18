import { Link } from 'react-router-dom';
import './project.scss';

import Button from '../button';

function Project({title, excerpt, href, role, company, image}){



    return(
        <div className="project">
            <div className="project--image">
                <img src={image} alt={title} />
            </div>
            <div className="project--info">
                <div className="project--head">
                    <small className="project--tag">Case Study</small>
                    <strong className="project--title">{title}</strong>
                </div>
                <div className="project--text">
                    <p className="project--excerpt">
                        {excerpt}
                    </p>
                    <div className="project--actions">
                        <Button label="Read More" tabindex="-1" />
                    </div>
                    <Link to={href} title={title}></Link>
                </div>
                <div className="project--role">
                    <strong>Company</strong>
                    <p>{company}</p>
                    <strong>Role</strong>
                    <p>{role} </p>
                </div>
            </div>
        </div>
    )
}

export default Project;
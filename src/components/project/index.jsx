import { Link } from 'react-router-dom';
import './project.scss';

import Button from '../button';

function Project({type, title, excerpt, href, role, company, imageMobile, imageDesktop}){



    return(
        <div className="project">
            <div className="project--image">
                <div className="project--mobile"><img src={imageMobile} alt={title} /></div>
                <div className="project--desktop"><img src={imageDesktop} alt={title} /></div>
            </div>
            <div className="project--info">
                <div className="project--head">
                    <small className="project--tag">{type}</small>
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
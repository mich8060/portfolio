import './role.scss';

function Role({role, method, date, teammates}){
    return(
        <div className="role">
            <div className="role--column">
                <div className="role--group">
                    <strong>Role</strong>
                    <p>{role}</p>
                </div>
                <div className="role--group">
                    <strong>Method & Tools</strong>
                    <p>{method}</p>
                </div>
            </div>
            <div className="role--column">
                <div className="role--group">
                    <strong>Date</strong>
                    <p>{date}</p>
                </div>
                <div className="role--group">
                    <strong>Teammates</strong>
                    <p>{teammates}</p>
                </div>
            </div>
        </div>
    )
}

export default Role;
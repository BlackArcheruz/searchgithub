

const UserItem = (props)=>{
        const { login, avatar_url, html_url} = props.user;
        
        return (
            <div className="card text-center" style={{
                borderRadius: '5px',
                boxShadow: '5px 5px 10px #888888',
                border: 'none'
            }}>
                <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}}/>
                <h3>{login}</h3>

                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1" style={{borderRadius: '7px'}}>More</a>
                </div>
            </div>
        )
}
export default UserItem

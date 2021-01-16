import PropTypes from 'prop-types';


const Navbar = props=>{
        return (
            <nav className="navbar bg-primary" style={{boxShadow: '4px 3px 10px #888888'}}>
                <h1>
                    <i className={props.icon}></i> {props.title} 
                </h1>
                
            </nav>
        )
}
Navbar.defaultProps = {
    title:"Github Search",
    icon:"fab fa-github"
};

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Navbar = ({title, icon})=>{
        return (
            <nav className="navbar bg-primary" style={{boxShadow: '4px 3px 10px #888888'}}>
                <h1>
                    <i className={icon}></i> {title} 
                </h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
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

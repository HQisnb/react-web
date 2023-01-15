import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Haoqi's Zone</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/register">New Visitor</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
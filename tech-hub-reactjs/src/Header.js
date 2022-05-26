import {Link} from 'react-router-dom';
const Header=()=>{

    return (
        <div>
            <Link to="/">Home</Link>
            
            <Link to="/contact">Contact</Link>
            <Link to="/event">Event Handle</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/login">Login</Link>
            <Link to="/add">Register Student</Link>
            <Link to="/app">Pie Chart</Link>
            <Link to="/barchart">Bar Chart</Link>
            
            
        </div>
    )
}
export default Header;

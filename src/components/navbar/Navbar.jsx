import avatar from "../img/avatar1.svg";
import './Navbar.css';
const Navbar=({sidebarOpen, openSidebar})=>{
    return(
        <div className="navbar">
            <div className="nav_icon" 
                 onClick={()=>{ openSidebar()}}>
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="navbar_left">
                <a href="#">Subscribe</a>
                <a href="#">Video Management</a>
                <a href="#" className="active_link">Admin</a>
            </div>
            <div className="navbar_right">
                <a href="#"><i class="fa fa-search-plus" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-clock-o" aria-hidden="true"></i></a>
                <a href="#"><img src={avatar} alt="" width="30"></img></a>
            </div>
        </div>
    )
}

export default Navbar;
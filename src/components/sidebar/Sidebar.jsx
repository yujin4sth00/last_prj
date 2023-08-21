import avatar from "../img/avatar1.svg";
import './Sidebar.css';

const Sidebar=({sidebarOpen, closeSidebar})=>{
    
    return(
        <div className={sidebarOpen ? "sidebar_responsive":""} id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src={avatar} alt="" />
                    <h1>Design</h1>
                </div>
                <i class="fa fa-times" aria-hidden="true" onClick={()=>{closeSidebar()}}></i>
            </div>
            
        </div>
    )
}

export default Sidebar;
import React , {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FcIcons from "react-icons/fc";
import {Link} from "react-router-dom";
import { SlidebarData } from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar ] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const iconStyle = {
        color : 'white',
    };

    return (
        <>
        <IconContext.Provider value={{}}>

            <div className='navbar'>
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars style={iconStyle} onClick={showSidebar} />
                </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SlidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            
        </IconContext.Provider>
        </>
    )
}

export default Navbar 

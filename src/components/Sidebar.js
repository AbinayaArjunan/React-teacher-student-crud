import React from "react";
import Navpage from "./Navpage";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Datacontext from "../Data/Data";
import { faHouse, faTachometerAlt, faSignOut, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Sidebar() {

    const { style, Changestyle } = useContext(Datacontext)



    return (
        <div className="sidebar-left ">
            <ul className={style} id="accordionSidebar sidebar-color">
                <a
                    className="sidebar-brand  d-flex align-items-center justify-content-center"
                    href="##"
                >
                    <div className="sidebar-brand-icon">
                        <FontAwesomeIcon className="sidebar-icon" icon={faHouse}></FontAwesomeIcon>
                    </div>
                    <div className="sidebar-brand-text mx-3">
                        Sakthi Academy<sup></sup>
                    </div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">

                    <Link className="nav-link" to="/">
                        <div >
                            <FontAwesomeIcon className="sidebar-icon" icon={faTachometerAlt} />
                            <span >Dashboard</span>
                        </div>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                 
                <div className="sidebar-heading">Student</div>
                <Navpage
                    title="student"
                    Link={Link}
                />

                <div className="sidebar-heading">Teacher</div>
                <Navpage
                    title="teacher"
                    Link={Link}
                />



                <hr className="sidebar-divider" />

                <li className="nav-item">
                    <Link className="nav-link" to="/Logout">
                        <FontAwesomeIcon className="sidebar-icon" icon={faSignOut} />
                        <span>Log-out</span>
                    </Link>

                </li>

                <hr className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">

                    {/* className=" "
                        id="sidebarToggle"
                        onClick={Changestyle} */}

                    <FontAwesomeIcon icon={faChevronLeft} className="rounded-circle border-0 sidebar-icon" id="sidebarToggle"
                        onClick={Changestyle} />

                </div>


            </ul>
        </div>
    );
}

export default Sidebar;
import React from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Navpage({ title, Link }) {
    return (
        <div>

            <li className="nav-item">
                <Link
                    className="nav-link "
                    to={title === "student" ? "/Student" : "/Teacher"}
                >
                    <FontAwesomeIcon className="sidebar-icon" icon={faCircleUser} />
                    <span>{title === "student" ? "Student" : "Teacher"} Details</span>
                </Link>

            </li>
        </div>
    );
}

export default Navpage;
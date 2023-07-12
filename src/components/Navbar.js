import {
    faBars,
    faBell,
    faCogs,
    faDonate,
    faEnvelope,
    faExclamationTriangle,
    faFileAlt,
    faList,
    faSearch,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function TopNavBar() {

    const [alert_visible, setalert_visible] = useState(false);
    const [inbox_visible, setinbox_visible] = useState(false);
    const [user_account_visible, setuser_account_visible] = useState(false);
    return (
        <nav class="navbar  navbar-expand navbar-light bg-dark topbar mb-4 static-top shadow">
            <button
                id="sidebarToggleTop"
                class="btn btn-link d-md-none rounded-circle mr-3"
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input
                        type="text"
                        class="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </form>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown no-arrow d-sm-none">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#top"
                        id="searchDropdown"
                        // role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i class="fas fa-search fa-fw"></i>
                    </a>

                    <div
                        class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown"
                    >
                        <form class="form-inline mr-auto w-100 navbar-search">
                            <div class="input-group">
                                <input
                                    type="text"
                                    class="form-control bg-light border-0 small"
                                    placeholder="Search for..."
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button">
                                        <i class="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                <li class="nav-item dropdown no-arrow mx-1">
                    <button
                        onClick={() => setalert_visible(!alert_visible)}
                        class={
                            alert_visible
                                ? "nav-link dropdown-toggle"
                                : "nav-link dropdown-toggle"
                        }
                        id="alertsDropdown"
                        //  role="button"
                        // MyComponentrole="main"
                        data-toggle="dropdown"
                        aria-haspopup={alert_visible}
                        aria-expanded="false"
                        style={{ border: "none", background: "none" }}
                    >
                        <FontAwesomeIcon icon={faBell} />
                        <span class="badge badge-danger badge-counter">3+</span>
                    </button>

                    <div

                        class={
                            alert_visible
                                ? "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in show"
                                : "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        }
                        aria-labelledby="alertsDropdown"
                    >
                        <h6 class="dropdown-header">Alerts Center</h6>
                        <a class="dropdown-item d-flex align-items-center" href="#top">
                            <div class="mr-3">
                                <div class="icon-circle bg-primary">
                                    <FontAwesomeIcon icon={faFileAlt} />
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 12, 2019</div>
                                <span class="font-weight-bold">
                                    A new monthly report is ready to download!
                                </span>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#top">
                            <div class="mr-3">
                                <div class="icon-circle bg-success">
                                    <FontAwesomeIcon icon={faDonate} />
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 7, 2019</div>
                                $290.29 has been deposited into your account!
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#top">
                            <div class="mr-3">
                                <div class="icon-circle bg-warning">
                                    <i class="fas fa-exclamation-triangle text-white"></i>
                                    <FontAwesomeIcon icon={faExclamationTriangle} />
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 2, 2019</div>
                                Spending Alert: We've noticed unusually high spending for your
                                account.
                            </div>
                        </a>
                        <a class="dropdown-item text-center small text-gray-500" href="#top">
                            Show All Alerts
                        </a>
                    </div>
                </li>

                <li class="nav-item dropdown no-arrow mx-1">
                    <button
                        onClick={() => setinbox_visible(!inbox_visible)}
                        class={
                            inbox_visible
                                ? "nav-link dropdown-toggle"
                                : "nav-link dropdown-toggle"
                        }
                        id="messagesDropdown"
                        data-toggle="dropdown"
                        aria-haspopup={inbox_visible}
                        aria-expanded="false"
                        style={{ border: "none", background: "none" }}
                    >
                        <FontAwesomeIcon icon={faEnvelope} />

                        <span class="badge badge-danger badge-counter">7</span>
                    </button>

                    <div
                        class={
                            inbox_visible
                                ? "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in show"
                                : "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        }
                        aria-labelledby="messagesDropdown"
                    >
                        <h6 class="dropdown-header">Message Center</h6>
                        <a class="dropdown-item d-flex align-items-center" href="#top">
                            <div class="dropdown-list-image mr-3">
                                <img
                                    class="rounded-circle"
                                    src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_1.svg"
                                    alt="404"
                                />
                                <div class="status-indicator bg-success"></div>
                            </div>
                            <div class="font-weight-bold">
                                <div class="text-truncate">
                                    Hi there! I am wondering if you can help me with a problem
                                    I've been having.
                                </div>
                                <div class="small text-gray-500">Emily Fowler · 58m</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#top">
                            <div class="dropdown-list-image mr-3">
                                <img
                                    class="rounded-circle"
                                    src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_2.svg"
                                    alt="404"
                                />
                                <div class="status-indicator"></div>
                            </div>
                            <div>
                                <div class="text-truncate">
                                    I have the photos that you ordered last month, how would you
                                    like them sent to you?
                                </div>
                                <div class="small text-gray-500">Jae Chun · 1d</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#top">
                            <div class="dropdown-list-image mr-3">
                                <img
                                    class="rounded-circle"
                                    src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_3.svg"
                                    alt="404"
                                />
                                <div class="status-indicator bg-warning"></div>
                            </div>
                            <div>
                                <div class="text-truncate">
                                    Last month's report looks great, I am very happy with the
                                    progress so far, keep up the good work!
                                </div>
                                <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#top">
                            <div class="dropdown-list-image mr-3">
                                <img
                                    class="rounded-circle"
                                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                    alt="404"
                                />
                                <div class="status-indicator bg-success"></div>
                            </div>
                            <div>
                                <div class="text-truncate">
                                    Am I a good boy? The reason I ask is because someone told me
                                    that people say this to all dogs, even if they aren't good...
                                </div>
                                <div class="small text-gray-500">Chicken the Dog · 2w</div>
                            </div>
                        </a>
                        <a class="dropdown-item text-center small text-gray-500" href="#top">
                            Read More Messages
                        </a>
                    </div>
                </li>
                <div class="topbar-divider d-none d-sm-block"></div>


                <li class="nav-item dropdown no-arrow">
                    <button
                        onClick={() => setuser_account_visible(!user_account_visible)}
                        class={
                            user_account_visible
                                ? "nav-link dropdown-toggle"
                                : "nav-link dropdown-toggle"
                        }
                        id="userDropdown"
                        data-toggle="dropdown"
                        aria-haspopup={user_account_visible}
                        aria-expanded="false"
                        style={{ border: "none", background: "none" }}
                    >
                        <span class="mr-2 d-none d-lg-inline text-light-600 small">
                            ABINAYA
                        </span>
                        <img
                            class="img-profile rounded-circle"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGbxnqm-l1GHdl0HmFqHQrErAJN9X8WMU6g&usqp=CAU"
                            alt=""
                        />
                    </button>

                    <div
                        class={
                            user_account_visible
                                ? "dropdown-menu dropdown-menu-right shadow animated--grow-in show"
                                : "dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        }
                        aria-labelledby="userDropdown"
                    >
                        <a class="dropdown-item" href="#top">
                            <FontAwesomeIcon className="user-account-icon" icon={faUser} />
                            Profile
                        </a>
                        <a class="dropdown-item" href="#top">
                            <FontAwesomeIcon className="user-account-icon" icon={faCogs} />
                            Settings
                        </a>
                        <a class="dropdown-item" href="#top">
                            <FontAwesomeIcon className="user-account-icon" icon={faList} />
                            Activity Log
                        </a>
                        <div class="dropdown-divider"></div>
                        <Link
                            to="/"
                            className="dropdown-item"
                            href="#href"
                            data-toggle="modal"
                            data-target="#logoutModal"
                        >
                            <FontAwesomeIcon className="user-account-icon" icon={faSignOut} />
                            Logout
                        </Link>

                        
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default TopNavBar;
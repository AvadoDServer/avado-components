import React from "react";
import Icons from "../Icons/Icons"
const Navigation = ({
}) => (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div id="navbarAvado" className="navbar-menu is-active">
                    <div className="navbar-item is-inline">
                        <Icons.Wifi fill="#fff" width={24}/>
                    </div>
                    <div className="navbar-item is-inline">
                        <Icons.Help fill="#fff" width={28}/>
                    </div>
                    <a className="navbar-item is-inline" href="https://ava.do">
                        <Icons.Logo fill="#fff" width={48}/>
                    </a>
            </div>
        </nav>


        // <nav className="navbar" role="navigation" aria-label="main navigation">
        //     <div className="navbar-brand">
        //         <a className="navbar-item" href="https://bulma.io">
        //             <span class="icon">
        //                 <Icons.Logo fill="#000" />
        //             </span>
        //         </a>
        //         <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        //             <span aria-hidden="true"></span>
        //             <span aria-hidden="true"></span>
        //             <span aria-hidden="true"></span>
        //         </a>
        //     </div>
        //     <div id="navbarBasicExample" className="navbar-menu">
        //         <div className="navbar-start">
        //             <a className="navbar-item">Blijf</a>
        //             <a className="navbar-item">In</a>
        //             <a className="navbar-item">Uw</a>
        //             <div className="navbar-item has-dropdown is-hoverable">
        //                 <a className="navbar-link">Kot</a>
        //                 <div className="navbar-dropdown">
        //                     <a className="navbar-item">Zegt</a>
        //                     <a className="navbar-item">Maggie</a>
        //                     <a className="navbar-item">De</a>
        //                     <hr className="navbar-divider" />
        //                     <a className="navbar-item">Block</a>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="navbar-end">
        //             <div className="navbar-item">
        //                 <div className="buttons">
        //                     <a className="button is-primary">
        //                         <strong>Sign up</strong>
        //                     </a>
        //                     <a className="button is-light">Log in</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </nav>

        );


export default Navigation;
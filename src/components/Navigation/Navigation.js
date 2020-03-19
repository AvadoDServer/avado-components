import React from "react";
import Icons from "../Icons/Icons"
const Navigation = ({
}) => (
        <div className="avadobar-menu is-active has-avado-bg">
            <div className="avadobar-item is-inline-block-mobile is-inline-block-tablet-only">
                <Icons.Wifi fill="#fff" width={24}/>
            </div>
            <div className="avadobar-item is-inline-block-mobile is-inline-block-tablet-only cursorpointer">
                <Icons.Help fill="#fff" width={28}/>
            </div>
            <a className="avadobar-item is-inline-block-mobile is-inline-block-tablet-only" href="https://ava.do">
                <Icons.Logo fill="#fff" width={48}/>
            </a>
        </div>
);


export default Navigation;
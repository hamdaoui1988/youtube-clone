import React from "react";
import "./sidebarrow.css";

function SideBarRow({ Icon, title }) {
    return (
        <div className="sidebarrow">
            <Icon className="sidebarrow__icon" />
            <h2 className="sidebarrow__title">{title}</h2>

        </div>

    );
}

export default SideBarRow;


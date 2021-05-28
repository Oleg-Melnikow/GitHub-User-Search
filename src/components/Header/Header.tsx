import React from "react";
import icon from "../../assets/image/Vector.svg";
import searchIcon from "../../assets/image/search.svg";
import style from "./Header.module.css"

export const Header = () => {
    return(
        <header className={style.header}>
            <img src={icon} alt="icon"/>
            <div className={style.search}>
                    <img src={searchIcon} alt="search"/>
                    <input type="text"  placeholder="Enter GitHub username"/>
            </div>
        </header>
    )
}
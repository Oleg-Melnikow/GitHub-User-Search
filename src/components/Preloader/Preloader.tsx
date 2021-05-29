import React from "react";
import style from "./Preloader.module.css";

export const Preloader = () => {
    return (
        <div className={style.wrapLoader}>
            <div className={style.loader}/>
        </div>
    )
}
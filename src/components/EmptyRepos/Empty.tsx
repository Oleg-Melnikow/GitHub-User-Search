import React from "react";
import emptyIcon from "../../assets/image/empty.svg"
import style from "./Empty.module.css"

export const Empty = () => {

    return (
        <div className={style.empty}>
            <img src={emptyIcon} alt="econ"/>
            <p>Repository list is empty</p>
        </div>
    )
}
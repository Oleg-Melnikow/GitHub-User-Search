import React from "react";
import style from "./DefaultPage.module.css";


type PropsType = {
    image: string,
    description: string
}

export const DefaultPage = (props: PropsType) => {

    const {image, description} = props

    return (
        <div className={style.notFound}>
            <img src={image} alt=""/>
            <p>{description}</p>
        </div>
    )
}
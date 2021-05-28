import React from "react";
import style from "./Repositories.module.css"
import {Repos} from "../../../api/api";

type RepositoriesPropsType = {
    repositories: Array<Repos> | null
}

export const Repositories = (props: RepositoriesPropsType) => {

    return(
        <div className={style.repositories}>
            <p>Repositories</p>
            {props.repositories && props.repositories.map(res => {
                return <div key={res.id} className={style.repository}>
                    <a href={res.html_url} target="_blank" rel="noreferrer">{res.full_name}</a>
                    <p>{res.description}</p>
                </div>
            })}
        </div>
    )
}
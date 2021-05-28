import React from "react";
import style from "./UserInfo.module.css"
import avatar from "../../../assets/image/avatar_default.jpg"
import followersIcon from "../../../assets/image/shared.svg"
import followingIcon from "../../../assets/image/provate.svg"
import {UserType} from "../../../api/api";

type UserInfoPropsType = {
    user: UserType
}

export const UserInfo = (props: UserInfoPropsType) => {

    const {html_url, avatar_url, login, name, followers, following} = props.user

    return(
        <main className={style.userInfo}>
            <img src={avatar_url ? avatar_url : avatar} alt="avatar"/>
            <div className={style.userName}>
                <p>{name}</p>
                <a href={html_url} target="_blank" rel="noreferrer">{login}</a>
                <div className={style.follow}>
                    <div>
                        <img src={followersIcon} alt=""/>
                        <span>{followers} followers</span>
                    </div>
                    <div>
                        <img src={followingIcon} alt=""/>
                        <span>{following} following</span>
                    </div>
                </div>
            </div>
        </main>
    )
}
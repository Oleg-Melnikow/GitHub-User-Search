import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import icon from "../../assets/image/Vector.svg";
import searchIcon from "../../assets/image/search.svg";
import style from "./Header.module.css"
import {useDispatch} from "react-redux";
import {setRepositories, setUser} from "../../bll/appReducer";

export const Header = () => {

    const [userName, setUserName] = useState<string>("");
    const dispatch = useDispatch();

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>){
        setUserName(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            dispatch(setUser(userName));
            dispatch(setRepositories(userName));
            setUserName("");
        }
    }

    return(
        <header className={style.header}>
            <img src={icon} alt="icon"/>
            <div className={style.search}>
                    <img src={searchIcon} alt="search"/>
                    <input type="text"  placeholder="Enter GitHub username" onChange={onChangeHandler}
                           value={userName}
                           onKeyPress={onKeyPressHandler}/>
            </div>
        </header>
    )
}
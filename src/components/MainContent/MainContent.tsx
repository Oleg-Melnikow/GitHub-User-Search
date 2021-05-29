import React from "react";
import "../../App.css";
import {UserInfo} from "./UserInfo/UserInfo";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {ReposType, UserType} from "../../api/types-api";
import {DefaultPage} from "../DefaultPage/DefaultPage";
import {Repositories} from "./Repositories/Repositories";
import {Empty} from "../EmptyRepos/Empty";
import {appStatusType, loaderStatusType} from "../../bll/settingsReducer";
import userNotFound from "../../assets/image/Union.svg";
import userSearch from "../../assets/image/search.svg";
import {nextPage} from "../../bll/appReducer";
import {Preloader} from "../Preloader/Preloader";

export const MainContent = () => {
    const dispatch = useDispatch();
    const user = useSelector<AppStateType, UserType | null>(state => state.app.user);
    const status = useSelector<AppStateType, appStatusType>(state => state.settings.status);
    const loader = useSelector<AppStateType, loaderStatusType>(state => state.settings.loader);
    const repositories = useSelector<AppStateType, Array<ReposType> | null>(state => state.app.repositories);

    function handleChangePage(page: number) {
        dispatch(nextPage(user?.login || "", page));
    }

    return (
        <div className="wrap-main">
            {
                loader === "loading" ?
                    <Preloader/> :
                    status === "start" ?
                        <DefaultPage image={userSearch} description="Start with searching a GitHub user"/> :
                        user ?
                            <main className="mainContent">
                                <UserInfo user={user}/>
                                {
                                    repositories?.length ?
                                        <Repositories repositories={repositories} publicRepos={user.public_repos}

                                                      nextPage={handleChangePage}/> :
                                        <Empty/>
                                }
                            </main> :
                            <DefaultPage image={userNotFound} description="User not found"/>
            }
        </div>
    )
}
import {AppStateType} from "./store";
import {ThunkAction} from "redux-thunk";
import {userAPI} from "../api/api";
import {setAppLoaderAC, setAppSettingsActionType, setAppStatusAC} from "./settingsReducer";
import {ReposType, UserType} from "../api/types-api";

export type AppType = {
    user: UserType | null,
    repositories: Array<ReposType> | null
}

let initialState: AppType = {
    user: null,
    repositories: null,
}

export type AppActionsTypes =
    ReturnType<typeof setUserSuccess>
    | ReturnType<typeof setRepositoriesSuccess>
    | setAppSettingsActionType;

export const setUserSuccess = (user: any) => ({type: "APP/SET_USER", user} as const);
export const setRepositoriesSuccess = (repos: any) => ({type: "APP/SET_REPOSITORIES", repos} as const);

export const appReducer = (state: AppType = initialState, action: AppActionsTypes): AppType => {
    switch (action.type) {
        case "APP/SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "APP/SET_REPOSITORIES":
            return {
                ...state,
                repositories: action.repos
            }
        default:
            return state;
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionsTypes>

export const setUser = (userName: string): ThunkType => (dispatch) => {
    dispatch(setAppLoaderAC("loading"));
    userAPI.getUsers(userName)
        .then(response => {
            dispatch(setUserSuccess(response));
            dispatch(setAppStatusAC("succeeded"));
            dispatch(setAppLoaderAC("succeeded"));
        })
        .catch(() => {
            dispatch(setUserSuccess(null));
            dispatch(setAppLoaderAC("succeeded"));
            dispatch(setAppStatusAC("succeeded"));
        })
}

export const setRepositories = (userName: string): ThunkType => (dispatch) => {
    userAPI.getRepos(userName)
        .then(response => dispatch(setRepositoriesSuccess(response)))
        .catch(() => dispatch(setRepositoriesSuccess(null)));
}

export const nextPage = (userName: string, page: number): ThunkType =>
    (dispatch) => {
        userAPI.getRepos(userName, page)
            .then(response => dispatch(setRepositoriesSuccess(response)))
            .catch(() => dispatch(setRepositoriesSuccess(null)));
    }

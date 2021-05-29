export type loaderStatusType = "loading" | "succeeded";
export type appStatusType = "start" | "succeeded";

const initialState = {
    loader: "succeeded" as loaderStatusType,
    status: "start" as appStatusType
}

export type settingsStateType = typeof initialState

export const settingsReducer = (state: settingsStateType = initialState, action: ActionsType): settingsStateType => {
    switch (action.type) {
        case "APP/SETTINGS/SET-LOADER":
            return {...state, loader: action.loader}
        case "APP/SETTINGS/SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export type setAppSettingsActionType = ReturnType<typeof setAppLoaderAC> | ReturnType<typeof setAppStatusAC>;
export const setAppLoaderAC = (loader: loaderStatusType) => ({type: "APP/SETTINGS/SET-LOADER", loader} as const);
export const setAppStatusAC = (status: appStatusType) => ({type: "APP/SETTINGS/SET-STATUS", status} as const);

type ActionsType = setAppSettingsActionType;
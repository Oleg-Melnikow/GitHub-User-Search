import axios from "axios";
import {ReposType, UserType} from "./types-api";

const setInstance = (page?: number) => axios.create({
    baseURL: "https://api.github.com/users/",
    params: {
        per_page: 4,
        page
    }
})

export const userAPI = {
    getUsers(userName: string) {
        return setInstance().get<UserType>(`${userName}`)
            .then(response => response.data)
    },
    getRepos(userName: string, page?: number) {
        return setInstance(page).get<Array<ReposType>>(`${userName}/repos`)
            .then(response => response.data)
    }
}
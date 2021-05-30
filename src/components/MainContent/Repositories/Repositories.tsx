import React, {useState} from "react";
import style from "./Repositories.module.css";
import ReactPaginate from 'react-paginate';
import {ReposType} from "../../../api/types-api";

type RepositoriesPropsType = {
    repositories: Array<ReposType> | null,
    publicRepos: number,
    nextPage: (page: number) => void
}

export const Repositories = (props: RepositoriesPropsType) => {

    const count = Math.ceil(props.publicRepos / 4);
    const [page, setPage] = useState<number>(1);

    const handleChangePage = (selectedItem: { selected: number }) => {
        setPage(selectedItem.selected);
        props.nextPage(selectedItem.selected + 1);
    }

    return (
        <div className={style.repositories}>
            <p className={style.header}>Repositories ({props.publicRepos})</p>
            <div className={style.repositoriesList}>
                {props.repositories && props.repositories.map(res => {
                    return <div key={res.id} className={style.repository}>
                        <a href={res.html_url} target="_blank" rel="noreferrer">{res.name}</a>
                        <p>{res.description}</p>
                    </div>
                })}
            </div>
            <div>
                <ReactPaginate pageCount={count} marginPagesDisplayed={3} pageRangeDisplayed={1}
                               containerClassName={style.paginateContainer}
                               pageClassName={style.paginatePage}
                               activeClassName={style.paginateActive}
                               nextClassName={style.paginateNext}
                               previousClassName={style.paginateNext}
                               disabledClassName={style.paginateDisabled}
                               initialPage={page - 1}
                               onPageChange={handleChangePage}
                />
            </div>
        </div>
    )
}
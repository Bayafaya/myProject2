import React, { useMemo, useState } from "react";
import { getPagesCount } from "../../../utils/pages";

const MyPagination = ({totalPages,page,changePage}) => {
    let pagesArray = useMemo(()=>{
        console.log('working...')
        return getPagesCount(totalPages)
    },[totalPages]);
    return (
        <div className="page__wrapper">
            {pagesArray.map(
                p => <span onClick={() => changePage(p)} key={p} className={page === p
                    ? 'page page__current'
                    : 'page'}>{p}</span>
            )}
        </div>
    )
}
export default MyPagination;
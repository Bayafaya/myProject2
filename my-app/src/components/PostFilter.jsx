import React from "react";
import MyInputs from "./ui/inputs/MyInputs";
import MySelect from "./ui/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInputs placeholder='search ...'
                value={filter.query}
                onChange={e => setFilter({...filter,query: e.target.value})} />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='sort'
                options={
                    [
                        { value: 'title', name: 'sort name' },
                        { value: 'body', name: 'sort body' }
                    ]
                } />
        </div>
    )
}
export default PostFilter;
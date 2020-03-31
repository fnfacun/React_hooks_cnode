import React from 'react';
import qs from 'qs';
import { Link, useLocation } from 'react-router-dom';
import { Pagination } from 'antd';

export default function IndexPagination() {
    let { search } = useLocation();
    let { tab="all", page=1 } = qs.parse(search.substring(1));
    return (<div className="index-pagination">
        <Pagination 
            current={Number(page)}
            defaultPageSize={20}
            total={1000}
            itemRender={(page, type)=>{
                switch(type){
                    case "page":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                    case "prev":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>
                    case "next":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>
                        default: 
                            return <Link to={`/?tab=${tab}&page=${page}`}>{"..."}</Link>
                }
            }}
        />
    </div>)
}
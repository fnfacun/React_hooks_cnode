import React from 'react';
import qs from 'qs';
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { indexNavs, types } from "../../router/router_list";

function IndexNav() {
    let { search } = useLocation();
    let { tab } = qs.parse(search.substring(1));
    let activeIndex = tab === undefined? 0: types.indexOf(tab); 
    return (
        <Menu 
            className="indexNav" 
            mode="horizontal"
            selectedKeys={[activeIndex + ""]}
        >
            {indexNavs.map((item, index)=>{
                return (<Menu.Item key={index}>
                    <Link to={item.to}>{item.name}</Link>
                </Menu.Item>)
            })}
        </Menu>
    )
};

export default IndexNav;
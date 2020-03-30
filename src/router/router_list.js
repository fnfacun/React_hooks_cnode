import React from 'react';
import qs from 'qs';
import Index from '../views/index/index';
import Topic from '../views/topic/index';
import User from '../views/user/index';
import About from '../views/about/index';
import GetStart from '../views/getstart/index';
import NotFount from '../views/notFount/index';

const types = ["all", "good", "share", "ask", "job", "dev"];

const routerList = [
    {
        path: "/",
        exact: true,
        render: (props) => {
            let { search } = props.location;
            let { tab, page } = qs.parse(search.substring(1));
            /**
             * 不为 404 的情况
             *     1. tab 存在 page 不存在或者为 0 
             *     2. tab 和 page 都不存在
             */
            if(
                tab === undefined && page === undefined ||
                types.includes(tab) && (page === undefined || page > 0)
            ){
                return <Index {...props} />
            }
            return <NotFount />
        }
    },{
        path: "/topic/:id",
        exact: true,
        render: (props) => {
            return <Topic {...props} />
        }
    },{
        path: "/user/:username",
        exact: true,
        name: "用户详情",
        render: (props) => {
            return <User {...props} />
        }
    },{
        path: "/getstart",
        exact: true,
        render: (props) => {
            return <GetStart {...props} />
        }
    },{
        path: "/about",
        exact: true,
        render: (props) => {
            return <About {...props} />
        }
    },{
        path: "",
        exact: false,
        render: (props) => {
            return <NotFount {...props} />
        }
    }
];

const navs = [
    {
        to: "/",
        name: "首页"
    },{
        to: "/getstart",
        name: "新手入门"
    },{
        to: "/about",
        name: "关于我们"
    }
];

const indexNavs = [
    {
        to: "/?tab=all",
        name: "全部"
    },{
        to: "/?tab=good",
        name: "精华"
    },{
        to: "/?tab=share",
        name: "分享"
    },{
        to: "/?tab=ask",
        name: "问答"
    },{
        to: "/?tab=job",
        name: "招聘"
    },{
        to: "/?tab=dev",
        name: "客户端测试"
    }
];

export { routerList, navs, indexNavs, types };
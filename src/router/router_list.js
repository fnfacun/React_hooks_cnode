import React from 'react';
import Index from '../views/index/index';
import Details from '../views/details/index';
import User from '../views/user/index';
import About from '../views/about/index';

const routerList = [
    {
        path: '/',
        exact: true,
        name: "首页",
        render: () => {
            return <Index />
        }
    },
    {
        path: '/details',
        exact: true,
        name: "主题详情",
        render: () => {
            return <Details />
        }
    },
    {
        path: '/user',
        exact: true,
        name: "用户详情",
        render: () => {
            return <User />
        }
    },
    {
        path: '/about',
        exact: true,
        name: "关于",
        render: () => {
            return <About />
        }
    }
];

export default routerList;
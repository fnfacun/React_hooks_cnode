import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routerList from './router_list';

export default function IndexRouter(){
    return (
        <Switch>
            {routerList.map((item, index)=>{
                return (<Route
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    render={item.render}
                />)
            })}
        </Switch>
    )
};
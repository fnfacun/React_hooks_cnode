import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routerList } from './router_list';

export default function IndexRouter(){
    return (
        <Switch>
            {routerList.map((item, index)=>{
                return (<Route
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    render={(props)=>{
                        return item.render(props);
                    }}
                />)
            })}
        </Switch>
    )
};
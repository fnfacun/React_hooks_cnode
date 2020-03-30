import React, { useEffect } from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTopicList } from '../../store/action/index';
import IndexNav from './indexNav';
import TopicList from '../../components/topicList';

function Index(props){
    let { data, loading  } = useSelector(state=>state.topic);
    let getData = useTopicList();
    let { search } = useLocation();
    let { tab, page } = qs.parse(search.substring(1));
    useEffect(()=>{
        getData(tab, page);
    },[tab, page]);
    return (<div>
        <IndexNav />
        <TopicList 
            data={data}
            loading={loading}
        />
    </div>)
};

export default Index;
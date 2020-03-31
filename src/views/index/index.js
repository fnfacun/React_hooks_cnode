import React, { useEffect } from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTopicsList } from '../../store/action/index';
import IndexNav from './indexNav';
import TopicList from '../../components/topicList';
import IndexPagination from './indexPagination';

function Index(){
    let { data, loading  } = useSelector(state=>state.topics);
    let getData = useTopicsList();
    let { search } = useLocation();
    let { tab="all", page=1 } = qs.parse(search.substring(1));
    useEffect(()=>{
        getData(tab, page);
    },[tab, page]);
    return (<div>
        <IndexNav />
        <TopicList 
            data={data}
            loading={loading}
        />
        {loading? "": <IndexPagination />}
    </div>)
};

export default Index;
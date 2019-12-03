import React from 'react';
import NoCacheQLBox from '../components/NoCacheQL';
import CacheQLBox from '../components/CacheQL.jsx';
import CacheQL from '../components/CacheQL.jsx';

const CompareContainer = (props) => {
    return ( 
        <div>
            <h3>compare container</h3>
            <NoCacheQLBox />
            <CacheQLBox />
        </div>
     );
}
 
export default CompareContainer;
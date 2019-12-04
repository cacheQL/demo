import React from 'react';
import NoCacheQLBox from '../components/NoCacheQL';
import CacheQLBox from '../components/CacheQL.jsx';

const CompareContainer = (props) => {
    return ( 
        <div>
            <h2>compare container</h2>
            <NoCacheQLBox />
            <CacheQLBox />
        </div>
     );
}
 
export default CompareContainer;
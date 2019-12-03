import React from 'react';
//might need to do two separate ones with the same styling/ flexbox in compare container
import ResultBox from '../components/ResultBox.jsx';
import TimeBox from '../components/TimeBox';

const CacheQL = (props) => {
    return ( 
        <div>
            <h2>cacheql container</h2>
            <TimeBox />
            <ResultBox />
        </div>
     );
}
 
export default CacheQL;
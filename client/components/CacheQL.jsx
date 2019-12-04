import React from 'react';
//might need to do two separate ones with the same styling/ flexbox in compare container
import ResultBox from '../components/ResultBox.jsx';
import TimeBox from '../components/TimeBox';


//when you click a button from FE you send fetch with post to the backend
//The backend will get the request and run it through the middlewares
//The backend will send a response with the result

//we will start timer onClick from the Frontend 
//we will stop the timer when result gets populated (async await?)



const CacheQL = (props) => {
    return ( 
        <div className="qlContainer">
            <h2>cacheql container</h2>
            <TimeBox />
            <ResultBox />
        </div>
     );
}
 
export default CacheQL;
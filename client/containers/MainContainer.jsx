import React, { Component } from 'react';
import QueryContainer from './QueryContainer.jsx';
import CompareContainer from './CompareContainer.jsx';
import BarContainer from './BarContainer.jsx';


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cacheResult: '',
            cacheTime: '',
            noCacheResult: '',
            noCacheTime: ''
         }
    }
    render() { 
        return ( 
            <React.Fragment>
                <QueryContainer />
                <CompareContainer />
                <BarContainer />
            </React.Fragment>
         );
    }
}
 
export default MainContainer;
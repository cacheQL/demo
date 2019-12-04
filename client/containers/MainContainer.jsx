import React, { Component } from 'react';
import QueryContainer from './QueryContainer.jsx';
import CompareContainer from './CompareContainer.jsx';
import BarContainer from './BarContainer.jsx';
import '../components/components.css'


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          cachedata:700,
          nocachedata:500,
         }
    }
    render() { 
        return ( 
            <React.Fragment>
                <QueryContainer />
                <CompareContainer />
                <BarContainer cachedata = {this.state.cachedata} nocachedata={this.state.nocachedata}/>
            </React.Fragment>
         );
    }
}
 
export default MainContainer;
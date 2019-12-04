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
         };
         this.queryPost = this.queryPost.bind(this);
    }

    queryPost(event) {
        event.preventDefault();
        console.log('in queryPost')
        fetch('/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ 
            query: `{ 
              name {
                message
              } 
            }`
          })
        })
        .then(res => res.json())
        .then(res => console.log(res.data))
      }

    render() { 
        return ( 
            <React.Fragment>
                <QueryContainer queryPost={this.queryPost}/>
                <CompareContainer />
                <BarContainer />
            </React.Fragment>
         );
    }
}
 
export default MainContainer;
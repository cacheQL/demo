import React from 'react';

const QueryContainer = (props) => {
    return ( 
        <div className="query-container">
            <h4>query container</h4>
            <form className="message-send">
                Name: <input type="text" className="fname" placeholder="Name"/>
                <br/>
                Message: <input type="text" className="lname" placeholder="Message"/>
                <br/>
                <input type="submit" value="Submit" onClick={props.queryPost}/>
            </form>

            <form className="message-get">
                Name: <input type="text" className="fname" placeholder="Name"/>
                <br/>
                <input type="submit" value="Get Message"/>
            </form>
        </div>
     );
}
 
export default QueryContainer;
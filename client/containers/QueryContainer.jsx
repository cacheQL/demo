import React from "react";

const QueryContainer = props => {
  return (
    <div className="query-container">
      <h4 className="query-container-title">Query</h4>
      <form className="message-send">
        Name:{" "}
        <input
          type="text"
          className="fname"
          placeholder="Name"
          value={props.name}
          onChange={props.nameHandler}
        />
        <br />
        Message:{" "}
        <input
          type="text"
          className="lname"
          placeholder="Message"
          value={props.message}
          onChange={props.messageHandler}
        />
        <br />
        <input type="submit" value="Submit" onClick={props.queryPost} />
      </form>

      <form className="message-get">
        Name:{" "}
        <input
          type="text"
          className="fname"
          placeholder="Name"
          value={props.nameGet}
          onChange={props.nameGetHandler}
        />
        <br />
        <input type="submit" value="Get Message" className="get-message-button" onClick={props.queryGet} />
      </form>
    </div>
  );
};

export default QueryContainer;

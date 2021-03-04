import React, { Component } from "react";

import MyNewConsumer from "./context";

class Api extends Component {
  addNewItems = (dispatch) => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        let newState = data.slice(0, 7);
        console.log(newState);
        dispatch({ type: "new_items", payload: newState });
      });
  };
  render() {
    return (
      <MyNewConsumer>
        {(value) => {
          return (
            <div className="second-container">
              <div>
                {value.myitems.map((item) => {
                  return (
                    <div className="third-container">
                      <form className="third-container">
                        <p>Title: {item.title}</p>
                        <p className="another-container">
                          Status:{" "}
                          {item.completed ? (
                            <span>Done</span>
                          ) : (
                            <span>Pending</span>
                          )}
                        </p>
                      </form>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => {
                  this.addNewItems(value.dispatch);
                }}
              >
                Show my Data
              </button>
            </div>
          );
        }}
      </MyNewConsumer>
    );
  }
}

export default Api;

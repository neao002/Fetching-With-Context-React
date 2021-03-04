import React, { Component } from "react";

const MyNewContext = React.createContext();

const reducer = (myState, myAction) => {
  switch (myAction.type) {
    case "new_items":
      return { myitems: myAction.payload };

    default:
      return myState;
  }
};

export class NewSecondProvider extends Component {
  state = {
    myitems: [],
    dispatch: (myAction) => {
      this.setState((myState) => reducer(myAction, myState));
    },
  };
  render() {
    return (
      <MyNewContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MyNewContext.Provider>
    );
  }
}

const MyNewConsumer = MyNewContext.Consumer;
export default MyNewConsumer;

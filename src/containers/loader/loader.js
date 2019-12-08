import React from "react";
import Loader from "react-loader-spinner";
export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Loader
          type="MutatingDots"
          color="#f50057"
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      </div>
    );
  }
}

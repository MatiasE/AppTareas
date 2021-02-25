import React, { Component, Fragment } from "react";
import "./styles.css";
import tareas from "./tareas.json";

class App extends Component {
  state = {
    tareas: tareas
  };
  render() {
    return (
      <div>
        {this.state.tareas.map(function (e) {
          return (
            <Fragment>
              <h1>{e.title}</h1>
              <p>
                {e.id} - {e.title} - {e.description} - {e.done}
              </p>
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default App;

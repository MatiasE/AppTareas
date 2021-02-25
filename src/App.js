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
            <p key={e.id}>
              {e.id} - {e.title} - {e.description} - {e.done}
            </p>
          );
        })}
      </div>
    );
  }
}

export default App;

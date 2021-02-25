import React, { Component, Fragment } from "react";
import "./styles.css";
import tareas from "./tareas.json";
import Tareas from "./Tareas.js";

class App extends Component {
  state = {
    tareas: tareas
  };
  render() {
    return (
      <div>
        <Tareas />
        {this.state.tareas.map(function (e) {
          return (
            <p key={e.id}>
              {e.id} - {e.title} - {e.description} - {e.done}
            </p>
          );
        })}
        <Tareas />
      </div>
    );
  }
}

export default App;

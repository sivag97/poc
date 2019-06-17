import React from "react";
import SongList from "./SongList";
import SongSelected from "./SongSelected";
class App extends React.Component {
  render() {
    return (
      <div>
        <label>
          SONG LIST
          <div className="ui container grid">
            <div className="ui row">
              <div className="column eight wide">
                <SongList />
              </div>
              <div>
                <SongSelected />
              </div>
            </div>
          </div>
        </label>
      </div>
    );
  }
}

export default App;

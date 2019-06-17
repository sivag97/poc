import React from "react";
import { connect } from "react-redux";
import { songSelect } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div>
            <div className="right floated content">
              <button
                onClick={() => this.props.songSelect(song)}
                className="ui button primary"
              >
                select
              </button>
            </div>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.song };
};

export default connect(
  mapStateToProps,
  { songSelect }
)(SongList);

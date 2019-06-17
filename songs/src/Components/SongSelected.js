import React from "react";
import { connect } from "react-redux";

const SongSelected = ({ song }) => {
  console.log(song);
  if (!song) {
    return <div>select A Song</div>;
  }
  return (
    <div>
      <div>DETAILS:</div>
      <div>TITLE: {song.title}</div>
      <br />
      <div>DURATION: {song.duration}</div>
    </div>
  );
};
const mapStateToProps = state => {
  return { song: state.songSelect };
};

export default connect(mapStateToProps)(SongSelected);

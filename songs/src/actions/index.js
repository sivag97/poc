//actions

export const songSelect = song => {
  return {
    type: "CREATE_SONG",
    payload: song
  };
};

import sectionData from '../../data/directory.data';

const INITIAL_STATE = { sections: sectionData };

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

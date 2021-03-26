import sectionData from '../../../src/contexts/directory/directory.data.js';

const INITIAL_STATE = { sections: sectionData };

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

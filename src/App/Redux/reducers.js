import { combineReducers } from "redux";

const shipListState = {
  ships: [
    { name: "Carrier",
     length: 5
    },
    { name: "Battleship",
     length: 4
    },
    { name: "Cruiser",
     length: 3 
    },
    { name: "Submarine",
     length: 3 
    },
    { name: "Destroyer",
     length: 2
    },
  ],
};

const boardState = {
  cells: [
    Array(10).fill(null),
    Array(10).fill(null),
    Array(10).fill(null),
    Array(10).fill(null),
    Array(10).fill(null),
    Array(10).fill(null),
    Array(10).fill(null),
    Array(10).fill(null),
    Array(10).fill(null),
    Array(10).fill(null),
  ],
};



export const shipList = (state = shipListState.ships, action) => {
  return state;
};

const board = (state = boardState.cells, action) => {
  return state;
};


const battleship = combineReducers({
  shipList,
  board,
});

export default battleship;

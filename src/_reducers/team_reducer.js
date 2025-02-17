import { GET_TEAM_DETAIL, GET_TEAM__ARR } from '_types/teamTypes';

const initState = {
  teamElement: null,
  teamArray: [],
};

const userReducer = (state = initState, action) => {
  // type마다 다른 것을 switch로 처리
  switch (action.type) {
    case GET_TEAM_DETAIL:
      return { ...state, teamElement: action.payload };
    case GET_TEAM__ARR:
      return { ...state, teamArray: action.payload };
    default:
      return state;
  }
};

export default userReducer;

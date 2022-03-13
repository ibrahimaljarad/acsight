const initialState = {
  allData: [],
};

const smsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SMS_DATA":
      return { ...state, allData: action.allData };

    default:
      return { ...state };
  }
};
export default smsReducer;

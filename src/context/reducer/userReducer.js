const initialState = {
    isLogin: false
};

export default function userReducer(state = initialState, action){
    let data;
    switch (action.type){
        case "SET_USER":
            data = {
                ...initialState,
                ...action.payload
            };
            return data;
        case "UPDATE_USER":
            data = {
                ...state,
                ...action.payload
            };
            return data;
        case "RESET_USER":
            data = initialState;
            return data;

        default: return state;
    }
};


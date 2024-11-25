export const setPlan = (state, action) => {
    // action
    switch (action.type) {
        case 'DELETE_PLAN':
            return state.filter((plan) => state.id !== action.payload.id);

        default:
            return state;
    }
};

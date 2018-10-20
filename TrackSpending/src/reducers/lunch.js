const lunchList = [];

export default function Lunch(state = lunchList, action) {
    switch (action.type) {
        case "newLunch":
            return [
                ...state,
                {
                    id: action.data.id,
                    type:action.data.type,
                    price: action.data.price,
                    interest: undefined,
                    createTime: action.data.time,
                    finishTime: undefined,
                },
            ];
        case "deleteLunch":
            return [
                ...state.slice(0, action.data),
                ...state.slice(action.data + 1)
            ];

        default:
            return state;
    }
}

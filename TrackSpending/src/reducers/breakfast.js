const breakfastList = [
    {
        id: 0,
        price: undefined,
        interest: undefined,
        createTime: undefined,
        finishTime: undefined,
    },
];

// const goodsList= [
//     {
//         breakfastList: [
//             {
//                 time: '9/27', price: 50
//             }, {
//                 time: '9/26', price: 55
//             }
//         ],
//         lunchList:[
//             {
//                 time: '9/27', price: 50
//             }, {
//                 time: '9/26', price: 55
//             }
//         ]
//     }
// ]
// goodsList[0].

export default function breakfast(state = breakfastList, action) {
    switch (action.type) {
        // case "setAgenda":
        //     return action.data;
        case "newBreakfast":
            return [
                ...state,
                {
                    id: action.data,
                    price: undefined,
                    interest: undefined,
                    createTime: undefined,
                    finishTime: undefined,
                },
            ];
        case "deleteBreakfast":
            return [
                ...state.slice(0, action.data),
                ...state.slice(action.data + 1)
            ];

        // case "updateAgenda":
        //     return [
        //         ...state.slice(0, action.data.key),
        //         {
        //             ...state[action.data.key],
        //             content: action.data.value,
        //             createTime: action.data.time
        //         },
        //         ...state.slice(action.data.key + 1)
        //     ];
        // case "doneAgenda":
        //     return [
        //         ...state.slice(0, action.data),
        //         {
        //             ...state[action.data],
        //             isAgendaFinished: !state[action.data].isAgendaFinished,
        //             finishTime: action.time
        //         },
        //         ...state.slice(action.data + 1)
        //     ];
        default:
            return state;
    }
}

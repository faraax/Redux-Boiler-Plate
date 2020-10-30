
const INITIAL_STATE = {
    users: [{
        name: "Faraz",
        email: "Faraz@gmail.com"
    }, {
        name: "Safeer",
        email: "Safeer@gmail.com"
    }]
}


export default (state = INITIAL_STATE, action) => {
    // console.log(state)
    switch (action.type) {
        case "SETDATA":
            console.log(state)
            return ({
                ...state,
                users: [...state.users,action.data] 
            })
        default:
            return state
    }
}
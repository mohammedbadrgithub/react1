const InitialValue ={
    cards:[]
}

export default function CardReducer(state = InitialValue, action ){
    switch(action.type){
        case "INCREAMENT": 
            return {
                ...state,
               cards:action.payload
            }
        default: 
            return state
    }
}
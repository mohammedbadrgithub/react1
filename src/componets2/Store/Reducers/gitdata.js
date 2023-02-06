const InitialValue ={
    list: [],
}

export default function GITNEWDATA(state = InitialValue, action ){
    switch(action.type){
        case "GOTLIST": 
            return {
                ...state,
               list: action.payload
            }
        default: 
            return state
    }
}
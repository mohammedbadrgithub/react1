
const InitialValue ={
    loader: true
}

export default function LoaderReducer(state = InitialValue, action ){
    switch(action.type){
        case "CHANGELOADER": 
            return {
                ...state,
               loader: action.payload
            }
        default: 
            return state
    }
}
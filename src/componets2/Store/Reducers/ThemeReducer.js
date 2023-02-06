
const InitialValue ={
    theme: "Dark"
}

export default function ThemeReducer(state = InitialValue, action ){
    switch(action.type){
        case "CHANGETHEME": 
            return {
                ...state,
               theme: action.payload
            }
        default: 
            return state
    }
}
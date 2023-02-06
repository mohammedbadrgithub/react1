
const InitialValue ={
    lang: "En"
}

export default function LangReducer(state = InitialValue, action ){
    switch(action.type){
        case "CHANGELANG": 
            return {
                ...state,
               lang: action.payload
            }
        default: 
            return state
    }
}
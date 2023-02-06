const InitialValue ={
    Objects:[]
}

export default function ObjectReducer(state = InitialValue, action ){
    switch(action.type){
        case "INCREAMENTOject": 
            return {
                ...state,
                Objects:action.payload
            }
        default: 
            return state
    }
}
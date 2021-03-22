import { GET_TREATMENTS, TREATMENT_ERROR, GET_TREATMENT, UPDATE_TREATMENT, CLEAR_TREATMENT} from "../actions/types"

const initalState={ 
    treatment:[],
    treatments:[],
    loading:true,
    error:{}
    
}

export default function (state=initalState,action){
    const{type,payload}=action

    switch(type){
        case GET_TREATMENT:
        case GET_TREATMENTS:
            return{
               ...state,
               appointments:payload,
               loading:false 
            };
       
       
        case TREATMENT_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            
            };
       

        default:
            return state;
    }
}
import { GET_CONFIRM, CONFIRM_ERROR} from "../actions/types"

const initalState={ 
    confirm:null,
    loading:true,
    error:{}
    
}

export default function (state=initalState,action){
    const{type,payload}=action

    switch(type){
        case GET_CONFIRM:
            return{
                ...state,
                confirm:payload,
                loading:false 
             };
       
       
        case CONFIRM_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            
            };
       

        default:
            return state;
    }
}
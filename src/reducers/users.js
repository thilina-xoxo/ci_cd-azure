import {GET_USERS, USERS_ERROR} from "../actions/types"

const initalState={
   users:[],
    loading:true,
    error:{}
    
}

export default function (state=initalState,action){
    const{type,payload}=action

    switch(type){
       case GET_USERS:
           return{
            ...state,
           users:payload,
            loading:false
           };
      
        case USERS_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            
            };
       

        default:
            return state;
    }
}
import { CONTACT_ERROR,CRAETE_CONTACT, GET_CONTACT} from "../actions/types"

const initalState={
   contact:null,
   contacts:[],
    loading:true,
    error:{}
    
}

export default function (state=initalState,action){
    const{type,payload}=action

    switch(type){
       case GET_CONTACT:
        return{
            ...state,
           contacts:payload,
            loading:false
           };

        case CRAETE_CONTACT:
           return{
            ...state,
         contact:payload,
            loading:false
           };
       
        case CONTACT_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            
            };
       

        default:
            return state;
    }
}
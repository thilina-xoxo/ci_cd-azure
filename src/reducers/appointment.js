import { GET_APPOINTMENTS, APPOINTMENT_ERROR, GET_APPOINTMENT, UPDATE_APPOINTMENT,MAKE_APPOINTMENT ,CLEAR_APPOINTMENT} from "../actions/types"

const initalState={ 
    appointment:[],
    appointments:[],
    loading:true,
    error:{}
    
}

export default function (state=initalState,action){
    const{type,payload}=action

    switch(type){
        case GET_APPOINTMENT:
            return{
                ...state,
                appointment:payload,
                loading:false 
             };

       

         case  GET_APPOINTMENTS:
             
               return{
                ...state,
              appointments:payload,
                loading:false
               };

      
       
        case APPOINTMENT_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            
            };
    
        default:
            return state;
    }
}
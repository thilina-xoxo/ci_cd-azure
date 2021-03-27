import { GET_PHOTO,UPDATE_PHOTO,PHOTO_ERROR, CLEAR_PHOTO} from "../actions/types"

const initalState={
    photo:null,
    loading:true,
    error:{}
    
}

export default function (state=initalState,action){
    const{type,payload}=action

    switch(type){
       case GET_PHOTO:
        case UPDATE_PHOTO:
           return{
            ...state,
            photo:payload,
            loading:false
           };
           case CLEAR_PHOTO:

            return{
                ...state,
                photo:null,
                loading:false
            };
       
        case PHOTO_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            
            };


            default:
                return state;

        }}
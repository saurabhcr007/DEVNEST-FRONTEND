import { User } from "../actions"

const initialUser={
    username:"",
    profilePicture:""
}

export interface actionType{
    type:string,
    payload:User
}

const userReducer = (state:User =initialUser,action:any)=>{
    switch(action.type){

        case "UPDATE_USER":
            return action.payload;
        
        default:
            return state;
    }
};

export default userReducer;
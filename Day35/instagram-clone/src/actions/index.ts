export interface User{
    username:string,
    profilePicture:string
};

const updateUser=()=>{
    return (dispatch:any)=>{
        fetch("data/data.json")
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:"UPDATE_USER",
                payload:data
            })
        }
        )
    }
};

export default updateUser;
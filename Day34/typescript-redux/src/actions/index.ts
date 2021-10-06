const addNote = (name:string)=>{
    return{
        type:"ADD_NOTE",
        payload:name
    };
};

const editNote = (id:number)=>{
    return{
        type:"EDIT_NOTE",
        payload:id
    };
};

const deleteNote = (id:number)=>{
    return{
        type:"DELETE_NOTE",
        payload:id
    };
};

export {addNote,editNote,deleteNote};

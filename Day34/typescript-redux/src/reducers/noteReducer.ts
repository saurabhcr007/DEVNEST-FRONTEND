interface ActionType{
    type: string,
    payload: string|number
}
const noteReducer=(state: any=[],action:ActionType)=>{

    switch(action.type){
        case "ADD_NOTE":
            return [...state,action.payload];
        
        case "DELETE_NOTE":
            return state.filter((_:string,index:number)=> index !== action.payload);

        default:
            return state;
    };
};

export default noteReducer;
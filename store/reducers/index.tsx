const INITIAL_STATE={
   todos:[]
}

export default(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "Add":
            return{
                ...state,
                todos:[...state.todos,action.data]
            }
        case "Delete":


        return{
        
         ...state,
         todos: state.todos .filter((v,i)=>{
             return i !== action.data


         })
        }

        case "Update":

        return{
            state,
            todos:state.todos.map((v,i)=>{
                
              if(i==action.index){
              return state.todos=action.data
               } 
               else{
                   return v
               }
            })
        }
        

         
    
        default:
            return state
    }

}
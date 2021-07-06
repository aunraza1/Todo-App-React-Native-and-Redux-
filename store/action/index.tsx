
const add = (data,value)=>{
value("")
    return(dispatch)=>{
        dispatch({type:"Add",data:data})
    }
}

const itemDelete=(i)=>{
  
   
        return(dispatch)=>{
        dispatch({type:"Delete",data:i})
    }
    
}


const updateItem=(todo,index,btnName,value)=>{
    btnName('Add')
    value("")

    return(dispatch)=>{
        dispatch({type:"Update",index:index,data:todo})
    }
}
export{
    add,itemDelete,updateItem
}

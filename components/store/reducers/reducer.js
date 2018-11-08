const initialState={
    text:'Old'
}

export default (state = initialState,action)=>{
    switch(action.type){
        case 'CHANGE_TEXT':
        return Object.assign({},state,{
            text:'New Text'
        })
        default:
        return state
    }
}
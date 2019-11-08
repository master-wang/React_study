export const postRecuter = function(state={list:[{id:0,title:"hhh"}]},action){
    switch (action.type){
        case 'LOAD_POSTS':
            return {
                ...state,
                list:action.payload
            }
        default :
            return state
    }
}
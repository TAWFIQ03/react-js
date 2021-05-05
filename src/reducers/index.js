import {ADD_REMINDER} from '../redux/types'

const reducers = (state=[],action) => {
    let reminders =[];
    if(action.type === ADD_REMINDER){
        reminders = [...state,{  data:action.data }]
   console.log("from reducers", reminders)
    return reminders
}
return reminders
 }
export default reducers
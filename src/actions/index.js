import {ADD_REMINDER} from '../redux/types'


export const add_Reminder = (data) => {
    const action = {
        type: ADD_REMINDER,
       
        data,
    }
    console.log("Add" ,action)

    return action
}
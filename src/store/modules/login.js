import {createAction, handleActions} from "redux-actions";
import {Map} from 'immutable';


const CHANGE_INPUT = 'login/CHANGE_INPUT';
const INSERTNAME = 'login/INSERTNAME';
const INSERTID ='login/INSERTID';

export const changeInput = createAction(CHANGE_INPUT , value=>value);
export const insertName = createAction(INSERTNAME ,value =>value);
export const insertId = createAction(INSERTID ,value =>value);

let id =0

let initialState = Map({
    id: "",
    name:"",
    infos :Map()
})

export default handleActions({
        [INSERTID]:(state,{payload: value})=>{
            const item =Map({id: value});
            return state.update('infos',infos=>infos.push(item));
        },
    },initialState
)
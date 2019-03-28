import {createAction, handleActions} from 'redux-actions';
import {Map,List} from 'immutable';

const UPDATE = 'board/UPDATE';
const INSERT = 'board/INSERT';
const REMOVE = 'board/REMOVE';

export const update = createAction(UPDATE);
export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);

const initialState =List([
    Map({
        title: '1',
        content: 'content1'
    }),
    Map({
        title:'2',
        content: 'content2'
    })
])

export default handleActions({
    [INSERT]:(state,action)=>{
        console.log('write called');
        console.log(state,action);
    },
    [UPDATE]:(state,action)=>{

    },
    [REMOVE]: (state,action)=>{
        console.log('remove called');
        return state;
    }
},initialState);


import {createAction, handleActions} from 'redux-actions';
import {Map,List} from 'immutable';
import axios from "axios";


/**
 * Action Type
 */
const UPDATE = 'board/UPDATE';
const INSERT = 'board/INSERT';
const REMOVE = 'board/REMOVE';
const LIST = 'board/LIST';
const GET_DATA ='board/GET_DATA';

/**
 *  Action
 */
export const update = createAction(UPDATE);
export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);
export const list = createAction(LIST);


/**
 * thunk
 */
const getData = createAction(GET_DATA);

function selectBoardList(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
}
export const getPost =(postId) =>dispatch=>{
    dispatch(getData());

    return selectBoardList(postId)
        .then((response)=>{
            dispatch(list(response));
            return response;
        })
        .catch((error)=>{
            console.log(error);
        })
}

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
    [INSERT]:(state,action)=>{ //TODO 게시판 입력폼 만들어서 적용
        console.log('write called');
        console.log(state,action);
        return state.push(
            Map(
                {
                    title : 'insert Test',
                    content: 'insert Content'
                }
            )
        )
    },
    [UPDATE]:(state,action)=>{ //TODO index 를 받아와서 그 index에 대한 내용들을 select 해옴
    },
    [REMOVE]: (state,action)=>{
        console.log('remove called');
        return state.pop();
    },
    [LIST]:(state,action)=>{
        const {title,body} = action.payload.data;
        console.log('title = ' ,title);
        console.log('body = ' , body);

        return state.push(
            Map({
                title : title,
                body:body
            })
        );
    }
},initialState);


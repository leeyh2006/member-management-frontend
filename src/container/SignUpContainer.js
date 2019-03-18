import {createAction ,handleActions} from 'redux-actions';

const SIGNUP ='signUp/SIGNUP';

export const signUp = createAction(SIGNUP);

const initialState ={

}

export default handleActions(
    {
        [SIGNUP] : (state) =>{
            return
        }
    }
)
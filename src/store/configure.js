// 스토어를 생성하는 함수륾 만들어서 내보냄
// 이 함수는 store/index.js 에서 불러와서 사용하게됨

import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import penderMiddleware from 'redux-pender';
import * as modules from './modules';


const reducers =combineReducers(modules);
const middlewares =[penderMiddleware()];

//개발 모드일 때만 Redux Devtools 를 적용합니다.

const isDev =process.env.NODE_ENV ==='development';
const devtools =isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers =devtools  || compose;

// preloadedState 는 추후 서버사이드 렌더링을 했을 때 전달받는 초기 상태입니다.
const configure =(preloadedState)=> createStore(reducers,preloadedState,composeEnhancers(
    applyMiddleware(...middlewares)
));

export default configure;
//
// import {applyMiddleware,compose ,createStore,combineReducers} from "redux";
// import modules from './modules';
// import ReduxThunk from 'redux-thunk';
// import {createLogger} from 'redux-logger';
//
// const logger =createLogger();
//
// const configure = () =>{
//     const store = createStore(modules,applyMiddleware( ReduxThunk));
//     return store;
// }
//
// export default configure;

import React, {Component} from 'react';
import Board from "../components/board/Board";
import BoardInput from "../components/board/BoardInput";

import * as boardActions from '../store/modules/board';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import axios from 'axios';


class BoardListContainer extends Component{

    loadData() {
        const {BoardActions}=this.props;
        BoardActions.getPost();
    }
    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('this.props', this.props.board.size);
        console.log('prevProps ', prevProps);

        // 최초 load 될때 설정 logic 추가`
        //
        // if(this.props !==prevProps){
        //     return this.loadData();
        // }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;

    }

    render() {
        const {board} = this.props;
        console.log(board.toJS());

        const boardList = board.map(
            (list,i) =>(
                <Board
                    index={i}
                    key={i}
                    title={list.get('title')}
                    content={list.get('content')}
                />
            )
        )
        return(
            <div>
                <h3>특허 뉴스 </h3>
                <table className="table">
                <thead>
                <tr>
                    <th>No</th>
                    <th>title</th>
                    <th>content</th>
                    <th>add</th>
                </tr>
                </thead>
                    {boardList}
                </table>
                <BoardInput/>
            </div>
        )
    }
}


export default connect(
    (state)=>({
        board :state.board
    }),
    (dispatch)=>({
        BoardActions: bindActionCreators(boardActions,dispatch)
    })

)(BoardListContainer);

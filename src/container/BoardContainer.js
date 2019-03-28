import React, {Component} from 'react';
import Board from "../components/board/Board";
import BoardInput from "../components/board/BoardInput";

import * as boardActions from '../store/modules/board';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


class BoardListContainer extends Component{
    componentDidMount() {
        console.log('리렌더링 될때');

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

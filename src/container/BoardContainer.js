import React, {Component} from 'react';
import BoardPane from "../components/board/BoardPane/BoardPane";
import BoardInput from "../components/board/BoardInput/BoardInput";

import * as boardActions from '../store/modules/board';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


class BoardListContainer extends Component{

    loadData= async () =>{
        const {BoardActions}=this.props;
        try{
            await BoardActions.getData();
        }catch (e) {
            console.log(e);
        }
    };
    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('this.props', this.props.board.size);
        console.log('prevProps ', prevProps);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;

    }

    render() {
        const {board} = this.props;

        const boardList = board.map(
            (list,i) =>(
                <BoardPane
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

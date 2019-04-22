import React,{Component} from 'react';
import * as boardActions from '../../../store/modules/board';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


class BoardInput extends Component{

    onInsert= () =>{
        const {BoardActions} = this.props;
        BoardActions.insert();

    }

    onRemove =() =>{
        const {BoardActions} = this.props;
        BoardActions.remove();

    }

    render() {
        const {onInsert,onRemove} = this;
        return (
            <div>
                <button className="btn btn-primary" onClick={onInsert}> 글쓰기</button>
                <button className="btn btn-danger" onClick={onRemove}>삭제</button>
            </div>
        );
    }
}


export default connect(
    null,
    (dispatch)=>({
        BoardActions :bindActionCreators(boardActions,dispatch)
    })
)(BoardInput);

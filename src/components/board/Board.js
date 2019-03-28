import React from 'react';


const Board = ({index,title,content}) =>{
    return(
        <tbody>
        <tr>
            <th scope="row">{index+1}</th>
            <td>{title}</td>
            <td>{content}</td>
            <td>추가될 내용 </td>
        </tr>
        </tbody>
    )
}


Board.defaultProps={
    title : '첫번째',
    content: '첫번째 내용'
}
//TODO - PropTypes 정의


export default Board;

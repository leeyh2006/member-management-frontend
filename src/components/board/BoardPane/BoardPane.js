import React from 'react';
import classNames from 'classnames/bind';
import styles from './BoardPane.scss';
const cx = classNames.bind(styles);

const BoardPane = ({index,title,content}) =>{
    return(
        <tbody className={cx('test')}>
        <tr>
            <th scope="row">{index+1}</th>
            <td>{title}</td>
            <td>{content}</td>
            <td>추가될 내용 </td>
        </tr>
        </tbody>
    )
}


BoardPane.defaultProps={
    title : '첫번째',
    content: '첫번째 내용'
}
//TODO - PropTypes 정의


export default BoardPane;

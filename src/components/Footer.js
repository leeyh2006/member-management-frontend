import React from 'react'
import Filterlink from ',,/containers/FilterLink'

const Footer =() => (
    <p>
        Show: {' '}
        <Filterlink filter="SHOW_ALL">
          ALL
        </Filterlink>
        {', ' }
        <Filterlink filter="SHOW_ACTIVE">
            Active
        </Filterlink>
        {', '}
        <Filterlink filter="SHOW_COMPLETE">
            Completed
        </Filterlink>
    </p>
);

export default Footer
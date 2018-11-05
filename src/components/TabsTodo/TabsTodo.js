import React from 'react';
import {string, func} from 'prop-types';



function TabsTodo(props) {
    return (
        <div>
            <button type='button'>All</button>
            <button type='button'>Done</button>
            <button type='button'>In progress</button>
        </div>
    );
}

TabsTodo.propTypes = {
    props:string,
};
TabsTodo.defaultProps = {};

export default TabsTodo;

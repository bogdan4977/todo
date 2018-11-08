import React from 'react';
import PropTypes from 'prop-types';
import {ALL, DONE, PROCESS} from '../../const/TabsState'

const {func} = PropTypes;

function TabsTodo({selectTab}) {
    return (
        <div className='todo-tabs'>
            <button type='button' onClick={() => selectTab(ALL)}>All</button>
            <button type='button' onClick={() => selectTab(DONE)}>Done</button>
            <button type='button' onClick={() => selectTab(PROCESS)}>In progress</button>
        </div>
    );
}

TabsTodo.propTypes = {
    selectTab: func.isRequired,
};
TabsTodo.defaultProps = {};

export default TabsTodo;

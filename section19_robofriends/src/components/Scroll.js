import React, { Fragment } from 'react';

const Scroll = (props) => {
    return (
        <Fragment>
            <div className="pa2" style={{overflowY: 'scroll', border: '5px solid #0ccac4', height: '800px'}}>
                {props.children}
            </div>
        </Fragment>
    );
}

export default Scroll;
import React from 'react'

const withClass = (WithRapped, classes) => {
    return props => (
        <div className={classes}>
            <WithRapped {...props} />
        </div>
    );
};

export default withClass
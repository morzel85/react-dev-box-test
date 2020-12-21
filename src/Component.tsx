import React from 'react';

import classes from './Component.module.css';

const Component: React.FC = () => (
    <div className={classes.Component}>
        <div className={classes.Name}>Component</div>
        <div className={classes.Timestamps}>
            <div>Save: 2020-12-21T20:39:27.072Z</div>
            <div>Render: {new Date().toISOString()}</div>
        </div>
    </div>
);

export default Component;
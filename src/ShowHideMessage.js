import React from 'react';

export default ({ children, isCollapsed, expandCollapse }) => (
    <div onClick={expandCollapse}>
        {isCollapsed ? children.replace(/[a-zA-Z0-9]/g, 'x') : children}
    </div>
);

import React, { useState } from 'react';

const Expandable = (ComposedComponent) => {
    const Foo = (props) => {
        const [isCollapsed, setIsCollapsed] = useState(false);

        return (
            <ComposedComponent
                {...props}
                isCollapsed={isCollapsed}
                expandCollapse={() => setIsCollapsed(!isCollapsed)}
            />
        );
    };

    return Foo;
};

export default Expandable;

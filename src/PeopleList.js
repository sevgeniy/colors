import React from 'react';

export default ({ data }) => {
    return (
        <ul>
            {data.map(({ name: { first, last } }, index) => (
                <li key={index}>
                    {first} {last}
                </li>
            ))}
        </ul>
    );
};

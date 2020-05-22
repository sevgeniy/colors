import React from 'react';

export default ({ data }) => {
    return (
        <table>
            <tbody>
                {data.map(({ name: { first, last } }, index) => (
                    <tr key={index}>
                        <td>{first}</td>
                        <td>{last}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

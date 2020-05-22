import React, { useState, useEffect } from 'react';

const url = 'https://randomuser.me/api/?results=10';

const DataComponent = (ComposedComponent) => {
    const Foo = () => {
        const [data, setData] = useState([]);
        const [loaded, setLoaded] = useState(false);
        const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            if (loaded || isLoading) return;

            console.log('loaded', loaded);
            !loaded && setIsLoading(true);

            fetch(url)
                .then((response) => response.json())
                .then((obj) => obj.results)
                .then((data) => {
                    setData(data);
                    setLoaded(true);
                    setIsLoading(false);
                });
        }, [data, loaded, isLoading]);

        return (
            <div>
                {isLoading ? (
                    <div>Loading data...</div>
                ) : (
                    <ComposedComponent data={data} />
                )}
            </div>
        );
    };

    return Foo;
};

export default DataComponent;

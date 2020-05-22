import React, { FunctionComponent } from 'react';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import SortMenu from './SortMenu';

interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => {
    return (
        <div>
            <AddColorForm />
            <SortMenu />
            <ColorList />
        </div>
    );
};

export default App;

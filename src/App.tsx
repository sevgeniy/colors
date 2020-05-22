import React, { FunctionComponent } from 'react';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import SortMenu from './SortMenu';
import DataComponent from './DataComponent';
import PeopleList from './PeopleList';
import PeopleTable from './PeopleTable';
import Expandable from './Expandable';
import ShowHideMessage from './ShowHideMessage';

interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => {
    const Peoples = DataComponent(PeopleList);
    const Peoples2 = DataComponent(PeopleTable);

    const HiddenMessage = Expandable(ShowHideMessage);

    return (
        <div>
            {/* <AddColorForm />
            <SortMenu />
            <ColorList /> */}
            {/* <Peoples />
            <Peoples2 /> */}
            <HiddenMessage>Some text</HiddenMessage>
        </div>
    );
};

export default App;

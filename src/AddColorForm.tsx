import React, {
    ReactEventHandler,
    SyntheticEvent,
    FunctionComponent,
    useRef,
    useContext,
} from 'react';
import { Store } from 'redux';
import IAppState from './IAppState';
import IAction from './IAction';
import { addColor } from './actionCreators/colorActions';
import AppContext from './AppContext';

const AddColorForm: FunctionComponent = () => {
    const store = useContext(AppContext) as Store<IAppState, IAction>;

    const handleSubmit: ReactEventHandler = (
        e: SyntheticEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!title.current || !value.current) return;

        store.dispatch(addColor(title.current.value, value.current.value));

        title.current.value = '';
        value.current.value = '';
    };

    const title = useRef<HTMLInputElement>(null);
    const value = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={title}
                type="text"
                placeholder="color title..."
                required
            />
            <input ref={value} type="color" required />
            <button type="submit">ADD</button>
        </form>
    );
};

export default AddColorForm;

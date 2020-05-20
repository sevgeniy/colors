import React, {
    ReactEventHandler,
    SyntheticEvent,
    FunctionComponent,
} from 'react';

const AddColorForm: FunctionComponent = () => {
    const handleSubmit: ReactEventHandler = (
        e: SyntheticEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="color title..." required />
            <input type="color" required />
            <button type="submit">ADD</button>
        </form>
    );
};

export default AddColorForm;

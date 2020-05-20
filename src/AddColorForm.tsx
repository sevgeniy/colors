import React, {
    ReactEventHandler,
    SyntheticEvent,
    FunctionComponent,
    useRef,
} from 'react';

interface IAddColorFormProps {
    onNewColor: (title: string, color: string) => void;
}

const AddColorForm: FunctionComponent<IAddColorFormProps> = ({
    onNewColor,
}) => {
    const handleSubmit: ReactEventHandler = (
        e: SyntheticEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!title.current || !value.current) return;

        onNewColor(title.current.value, value.current.value);
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

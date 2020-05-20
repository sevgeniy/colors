import React, {
    ReactEventHandler,
    SyntheticEvent,
    FunctionComponent,
    useRef,
    MutableRefObject,
} from 'react';

interface IAddColorFormProps {
    onNewColor: (title: string | undefined, color: string | undefined) => void;
}

const AddColorForm: FunctionComponent<IAddColorFormProps> = ({
    onNewColor,
}) => {
    const handleSubmit: ReactEventHandler = (
        e: SyntheticEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        onNewColor(title.current?.value, color.current?.value);
    };

    const title: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const color: MutableRefObject<HTMLInputElement | null> = useRef(null);

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={title}
                type="text"
                placeholder="color title..."
                required
            />
            <input ref={color} type="color" required />
            <button type="submit">ADD</button>
        </form>
    );
};

export default AddColorForm;

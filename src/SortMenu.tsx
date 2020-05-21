import React, { useRef, useContext, SyntheticEvent } from 'react';
import AppContext from './AppContext';
import SortBy from './SortBy';
import IAppState from './IAppState';
import { Store } from 'redux';
import IAction from './IAction';
import { sortColors } from './actionCreators/sortActions';

const SortMenu = () => {
    const options = Object.keys(SortBy).filter((key: string) => isNaN(+key));
    const store = useContext(AppContext) as Store<IAppState, IAction>;

    const select = useRef<HTMLSelectElement>(null);

    const handleSelectChange = (e: SyntheticEvent) => {
        if (!select.current) return;

        store.dispatch(sortColors(select.current?.value));
    };

    return (
        <label>
            Sort By:
            <select onChange={handleSelectChange} ref={select}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default SortMenu;

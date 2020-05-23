import React from 'react';
import Color from '../../Color';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { compose } from 'redux';

configure({ adapter: new Adapter() });

const shallowExpect = compose(expect, toJson, shallow);

describe('<Color /> UI component ', () => {
    it('Renders correct properties', () => {
        shallowExpect(
            <Color
                title="red"
                value="red value"
                rating={2}
                id="9094ec55-0c1e-4b81-85d3-a5fbac0610bd"
            />
        ).toMatchSnapshot();
    });
});

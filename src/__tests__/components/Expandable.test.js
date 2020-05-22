import React from 'react';
import { configure, mount } from 'enzyme';
import Expandable from '../../Expandable';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Expandable component', () => {
    let ResultComponent, wrapper, props;

    const MockComponent = ({ isCollapsed, expandCollapse }) => (
        <div onClick={expandCollapse}>
            {isCollapsed ? 'collapsed' : 'expanded'}
        </div>
    );

    describe('Rendering UI', () => {
        beforeAll(() => {
            ResultComponent = Expandable(MockComponent);
            wrapper = mount(<ResultComponent foo={'foo'} />);
            props = wrapper.find(MockComponent).props();
        });

        it('starts off expanded', () => {
            expect(props.isCollapsed).toBe(false);
        });

        it('passes expandCollapse function to component', () => {
            expect(typeof props.expandCollapse).toBe('function');
        });
    });

    describe('Expand collapse functionality', () => {
        let instance;

        beforeAll(() => {
            ResultComponent = Expandable(MockComponent);
            wrapper = mount(<ResultComponent foo={'foo'} />);
        });

        it('renders the MockComponent as the root element', () => {
            expect(wrapper.first().is(MockComponent));
        });

        it('toggles the expanded state', () => {
            wrapper.find('div').simulate('click');
            props = wrapper.find(MockComponent).props();
            expect(props.isCollapsed).toBe(true);
        });
    });
});

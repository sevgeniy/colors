import React from 'react';

// export default ({ message, isHidden }) => {
//     return <div>{isHidden ? message.replace(/[a-zA-Z]/g, 'x') : message}</div>;
// };

class HiddenMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: props.message,
            isHidden: props.isHidden,
        };
    }

    componentWillReceiveProps(newProps) {
        let { isHidden, message } = newProps;
        this.setState({
            isHidden,
            message,
        });
    }

    render() {
        // const { message, isHidden } = this.props;
        const { message, isHidden } = this.state;

        return (
            <div>{isHidden ? message.replace(/[a-zA-Z]/g, 'x') : message}</div>
        );
    }
}

export default HiddenMessage;

import React, { useState, useEffect } from 'react';
import HiddenMessage from './HiddenMessage';

// export default () => {
//     const messages = [
//         'This is first message',
//         'Hello world',
//         'You can ask everything but whether you get an asnwer is another question',
//     ];

//     const [current, setCurrent] = useState(0);

//     useEffect(() => {
//         let intervalId = setInterval(() => {
//             setCurrent(current === messages.length - 1 ? 0 : current + 1);
//         }, 1000);

//         return () => clearInterval(intervalId);
//     }, [current]);

//     return (
//         <div>
//             {messages.map((m, index) => (
//                 <HiddenMessage message={m} isHidden={index !== current} />
//             ))}
//         </div>
//     );
// };

class HiddenMessages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                'This is first message',
                'Hello world',
                'You can ask everything but whether you get an asnwer is another question',
            ],
            current: 0,
        };
    }

    componentWillMount() {
        this.intervalId = setInterval(() => {
            let { messages, current } = this.state;
            this.setState({
                ...this.state,
                current: current === messages.length - 1 ? 0 : current + 1,
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { messages, current } = this.state;
        return (
            <div>
                {messages.map((m, index) => (
                    <HiddenMessage message={m} isHidden={index !== current} />
                ))}
            </div>
        );
    }
}

export default HiddenMessages;

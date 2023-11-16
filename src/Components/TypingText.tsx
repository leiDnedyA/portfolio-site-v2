import React, { useState, useEffect } from 'react';

const CHAR_DELAY = 50;
const CHAR_SKIP_RATE = .3;

function TypingText({ children }: { children: string }): React.JSX.Element {
    const [currText, setCurrText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrText(prevText => {
                if (prevText.length == children.length) {
                    clearInterval(interval);
                    return prevText;
                }
                if (Math.random() > CHAR_SKIP_RATE) {
                    return prevText + children[prevText.length]
                }
                return prevText;
            });
        }, CHAR_DELAY);
    }, []);

    return <h1><strong>{currText.length > 0 ? currText : '>'}</strong></h1>;
}

export default TypingText;
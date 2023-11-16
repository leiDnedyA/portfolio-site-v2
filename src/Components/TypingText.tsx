import React, { useState, useEffect } from 'react';

const CHAR_DELAY = 50;

function TypingText({ children }: { children: string }): React.JSX.Element {
    const [currText, setCurrText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrText(prevText => {
                if (prevText.length == children.length) {
                    clearInterval(interval);
                    return prevText;
                }
                return prevText + children[prevText.length]
            });
        }, CHAR_DELAY);
    }, []);

    return <h1><strong>{currText.length > 0 ? currText : '>'}</strong></h1>;
}

export default TypingText;
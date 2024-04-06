import { useEffect, useRef } from "react";
import React from "react";
import { css } from './styles';
export function RFIDReaderInput({ isOpen, onRequestClose, handleCodeCardRFID, textTitle = 'Identificação RFID', textBody = 'Aproxime o cartão' }) {
    const inputRef = useRef(null);
    const autoSelectInput = () => {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.select();
    };
    useEffect(() => {
        autoSelectInput();
    }, [isOpen]);
    return (React.createElement(React.Fragment, null,
        React.createElement("style", null, css),
        React.createElement("div", { className: `${isOpen ? '' : 'container'}` },
            React.createElement("div", { onClick: () => autoSelectInput(), className: 'opacityBg' }),
            React.createElement("div", { className: 'cardRFIDReader' },
                React.createElement("div", { className: "titleCard" },
                    textTitle,
                    " ",
                    React.createElement("button", { onClick: () => { onRequestClose(); }, className: "closeButton" },
                        React.createElement("img", { style: { height: '20px' }, src: "    https://github.com/DIGOARTHUR/rfid-reader-input/assets/59892368/58e4aa2c-8278-4963-9e6a-2fdd89be851e" }))),
                React.createElement("div", { className: "bodyCard" },
                    " ",
                    textBody,
                    React.createElement("img", { style: { height: '34px' }, src: "https://github.com/DIGOARTHUR/rfid-reader-input/assets/59892368/1dd6130e-33d9-4f56-8d98-b3a33a0c30c2" })),
                React.createElement("div", null,
                    React.createElement("input", { onClick: () => autoSelectInput(), onChange: (event) => {
                            setTimeout(() => {
                                const digit = event.target.value;
                                if (digit.length < 10) {
                                    autoSelectInput();
                                }
                                else {
                                    handleCodeCardRFID(event.target.value);
                                    onRequestClose();
                                }
                            }, 180);
                        }, type: "number", ref: inputRef, className: 'inputCard' }))))));
}

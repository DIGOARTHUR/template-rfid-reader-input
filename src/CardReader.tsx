import { useEffect, useRef } from "react";
import React from "react";
import { css } from './styles';
import { IoClose } from "react-icons/io5";
import { RiRfidFill } from "react-icons/ri";
type CardReaderProps = {
    isOpen: boolean
    onRequestClose: () => void;
    handleCodeCardRFID: (code: string) => void
    textTitle?: string
    textBody?: string
}


export function CardReader({ isOpen, onRequestClose, handleCodeCardRFID, textTitle = 'Identificação RFID', textBody = 'Aproxime o cartão' }: CardReaderProps) {

    const inputRef = useRef<HTMLInputElement>(null)

    const autoSelectInput = () => {
        inputRef.current?.select();
    }

    useEffect(() => {

        autoSelectInput()

    }, [isOpen])

    return (
        <>
            <style>{css}</style>
            <div className={`${isOpen ? '' : 'container'}`}>
                <div onClick={() => autoSelectInput()} className='opacityBg' />
                <div className='cardRFIDReader'>

                    <div className="titleCard">
                        {textTitle} <button onClick={() => { onRequestClose() }} className="closeButton" ><IoClose size={20}/>
</button>
                    </div>
                    <div className="bodyCard"> {textBody}<RiRfidFill size={40}/></div>
                    <div>
                        <input

                            onClick={() => autoSelectInput()} onChange={(event) => {
                                setTimeout(() => {
                                    const value = event.target.value
                                    if (value.length < 10) {
                                        autoSelectInput()
                                    } else {
                                        handleCodeCardRFID(event.target.value)
                                        onRequestClose()
                                    }

                                }, 180)

                            }} type="number" ref={inputRef} className='inputCard' />

                    </div>

                </div>
            </div>
        </>




    )
}
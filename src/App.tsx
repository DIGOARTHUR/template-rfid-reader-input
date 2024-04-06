import { useState } from 'react'
import rfidReaderInputIcon  from './assets/rfidReaderInputIcon.svg'
import { RFIDReaderInput } from 'rfid-reader-input';
import {CardReader} from './CardReader.tsx'

function App() {
  //CSS EFFECT
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    filter: isHover ? 'drop-shadow(0 0 5em #617874ee)' : ''
  };


  //RFIDReaderInput State
  const [serialCard, setSerialcard] = useState('');
  const [openCardReaderWindow, setOpenCardReaderWindow] = useState<boolean>(false)

  function handleOpenRFID() { 
  
    setOpenCardReaderWindow(true);
}

function handleCloseRFID() {
    setOpenCardReaderWindow(false);
  }


  return (
    <div className='flex flex-col items-center gap-10 '>
      <div className=''>
        <a  href="https://github.com/DIGOARTHUR/rfid-reader-input" target="_blank">
          <img className='flex items-center justify-center' src={rfidReaderInputIcon }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={boxStyle} alt="React logo"
          />
        </a>
        <CardReader isOpen={openCardReaderWindow} onRequestClose={handleCloseRFID} handleCodeCardRFID={ setSerialcard} />   
      </div>
      <h1 className='text-4xl font-bold text-[#FFFFFFDE]'>{serialCard?serialCard:'‹ RFIDReaderInput 	/›'}</h1>
      <div className="text-[#FFFFFFDE]">
        <button className='px-5 py-2 bg-[#1A1A1A] rounded-lg mb-5' onClick={handleOpenRFID}>
        Open RFIDReaderInput
        </button>
        <p className='text-[16px]'>
          Edit <code className='text-[13px]'>src/App.tsx</code> and save to test
        </p>
      </div>
      <p className="text-[#888888]">
        Click on the RFIDReaderInput  logo to learn more
      </p>
    
    </div>
  )
}

export default App




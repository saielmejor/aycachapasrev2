import React from 'react' 
import { ReactDOM } from 'react'; 
import Modal from 'react-modal'; 

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
function CustomModal() {
  return (
    <div>Modal</div>
  )
}

export default CustomModal
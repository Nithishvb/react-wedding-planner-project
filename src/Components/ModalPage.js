import React , { useState } from 'react'
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

const ModalPage = ({ modalOPen , closeModal , addBudget , setIsBudget}) => {

    const [budget, setBudget] = useState(0)

    const makeBudget = (e) => {
        e.preventDefault();
        addBudget(budget);
        closeModal();
    }

  return (
    <div>
        <Modal
        isOpen={modalOPen}
        style={customStyles}
        contentLabel="Example Modal"
        >
            <form onSubmit={makeBudget} >
                <input type='text' value={budget} onChange={(e) => setBudget(e.target.value)} placeholder='enter your budget'  />
                <button type='submit' >submit</button>
            </form>
        </Modal>
    </div>
  )
}

export default ModalPage
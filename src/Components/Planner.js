import React, { useState } from 'react'
import './Planner.css'
import { PieChart } from 'react-minimal-pie-chart';
import ModalPage from './ModalPage'

const Planner = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
    let [chart, setChart] = useState([
        { value: 0, color: '' },
    ])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [isBudget, setIsBudget] = useState(false)

    const addBudget = (val) => {
        let data = {
            value: parseInt(val),
            color: 'white'
        }
        setChart((prevItem) => {
            return [...prevItem, data]
        })
        setIsBudget(true)
    }

    // const addPlans = () => {
    //     let data = {
    //         value: parseInt(plans),
    //         color: 'blue'
    //     }
    //     setChart((prev) => {
    //         return [...prev, data]
    //     })
    // }

  return (
    <div className='planner' >
        <h1>Wedding Planner Budget</h1>
        <div className='planner__container' >
            <ModalPage modalOPen={modalIsOpen} openModal={openModal} closeModal={closeModal} addBudget={addBudget} setIsBudget={setIsBudget} />
            <div className='planner__chart' >
                <PieChart
                  className='pie__chart'
                  data={chart}
                />
            </div>
            {
                isBudget 
            }
            <div className='planner__create'>
                <button onClick={openModal} >Create your budget</button>
            </div>
        </div>
    </div>
  )
}

export default Planner
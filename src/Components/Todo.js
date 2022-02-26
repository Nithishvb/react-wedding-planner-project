import { useEffect, useState } from 'react'
import './Todo.css'
import axios from 'axios'
import { TailSpin } from  'react-loader-spinner'

function Todo() {

    const [todo ,setTodo] = useState([])
    const [input, setInput] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [id, setId] = useState()
    const [loading, setLoading] = useState(true)

    const getTodo = () => {
        axios.get('http://localhost:4000/todo/').then((res) => {
            setTodo(res.data)
        })
    }

    useEffect(() => {
        getTodo();
        setTimeout(() => {
            setLoading(false)
        }, 2000 )
    } , [])

    const createTodo = (e) => {
        e.preventDefault();
        if(isEdit === false){
            let data = {
                data: input
            }
            axios.post('http://localhost:4000/todo/',data).then(() => {
                getTodo();
            })
            setInput('')
        }else{
            let data = {
                _id: id,
                data: input
            }
            axios.put('http://localhost:4000/todo/',data).then((res) => {
                getTodo();
            })
            setIsEdit(false)
            setInput('')
        }
    }

    const deleteTodo = (getItem) => {
        axios.delete(`http://localhost:4000/todo/${getItem}`,).then((res) => {
            getTodo();
        })
    }

    const updateTodo = (getVal) => {
        setInput(getVal.data);
        setId(getVal._id)
        setIsEdit(true)
    }

  return (
    <div className='todo'>
        {
            loading === true ? (
                <TailSpin 
                    className='loading'
                    heigth="100"
                    width="100"
                    color='grey'
                    visible={loading}
                    color="#219F94"
                />
            ) : (
                <div className='todo__container' >
                    <h2 className='todo__heading' >Todo List App</h2>
                    <div className='todo__head' >
                        <form onSubmit={createTodo} >
                            <input className='todo__input' type='text' placeholder='Add Todos...' value={input} onChange={(e) => setInput(e.target.value)}  />
                            <button>{isEdit ? "Update Todo" : "Add Todo"}</button>
                        </form>
                    </div>

                    <ul className='todo__result' >
                        {
                            todo.length > 0 ? (
                                todo.map((e) => (
                                    <div  className='todo__list' >
                                        <li className='todo__text' >{e.data}</li>
                                        <li><button className='todo__edit' onClick={() => updateTodo(e)}  >Edit</button></li>
                                        <li><button className='todo__delete' onClick={() => deleteTodo(e._id)} >Delete</button></li>
                                    </div>
                                 ))
                            ) : (
                                <h2 className='todo__empty' >NO TODOS</h2>
                            )   
                         }   
                    </ul> 

                </div>
            )
        }
    </div>
  )
}

export default Todo
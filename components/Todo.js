import React from 'react'
import { useState } from 'react'

import Modal from './Modal'
import Backdrop from './Backdrop'

export default function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    function closeModalHandler(){
        setModalIsOpen(false)
    }
    function deleteHandler() {
        setModalIsOpen(true)
    }

    return (
    <>
    <div  className="card">
    <h2>{props.text}</h2>
        <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
    </div>
    { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
    { modalIsOpen && <Backdrop />}
    </>
    )
}

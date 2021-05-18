import React, {useState,useEffect} from 'react';
import {Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap'
import {useDispatch} from 'react-redux'
import {addItem, getItems} from '../actions/itemActions'
const ItemModal = () => {
    const [modal, setmodal] = useState(false)
    const [name, setname] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItems()) 
    }, [])
    const toggleModal = () =>{
        setmodal(!modal)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('dispatched from itemModal and name ===', name)
        dispatch(addItem(name))
        
        toggleModal()
    }

    return ( 
        <div>
            <Button color="dark" style={{marginBottom: '2rem'}} onClick={toggleModal}>Add Item</Button>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Add to Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input type="text" name="name" id="name" required onChange={(e)=>setname(e.target.value)}/>
                            <Button color="dark" style={{marginTop:'2rem'}} block>Add</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
     );
}
 
export default ItemModal;
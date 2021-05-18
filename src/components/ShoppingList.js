import React,{useEffect} from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {useDispatch, useSelector} from 'react-redux'
import {getItems, deleteItem} from '../actions/itemActions'
import ItemModal from './ItemModal'



const ShoppingList= ()=> {
    const items = useSelector(state => state.items)
     const dispatch = useDispatch()
useEffect(() => {
    dispatch(getItems())
    
}, [dispatch])

    return (
    <Container>
        <ItemModal/>
        {items.length?(
        <ListGroup>  
            <TransitionGroup>  
                {items.map((item)=>(
                   <CSSTransition key={item._id} timeout={500} classNames='fade'>
                      <ListGroupItem>
                        <Button style={{marginRight: '1rem'}} className="remove-btn" color="danger" size="sm" onClick={()=>dispatch(deleteItem(item._id))}>&times;</Button>
                          {item.name}
                          </ListGroupItem>
                    </CSSTransition>
                ))}
                
            </TransitionGroup>
        </ListGroup>):(<div>No Items Yet!</div>)}
    </Container>
    )
    }

export default ShoppingList;
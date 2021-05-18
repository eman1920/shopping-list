import React from 'react';
import {render} from 'react-dom'
import Navbar from '../components/Navbar'
import ItemModal from '../components/ItemModal';
import ShoppingList from '../components/ShoppingList'

import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from '../reducers/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const App = () => {
    return ( 
        <div>
            <Navbar/>
           
            <ShoppingList/>
        </div>
     );
}
 
render(<Provider store={store}><App/></Provider>, document.getElementById('app'))
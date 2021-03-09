import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import ProductsReducers from './reducers/ProductsReducers'


const store = createStore(ProductsReducers, applyMiddleware(thunk))

export default store;
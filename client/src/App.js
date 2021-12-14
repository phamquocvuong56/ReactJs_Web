
import './App.css';
import Loading from'./views/loading/Loading'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from './components/layout/Landing';
import FeedbackContextProvider from './contexts/FeedbackContext';
import ProductContextProvider from './contexts/ProductContext'
import {ProductContext} from './contexts/ProductContext'
import {useContext, useEffect} from 'react'
function App() {
  // const {getProduct}= useContext(ProductContext)
  // useEffect(()=>{
  //   getProduct()
  // }, [])

 
  return (
    <FeedbackContextProvider>
      <ProductContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path='/home' element={<Loading PageRoute='home'/>} />
          <Route exact path='/product' element={<Loading PageRoute='product' />} />
        </Routes>
      </Router>
      </ProductContextProvider>
    </FeedbackContextProvider>
  );
}

export default App;
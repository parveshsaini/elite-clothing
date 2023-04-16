import {Routes, Route} from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';

const Shop= ()=>{
  return(
    <h1>waddup, im shop</h1>
  )
}

const App = () => {

  return(

    <Routes>
      {/* Parent route always persisits on page, childs render according to paths */}
      <Route path='/' element={<Navigation />} >

         <Route index={true} element={<Home/>} /> {/*Now Home component will also be shown along with navigation upon land '/' */}

         <Route path='shop' element={<Shop/>} />

         <Route path='auth' element={<Authentication/>} />

      </Route>
      
      
    </Routes>
  ) 
};

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //React router..
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  // below we need to import al the components we created, make sure it is imported above

  return (
    <div>
      <Router>
        {/* HeaderComponent */}
        <HeaderComponent />

        <div className="container">
          <Routes>
            {/* whenever we hit a link in the browser...localhost:3000/ the below component will render */}
            <Route path='/' element = {<ListEmployeeComponent/>} />
            <Route path='/employees' element = {<ListEmployeeComponent/>} />
            <Route path='/add-employee' element = {<AddEmployeeComponent/>} /> {/*route to add employee */}
            <Route path='/edit-employee/:id' element = {<AddEmployeeComponent/>}/> {/* for updating the details */}

          </Routes>
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

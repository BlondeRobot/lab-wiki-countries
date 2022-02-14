import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import CountriesData from './countries.json';
import {Route, Routes} from "react-router-dom"
import { useState } from 'react'


function App() {
  const [countries, setCountries] = useState(CountriesData)
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <Routes>
            <Route
              path="/"
              element={<CountriesList countries={countries} />}
            />
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;

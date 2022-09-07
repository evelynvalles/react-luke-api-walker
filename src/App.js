import './App.css';
import { Routes, Route } from "react-router-dom";
import SearchForm from './components/SearchForm';
import PeopleDisplay from './components/PeopleDisplay';
import PlanetDisplay from './components/PlanetsDisplay'

function App() {
  return (
    <div className="App">
      <SearchForm />
      <Routes>
        <Route path="/people/:id" element={<PeopleDisplay />} />
        <Route path="/planets/:id" element={<PlanetDisplay />} />
      </Routes>
    </div>
  );
}

export default App;

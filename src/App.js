import './App.css';
//import { BasicTable } from './components/BasicTable';
//import { SortingTable } from './components/SortingTable';
import { FilteringTable } from './components/FilteringTable';

function App() {
  return (
    <div className="App">
      <div className ='App'>
        <h1>TDD Evidence</h1>
        <FilteringTable />
      </div>
    </div>
  );
}

export default App;

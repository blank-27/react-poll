import { Route ,Routes} from 'react-router-dom';
import Header from './components/Header';
import Poll from './components/Poll';
import Result from './components/Result';
import Login from './components/Login';



function App() {
  return (
    <div className="App font-mono ">

      <Header />
      <Routes>
        {/* <Route path="/"  element={} /> */}
        <Route path="/login" exact element={ <Login /> } />
        <Route path="/poll" exact  element={<Poll />}  />
        <Route path="/result" exact element={<Result />}  />
      </Routes>
    </div>
  );
}

export default App;

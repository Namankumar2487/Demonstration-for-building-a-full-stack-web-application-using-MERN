import './App.css';
import Postdata from './Postdata';
import Getdata from './Getdata';
import Deletedata from './Deletedata';
import UpdateData from './UpdateData';

function App() {
  return (<div className="App">
    <Getdata />
    <Postdata />
    <UpdateData />
  </div>
  );
}

export default App;

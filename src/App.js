import './App.css';
import './styles.scss';
import Countdown from './components/Countdown';
import Universities from './components/Universities';

function App() {
  return (
    <div className="App col-md-12 pt-5">

      <div className='container'>

        <div className='row'>

          <div className='col-md-6 mb-5'>
            <h2> University App</h2>
            <br></br>
            <Universities />
          </div>


          <div className='col-md-6 mb-5'>
          <h2> Countdown App</h2>
            <br></br>
            <Countdown />
          </div>
        </div>

      </div>

    </div>


  );
}

export default App;

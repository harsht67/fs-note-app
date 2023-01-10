import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import SideMenu from './Menu/SideMenu';

function App() {
  return (
    <div className="App">

      <Header/>

      <div className="App-flex">
      
        <SideMenu/>

        <Main/>
      
      </div>

    </div>
  );
}

export default App;

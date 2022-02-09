import holbertonlogo from './logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <header className='App-header'>
      <img src={holbertonlogo} alt="holberton" height={200} width={"200"}/>
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
      <p>Login to access the full dashboard</p>
    </body>
      <footer className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </>
  );
}

export default App;
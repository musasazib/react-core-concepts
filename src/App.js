// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person />
      <Friends></Friends>
      <Friends></Friends>
      <Students />
      <Students></Students>
    </div>
  );
};

function Person() {
  return (
    <div className="person">
      <h1>Name: Shawn Kumasi</h1>
      <h3>Profession: Student</h3>
    </div>
  )
};

function Friends() {
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '10px',
    borderRadius:'20px'
  }
  return (
    <div style={person}>
      <h1>Name: Robin Aloe</h1>
      <h4>Address: Rajshahi</h4>
    </div>
  )
};

function Students() {
  return (
    <div style={{backgroundColor: 'lightgray', border: '3px solid lightsalmon', margin: '10px' ,borderRadius:'20px'}}>
      <h1>Name: Anodal Khan</h1>
      <h4>Class: Eight</h4>
    </div>
  )
}

export default App;

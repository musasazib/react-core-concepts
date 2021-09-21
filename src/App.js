// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Shawon Kumar" work="Student"></Person>
      <Person name="Pronoy Chondoro" work="Garments Worker" />
      <Friends name="Robin Alom" bari="Raninogur"></Friends>
      <Friends name="Uzz Zuha Joy" bari="Dobolhati"></Friends>
      <Students name="Sakib Al Hasan" pore="Eight" />
      <Students name="Tamim Iqbal" pore="Seven"></Students>
    </div>
  );
};

function Person(props) {
  return (
    <div className="person">
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.work}</h3>
    </div>
  )
};

function Friends(props) {
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '10px',
    borderRadius: '20px'
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Address: {props.bari}</h4>
    </div>
  )
};

function Students(props) {
  return (
    <div style={{ backgroundColor: 'lightgray', border: '3px solid lightsalmon', margin: '10px', borderRadius: '20px' }}>
      <h1>Name: {props.name}</h1>
      <h4>Class: {props.pore}</h4>
    </div>
  )
}

export default App;

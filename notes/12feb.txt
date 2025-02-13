import './App.css';

function App() {
  const firstname = 'ritesh';
  const styles = { color: 'red' };
  return (
    <div>
      <h1 style={styles}>{firstname}</h1>
      <div className="heading">hello</div>
      <input type="text" maxLength={5} />
      <Button title="Register" />
      <Button title="Login" />
      <Button title="Submit" />
    </div>
  );
}

function Button(props) {
  console.log(props);
  console.log('instance created');
  return <button>{props.title}</button>;
}

export default App;

//react features=> components based architure
//jsx
//virtual dom
//props => parent to child data share
//one way data binding data share

//inbuilt tag //attribute
{
  /* <input type='text'/> */
}
//components //props
{
  /* <Button type="text"/> */
}

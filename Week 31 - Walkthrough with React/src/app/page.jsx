import React from 'react';
import Person from '../../components/Person';
import Button from '../../components/Button';
import Header from '../../components/Header';
import List from '../../components/List';

const App = () => {

  const handleClick = () =>  console.log("Button Clicked !") ;

  const items = ["Orange", "Grapes", "Coconut", "Banana"]
  
  return (
    <>
    <div>
      <span>Q.01</span>
      <h1>Person Details</h1>
      <Person name="Alakh Pandey" age={32} />
    </div>

    <div>
      <span>Q.02</span>
      <h1>Button Example</h1>
      <Button text="Button" onClick={handleClick} />
    </div>

    <div>
      <span>Q.03</span>
      <h3>
      <Header title ="PW Skills"/>
      </h3>
    </div>

    <div>
      <span>Q.04</span>
      <List items={items}/>
    </div>

    </>
    
  );
};

export default App;

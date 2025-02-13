import React from 'react';

function App() {
  const listOfPhone = ['Sangs25ultra', 'iphone 16', 'iphone 16 pro max'];
 const handleClick = (item) => {
const filteredItems = listOfPhone.filter((i)=> i !== item )

 }
  return (
    <div>
      <ui>
        {listOfPhone.map((item) => 
          <>
             <li key={item}>{item}</li>
             <button onClick={()=>handleClick(item)}>Delete</button>
             </>
       

        )}
      </ui>
    </div>
  );
}

export default App;

//List rendering

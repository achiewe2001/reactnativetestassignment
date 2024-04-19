import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Array1 from "../data/Array_1.json"
import Array2 from "../data/Array_2.json"

export const Home = () => {
  const [bothArray, setBothArray] = useState([]);
  const CombinedArrayContext = React.createContext([]);

  function combineUnique(arr1, arr2) {
    const combinedArray = [];

  
    for (let i = 0; i < arr1.length; i++) {
        let isUnique = true;
      
        for (let j = 0; j < combinedArray.length; j++) {
            if (arr1[i] === combinedArray[j]) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            combinedArray.push(arr1[i]);
        }
    }

  
    for (let i = 0; i < arr2.length; i++) {
        let isUnique = true;
   
        for (let j = 0; j < combinedArray.length; j++) {
            if (arr2[i] === combinedArray[j]) {
                isUnique = false;
                break;
            }
        }
   
        if (isUnique) {
            combinedArray.push(arr2[i]);
        }
    }

    return combinedArray;
   
   
}

console.log(bothArray)

useEffect(() => {
  combineUnique(Array1, Array2);
}, []);


 
return (
 
  <CombinedArrayContext.Provider value={bothArray}>
    <div className='App'>
      <header className='App-header'>
      
        <Link to='list'>დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  </CombinedArrayContext.Provider>
);
}

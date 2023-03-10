import React from 'react'

const useCounter = (initialCount=0)=>{

    const [counter,setCounter]= React.useState(initialCount);

    const handleIncrement = ()=>{

        let newValue = counter + 1;
        setCounter(newValue > 100 ? 100 : newValue);
    }

    const handleDecrement = ()=>{

        let newValue = counter - 1;
        setCounter(newValue < 0 ? 0 : newValue);
    }

    return[counter,handleDecrement, handleIncrement]
}

export default useCounter;
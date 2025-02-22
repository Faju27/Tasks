import React, { useEffect, useState } from 'react';

const Events = () => {

    const [counter, setCounter] = useState(null)
    const [count ,setCount] = useState(0)
    const [axis,setAxis] = useState({x : 0 ,y : 0})

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000);
        return () => {
          clearInterval(interval)  
        };
    }, [count]);



    const handleMouse = (i) => {
        setAxis({x : i.clientX, y : i.clientY})
    }

    useEffect(() => {
        
        document.addEventListener('mousemove',handleMouse)

        return () => {
            document.removeEventListener('mousemove',handleMouse)
        };
    }, []);

    
    return (
    <div className='text-success bg-warning' style={{height:'50vh'}} >
        <div className='d-flex flex-column align-items-center'>
            <div> {counter} </div>
            <div> {count} </div>
            <div><button className='btn btn-danger' onClick={() => setCount(count + 1)}>+</button></div>
        </div>
       <div className='bg-danger position-absolute rounded-5 ' style={{height:'20px',width:'20px',top:`${axis.y}px`,left:`${axis.x}px`,filter:'blur(1px)'}}></div>
    </div>
    );
}

export default Events;

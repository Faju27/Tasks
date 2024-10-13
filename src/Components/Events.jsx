import React, { useEffect, useState } from 'react';

const Events = () => {

    const [axis,setAxis] = useState({x : 0 ,y : 0})

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
    <div className='text-success bg-warning' style={{height:'100vh'}} >
       <div className='bg-danger position-absolute rounded-5 ' style={{height:'20px',width:'20px',top:`${axis.y}px`,left:`${axis.x}px`,filter:'blur(1px)'}}></div>
    </div>
    );
}

export default Events;

import { useEffect, useRef, useState } from 'react';

const Alerts = ({ type, message }) => {
  const [toggle, setToggle] = useState(true)
  const [count, setCount] = useState(0)
  const savedCallback = useRef();

  const callback = () => {
    setCount(count + 1);
  }

  useEffect(()=> {
    savedCallback.current = callback;
  })

  useEffect(()=> {
    const tick = () => {
      savedCallback.current();
    }
    let toggleTime = setInterval(tick, 1000);
    return () => clearInterval(toggleTime)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=> {
   if (count === 3) {
     setToggle(false)
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  return (
    <>
        { toggle && 
          <div className="alerts">
            <p className={`message-${type}`}>{message}</p>
          </div> }
    </>
  )
}

export default Alerts;
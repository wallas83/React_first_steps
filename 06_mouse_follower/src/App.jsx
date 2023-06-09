import { useEffect } from "react";
import { useState } from "react"


function App() {

  const [enable, setEnable] = useState(false);
  const [position, setPosition]= useState({x: 0, y: 0})


  useEffect(() => {
    console.log('se ejecuta respeto al estado enable, el efecto');
    const handleMove = ( event ) => {
      console.log(event);
      const {clientX, clientY} =  event;
      // console.log(clienteX);
      setPosition({x:clientX, y: clientY});
      
    }
   
    if(enable){
      window.addEventListener('pointermove', handleMove)
    }
    // el return hace un desmontado antes de ejecutar el efecto de nuevo o las dependencias
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable]);

   // change body className
   useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enable])

  const handleButonClick = () => {
    setEnable(!enable)
  }
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={handleButonClick}>{enable ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}

export default App


// APIs:
// fACTS random: https://catfact.ninja/fact
// Images random: https://cataas.com/cat/say/hello
// 
// - Recupera un hecho aleatorio de gatos de la primera API
// - Recupera la primera palabra del hecho
import './App.css'
import { useEffect, useState } from "react"
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_INDPOINT_IMG_RANDOM = 'https://cataas.com/cat/says/'
// - Muestra la imagen de un gato con la primera palabra.
export const App = () => {

  const [factoria, setFact] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      });
  }, [])
     // para recuperar una imagen cada vez que tenemos unua cita nueva

     useEffect(()=>{
      if(!factoria) return
      const words = factoria.split(' ').slice(0, 3).join(' ');

      fetch(`${CAT_INDPOINT_IMG_RANDOM}${words}?json=true`)
        .then(response => response.json())
        .then(data => {
          const { url } = data
          setImg(url)

        }

        )
    },[factoria])

  return (
    <main className='maincito' >
      <h3> Prueba tecnica</h3>
      {factoria && <div>{factoria}</div>}
      {img && <img src={`https://cataas.com${img}`} />}
    </main>
  )
}



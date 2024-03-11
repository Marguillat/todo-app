import { useEffect, useState } from 'react'

function Clock (props) {
  const [date, setDate] = useState(new Date())

  /**
   * Fontction met à jour la date de l'horloge
  */
  const tick = () => {
    setDate(new Date())
  }

  /**
   * Methode fournie par récate s'executant à l'apparition du composant
   */
  useEffect(() => {
    const interval = setInterval(() => {
      tick()
    }, props.interval)

    // return s'execute au démontage du composant
    return () => {
      // supprime l'interval du composant dans la mémoire
      clearInterval(interval)
    }
  }, [props.interval]) // relance le composant quand props interval change

  // on retourne l'affichage du composant
  return (
    <>
      <h1>{date.toLocaleTimeString()}:{date.getMilliseconds()}</h1>
    </>
  )
}

export default Clock

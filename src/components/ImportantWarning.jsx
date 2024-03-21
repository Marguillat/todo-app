import { useEffect, useState } from 'react'
import { RiAlarmWarningFill, RiAlarmWarningLine } from 'react-icons/ri'

function ImportantWarning (style) {
  const [seconds, setSeconds] = useState((new Date()).getSeconds())

  const tick = () => {
    setSeconds((new Date()).getSeconds())
  }

  useEffect(() => {
    const interval = setInterval(() => {
      tick()
    }, 1000)

    // return s'execute au démontage du composant
    return () => {
      // supprime l'interval du composant dans la mémoire
      clearInterval(interval)
    }
  }, [1000])
  return (
    (seconds % 2)
      ? <RiAlarmWarningFill
          style={{ color: '#f42d72' }}
          className='w-6 h-6 absolute -top-[22px] left-4 z-20'
        />
      : <RiAlarmWarningLine
          style={{ color: '#f42d72' }}
          className='w-6 h-6 absolute -top-[22px] left-4 z-20'
        />
  )
}

export default ImportantWarning

import React, { useEffect, useState } from 'react'
import { IonProgressBar, IonText } from '@ionic/react'

function ProgressBar() {
  const progressUser = 0.8
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress > progressUser) {
        setProgress((prevProgress) => prevProgress + 0.01)
      } else {
        setProgress(progressUser)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [progress])

  if (progress >= progressUser) {
    setTimeout(() => {
      setProgress(progressUser)
    }, 1000)
  }

  return (
    <div>
      <IonText>
        <h4>Progress {progressUser * 100}%</h4>
      </IonText>
      <IonProgressBar
        style={{ height: '30px', borderRadius: '5px' }}
        value={progress}
      ></IonProgressBar>
    </div>
  )
}
export default ProgressBar

import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { useState, useEffect } from 'react'
import HalfCard from '../components/CardHalf'
import { SliderCard } from '../components/SliderCard'
import './Like.css'

const LikePage: React.FC = () => {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    const newItems = []
    for (let i = 1; i < 5; i++) {
      newItems.push(`Item ${items.length + i}`)
    }
    setItems([...items, ...newItems])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Liked</IonTitle>
      </IonToolbar>
      <IonContent fullscreen color="light">
        <div className="ion-content-scroll-host">
          <div className="ion-padding">
            <IonText>
              <h1>Liked</h1>
            </IonText>
          </div>

          {items.map((item, index) => (
            <HalfCard name={item} />
          ))}
        </div>
        <IonInfiniteScroll>
          <IonInfiniteScrollContent
            loadingText="Please wait..."
            loadingSpinner="bubbles"
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
        <SliderCard hasTitle={true} title="May you like this..." />
      </IonContent>
    </IonPage>
  )
}

export default LikePage

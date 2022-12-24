import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { search } from 'ionicons/icons'
import { useState, useEffect } from 'react'
import HalfCard from '../../components/CardHalf'
import { SliderCard } from '../../components/SliderCard'
import './styles/Like.css'

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
      <IonHeader>
        <IonToolbar>
          <IonBackButton />
          <IonTitle>Loved</IonTitle>
          <IonButton color={'light'} slot="end">
            <IonIcon src={search} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light">
        <div className="ion-content-scroll-host ion-padding">
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

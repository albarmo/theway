import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { useState, useEffect } from 'react'
import HorizontalCard from '../components/CardHorizontal'
import Container from '../components/Container'
import { SliderCard } from '../components/SliderCard'
import './Plan.css'

const PlanPage: React.FC = () => {
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
        <IonTitle>My Plans</IonTitle>
      </IonToolbar>
      <IonContent fullscreen color="light">
        <SliderCard hasTitle={true} title="May you Plan this..." />
        <Container title="My Plan">
          {items.map((item, index) => (
            <HorizontalCard name={item} />
          ))}
          <IonInfiniteScroll>
            <IonInfiniteScrollContent
              loadingText="Please wait..."
              loadingSpinner="bubbles"
            ></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </Container>
      </IonContent>
    </IonPage>
  )
}

export default PlanPage

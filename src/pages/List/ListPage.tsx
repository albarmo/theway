import { IonContent, IonGrid, IonInput, IonItem, IonPage } from '@ionic/react'
import { useState, useEffect } from 'react'
import HalfCard from '../../components/CardHalf'
import Container from '../../components/Container'
import ListCard from '../../components/ListCard'
import MenuGrid from '../../components/MenuGrid'
import { SliderCard } from '../../components/SliderCard'
import './styles/List.css'

const ListPage: React.FC = () => {
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
      <IonContent fullscreen color="light">
        <div className="list-page-header">
          <h1>Buildings</h1>
          <p>Enter everything here</p>
        </div>
        <MenuGrid />
        <IonItem className="input-box" lines="none">
          <IonInput
            className="input-search"
            color={'dark'}
            placeholder="Find here..."
          />
        </IonItem>
        <SliderCard hasTitle={true} title="Hot Items" />
        <Container title={''} hasTitle={false}>
          <div className="grid">
            {items.map((item, index) => (
              <HalfCard name={item} />
            ))}
          </div>
        </Container>
      </IonContent>
    </IonPage>
  )
}

export default ListPage

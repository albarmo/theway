import { IonContent, IonIcon, IonInput, IonItem, IonPage } from '@ionic/react'
import { search } from 'ionicons/icons'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GridCard from '../../components/CardGrid'
import HalfCard from '../../components/CardHalf'
import ListCard from '../../components/ListCard'
import MenuGrid from '../../components/MenuGrid'
import { SliderCard } from '../../components/SliderCard'
import { useCapitalizedString } from '../../hooks/useCapitalized'
import './styles/List.css'

type ListParams = {
  category: string
}

const ListPage: React.FC = () => {
  let { category } = useParams<ListParams>()
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
          <h1>{useCapitalizedString(category)}</h1>
          <p>Find {category} vendors here</p>
          <IonItem className="input-box" lines="none">
            <IonIcon src={search} size="small" color={'medium'} />
            <IonInput className="input-search" placeholder="Find here..." />
          </IonItem>
          <MenuGrid />
        </div>
        <SliderCard hasTitle={true} title="Hot Items" />
        <div className="ion-padding">
          <div className="grids">
            {items.map((item, index) => (
              <GridCard name={item} />
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ListPage

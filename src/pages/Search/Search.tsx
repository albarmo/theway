import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonText,
} from '@ionic/react'
import { closeCircle, search } from 'ionicons/icons'
import { useState, useEffect } from 'react'
import GridCard from '../../components/CardGrid'

import './styles/Search.css'

const SearchPage: React.FC = () => {
  const [items, setItems] = useState<string[]>([])
  useEffect(() => {
    const newItems = []
    for (let i = 1; i < 10; i++) {
      newItems.push(`Item ${items.length + i}`)
    }
    setItems([...items, ...newItems])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <IonPage>
      <IonContent fullscreen color="light ion-padding">
        <IonText className="search-title">
          <p>Search</p>
        </IonText>
        <div>
          <IonItem className="search-bar" lines="none">
            <IonIcon src={search} color={'medium'} />
            <IonInput placeholder="Find here..." className="searchbar" />
            <IonIcon src={closeCircle} color={'medium'} />
          </IonItem>
          <div className="search-history">
            <IonText>
              <h5>History</h5>
            </IonText>
            {[
              'test',
              'perumahan',
              'wisata bandung',
              'nikah murah',
              'paket 50 juta',
            ].map((item, index) => (
              <IonBadge className="history" key={index}>
                <IonText color={'medium'} className="badage-text">
                  {item}
                </IonText>
              </IonBadge>
            ))}
          </div>
        </div>
        <IonList className="search-result">
          <IonText>
            <h5>Hasil pencarian</h5>
          </IonText>
          <div className="grids">
            {items.map((item, index) => (
              <GridCard name={item} />
            ))}
          </div>
          {items.map((item, index) => (
            <IonCard>
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/card-media.png"
              />
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Here's a small text description for the card content. Nothing
                more, nothing less.
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
        <IonInfiniteScroll>
          <IonInfiniteScrollContent
            loadingText="Please wait..."
            loadingSpinner="bubbles"
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  )
}

export default SearchPage

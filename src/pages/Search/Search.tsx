import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonList,
  IonPage,
  IonProgressBar,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { useState, useEffect } from 'react'
import GridCard from '../../components/Cards/CardGrid'

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

  const data = ['Amsterdam', 'Buenos Aires', 'Cairo']
  let [results, setResults] = useState([...data])

  const handleChange = (ev: Event) => {
    let query = ''
    const target = ev.target as HTMLIonSearchbarElement
    if (target) query = target.value!.toLowerCase()

    setResults(data.filter((d) => d.toLowerCase().indexOf(query) > -1))
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            debounce={1000}
            onIonChange={(ev) => handleChange(ev)}
          ></IonSearchbar>
          <IonList>
            {results.map((result) => (
              <IonItem>{result}</IonItem>
            ))}
          </IonList>
          <div className="ion-padding">
            <div className="search-history">
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
          <IonProgressBar type="indeterminate"></IonProgressBar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color="light ion-padding">
        <IonList className="search-result">
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

import React, { useState, useEffect } from 'react'
import {
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonThumbnail,
} from '@ionic/react'
import './ListCard.css'
import HorizontalCard from '../Cards/CardHorizontal'
import VerticalCard from '../Cards/CardVertical'

interface HorizontalCardProps {
  title?: string
  style: 'horizontal' | 'vertical' | 'default'
  isInfinite: boolean
  hasTitle: boolean
  type: 'plan' | 'vendor' | 'blog' | 'task' | 'default'
  item?: any
}

const ListCard: React.FC<HorizontalCardProps> = ({
  title,
  style = 'default',
  isInfinite,
  hasTitle = false,
  type = 'default',
  item,
}) => {
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3'])
  useEffect(() => {
    if (isInfinite) {
      const newItems = []
      for (let i = 1; i < 5; i++) {
        newItems.push(`Item ${items.length + i}`)
      }
      setItems([...items, ...newItems])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="list-container">
      {hasTitle && (
        <IonText color={'dark'}>
          <h5 className="list-title">{title}</h5>
        </IonText>
      )}
      {style === 'horizontal' && (
        <IonList className="list-background">
          {items.map((item, index) => (
            <div className="list-item" key={item}>
              <HorizontalCard type={type} name={item} />
            </div>
          ))}
        </IonList>
      )}

      {style === 'vertical' && (
        <IonList className="list-background">
          {items.map((item, index) => (
            <div className="list-item" key={item}>
              <VerticalCard type={type} name={item} />
            </div>
          ))}
        </IonList>
      )}

      {style === 'default' && (
        <IonList>
          {items.map((item, index) => (
            <IonItem>
              <IonThumbnail slot="start">
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                />
              </IonThumbnail>

              <IonLabel>
                <h1>Item Thumbnail</h1>
                <p>Item Thumbnail</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      )}
      {isInfinite && (
        <IonInfiniteScroll>
          <IonInfiniteScrollContent
            loadingText="Please wait..."
            loadingSpinner="bubbles"
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      )}
    </div>
  )
}
export default ListCard

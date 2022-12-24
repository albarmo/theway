import React from 'react'
import { IonSlides, IonSlide, IonText } from '@ionic/react'
import './SliderCard.css'
import HalfCard from '../Cards/CardHalf'

const slideOpts = {
  initialSlide: 0,
  slidesPerView: 1.2,
  speed: 400,
}

interface SliderCardProps {
  hasTitle: boolean
  title?: string
}

export const SliderCard: React.FC<SliderCardProps> = ({
  hasTitle,
  title,
}: SliderCardProps) => (
  <div className="ion-padding">
    {hasTitle && (
      <IonText color={'dark'}>
        <h5 className="list-title">{title}</h5>
      </IonText>
    )}
    <IonSlides pager={false} options={slideOpts}>
      <IonSlide>
        <HalfCard />
      </IonSlide>
      <IonSlide>
        <HalfCard />
      </IonSlide>
      <IonSlide>
        <HalfCard />
      </IonSlide>
      <IonSlide>
        <HalfCard />
      </IonSlide>
    </IonSlides>
  </div>
)

import React from 'react'
import { IonSlides, IonSlide, IonButton, IonIcon, IonText } from '@ionic/react'
import {
  camera,
  earth,
  home,
  homeOutline,
  list,
  personOutline,
  send,
} from 'ionicons/icons'
import './Slider.css'

const slideOpts = {
  initialSlide: 0,
  slidesPerView: 2.8,
  speed: 400,
}

interface SliderProps {
  hasTitle: boolean
  title?: string
}

const CATEGORIES = [
  { id: 0, title: 'Building', path: 'building', icon: home },
  { id: 1, title: 'Organizer', path: 'organizer', icon: personOutline },
  { id: 2, title: 'Photo', path: 'photo', icon: camera },
  { id: 3, title: 'Venue', path: 'venue', icon: earth },
  { id: 4, title: 'Cathering', path: 'cathering', icon: list },
  { id: 5, title: 'Invitation', path: 'invitation', icon: send },
]

export const Slider: React.FC<SliderProps> = ({
  hasTitle = false,
  title,
}: SliderProps) => (
  <div>
    {hasTitle && (
      <div className="slider-title-box">
        <IonText className="slider-title">{title}</IonText>
      </div>
    )}
    <IonSlides pager={false} options={slideOpts} className="ion-padding slider">
      {CATEGORIES.map((item) => (
        <IonSlide key={item.id}>
          <IonButton routerLink={`/list/${item.path}`}>
            <IonIcon slot="start" icon={item.icon}></IonIcon>
            {item.title}
          </IonButton>
        </IonSlide>
      ))}
    </IonSlides>
  </div>
)

import React from 'react'
import { IonSlides, IonSlide, IonButton, IonIcon, IonText } from '@ionic/react'
import { camera, earth, homeOutline, personOutline, send } from 'ionicons/icons'
import './Slider.css'

const slideOpts = {
  initialSlide: 0,
  slidesPerView: 2.5,
  speed: 400,
}

interface SliderProps {
  hasTitle: boolean
  title?: string
}

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
      <IonSlide>
        <IonButton>
          <IonIcon slot="start" icon={homeOutline}></IonIcon>
          Building
        </IonButton>
      </IonSlide>
      <IonSlide>
        <IonButton>
          <IonIcon slot="start" icon={personOutline}></IonIcon>
          Organizer
        </IonButton>
      </IonSlide>
      <IonSlide>
        <IonButton>
          <IonIcon slot="start" icon={camera}></IonIcon>
          Photo
        </IonButton>
      </IonSlide>
      <IonSlide>
        <IonButton>
          <IonIcon slot="start" icon={homeOutline}></IonIcon>
          Venue
        </IonButton>
      </IonSlide>
      <IonSlide>
        <IonButton>
          <IonIcon slot="start" icon={earth}></IonIcon>
          Cathering
        </IonButton>
      </IonSlide>
      <IonSlide>
        <IonButton>
          <IonIcon slot="start" icon={send}></IonIcon>
          Invitation
        </IonButton>
      </IonSlide>
    </IonSlides>
  </div>
)

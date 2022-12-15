import React from 'react'
import { IonSlides, IonSlide, IonButton, IonIcon } from '@ionic/react'
import { star } from 'ionicons/icons'
import './Slider.css'

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 0,
  slidesPerView: 2.8,
  speed: 400,
}

export const Slider: React.FC = () => (
  <IonSlides pager={false} options={slideOpts} className="ion-padding slider">
    <IonSlide>
      <IonButton className="slider-item">
        <IonIcon slot="start" icon={star}></IonIcon>
        Left Icon
      </IonButton>
    </IonSlide>
    <IonSlide>
      <IonButton>
        <IonIcon slot="start" icon={star}></IonIcon>
        Left Icon
      </IonButton>
    </IonSlide>
    <IonSlide>
      <IonButton>
        <IonIcon slot="start" icon={star}></IonIcon>
        Left Icon
      </IonButton>
    </IonSlide>
    <IonSlide>
      <IonButton>
        <IonIcon slot="start" icon={star}></IonIcon>
        Left Icon
      </IonButton>
    </IonSlide>
    <IonSlide>
      <IonButton>
        <IonIcon slot="start" icon={star}></IonIcon>
        Left Icon
      </IonButton>
    </IonSlide>
    <IonSlide>
      <IonButton>
        <IonIcon slot="start" icon={star}></IonIcon>
        Left Icon
      </IonButton>
    </IonSlide>
  </IonSlides>
)

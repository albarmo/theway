import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonText,
} from '@ionic/react'
import { bookmarkOutline } from 'ionicons/icons'
import './CardGrid.css'

interface VerticalCardProps {
  name?: string
}

const GridCard: React.FC<VerticalCardProps> = ({ name }) => {
  return (
    <div className="card-grid">
      <IonCardHeader className="card-grid-header">
        <img
          className="card-grid-image"
          alt="Silhouette of mountains"
          src="https://ionicframework.com/docs/img/demos/card-media.png"
        />
        <IonCardTitle className="card-grid-title">Title</IonCardTitle>
        <IonText className="card-grid-subtitle">Card Subtitle</IonText>
      </IonCardHeader>
      <IonCardContent className="card-grid-content">
        <IonText className="grid-card-price" color="primary">
          Rp 20.000.000
        </IonText>
      </IonCardContent>
    </div>
  )
}

export default GridCard

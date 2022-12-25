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
import './styles/CardHalf.css'

interface VerticalCardProps {
  name?: string
  type: 'plan' | 'vendor' | 'blog' | 'task' | 'default'
  item?: any
}

const HalfCard: React.FC<VerticalCardProps> = ({ name, type, item }) => {
  return (
    <IonCard className="card-half" routerLink={`detail/${type}/1`}>
      <IonCardHeader className="card-half-header">
        <img
          className="card-half-image"
          alt="Silhouette of mountains"
          src="https://ionicframework.com/docs/img/demos/card-media.png"
        />
        <IonCardTitle className="card-half-title">Title</IonCardTitle>
        <IonCardSubtitle className="card-half-subtitle">
          Card Subtitle
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent className="card-half-content">
        <IonText className="half-card-price" color="primary">
          Rp 20.000.000
        </IonText>
        <IonButton
          size="small"
          fill="outline"
          color="primary"
          className="half-card-button"
        >
          <IonIcon icon={bookmarkOutline}>Cari</IonIcon>
        </IonButton>
      </IonCardContent>
    </IonCard>
  )
}

export default HalfCard

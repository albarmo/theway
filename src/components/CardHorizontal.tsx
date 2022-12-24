import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonText,
  IonThumbnail,
} from '@ionic/react'
import './CardHorizontal.css'

interface HorizontalCardProps {
  name: string
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ name }) => {
  return (
    <IonCard className="card-horizontal">
      <div className="card-horizontal-box-img">
        <img
          className="card-horizontal-img"
          alt="Silhouette of mountains"
          src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
        />
      </div>
      <IonCardContent className="card-horizontal-body">
        <IonCardTitle class="ch-title">Card Title</IonCardTitle>
        <IonText className="ch-description">
          Here's a small text description for the card content.
        </IonText>
      </IonCardContent>
    </IonCard>
  )
}

export default HorizontalCard

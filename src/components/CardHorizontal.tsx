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
      <IonThumbnail className="card-horizontal-tumbnail">
        <img
          alt="Silhouette of mountains"
          src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
        />
      </IonThumbnail>
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

// <div className="card-horizontal">
//     <IonThumbnail className="card-horizontal-tumbnail">
//       <img
//         alt="Silhouette of mountains"
//         src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
//       />
//     </IonThumbnail>
//     <div className="card-horizontal-body">
//       <IonText className="ch-title">{name}</IonText>
//       <IonLabel>
//         Rolade is an ever-expanding ecosystem of interconnected apps and
//       </IonLabel>
//     </div>
//   </div>
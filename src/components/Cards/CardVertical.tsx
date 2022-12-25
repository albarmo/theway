import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react'
import './styles/CardVertical.css'

interface VerticalCardProps {
  name?: string
  type: 'plan' | 'vendor' | 'blog' | 'task' | 'default'
  item?: any
}

const VerticalCard: React.FC<VerticalCardProps> = ({ name, type, item }) => {
  return (
    <IonCard className="card-vertical" routerLink={`detail/${type}}/1`}>
      <img
        alt="Silhouette of mountains"
        src="https://ionicframework.com/docs/img/demos/card-media.png"
      />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more,
        nothing less.
      </IonCardContent>
    </IonCard>
  )
}

export default VerticalCard

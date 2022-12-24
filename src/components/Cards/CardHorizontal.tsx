import { IonCard, IonCardContent, IonCardTitle, IonText } from '@ionic/react'
import './styles/CardHorizontal.css'

interface HorizontalCardProps {
  name: string
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ name }) => {
  return (
    <IonCard className="card-horizontal" routerLink={`detail/item/1`}>
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

import { IonCard, IonCardContent, IonCardTitle, IonText } from '@ionic/react'
import './styles/CardHorizontal.css'

interface HorizontalCardProps {
  name: string
  type: 'plan' | 'vendor' | 'blog' | 'task' | 'default'
  item?: any
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  name,
  type = 'default',
  item,
}) => {
  return (
    <IonCard className="card-horizontal" routerLink={`/${type}/1`}>
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

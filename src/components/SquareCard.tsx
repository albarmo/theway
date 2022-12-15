import { IonText, IonIcon } from '@ionic/react'
import { starOutline } from 'ionicons/icons'
import './SquareCard.css'

interface ProfileCardProps {
  name: string
}

const SquareCard: React.FC<ProfileCardProps> = ({ name }) => {
  return (
    <div className="ion-padding" scroll-y="false">
      <div className="square-card-wrap">
        <div className="square-card-content">
          <div className="square-card-text">
            <IonText className="square-card-title">My Priority Plan</IonText>
            <IonText className="square-card-location">Jakarta Selatan</IonText>
          </div>
          <div className="square-card-progress">
            <IonIcon className="square-card-icon" src={starOutline} />
            <IonText className="card-progress-percentage">89%</IonText>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SquareCard

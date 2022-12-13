import { IonLabel, IonText, IonThumbnail } from '@ionic/react'
import './CardHorizontal.css'

interface HorizontalCardProps {
  name: string
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ name }) => {
  return (
    <div className="card-horizontal">
      <IonThumbnail className="card-horizontal-tumbnail">
        <img
          alt="Silhouette of mountains"
          src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
        />
      </IonThumbnail>
      <div className="card-horizontal-body">
        <IonText className="ch-title">{name}</IonText>
        <IonLabel>
          Rolade is an ever-expanding ecosystem of interconnected apps and
        </IonLabel>
      </div>
    </div>
  )
}

export default HorizontalCard

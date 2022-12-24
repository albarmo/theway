import { IonText, IonAvatar } from '@ionic/react'
import './styles/ProfileCard.css'

interface ProfileCardProps {
  name: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name }) => {
  return (
    <div className="profile-card">
      <div className="profile-user">
        <div className="profile-card-text">
          <IonText className="p-location">Welcome,</IonText>
          <IonText className="p-name">{name}</IonText>
        </div>
      </div>
      <div>
        <IonAvatar>
          <img
            className="p-image"
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
        </IonAvatar>
      </div>
    </div>
  )
}

export default ProfileCard

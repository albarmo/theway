import { IonText, IonImg, IonAvatar, IonIcon } from '@ionic/react'
import { logOutOutline } from 'ionicons/icons'
import './ProfileCard.css'

interface ProfileCardProps {
  name: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name }) => {
  return (
    <div className="ion-padding" scroll-y="false">
      <div className="profile-card">
        <div className="profile-user">
          <div>
            <IonAvatar className="p-image">
              <IonImg
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
          </div>
          <div className="profile-card-text">
            <IonText className="p-name">{name}</IonText>
            <IonText className="p-location">Jakarta Selatan</IonText>
          </div>
        </div>
        <IonIcon size="large" src={logOutOutline} />
      </div>
    </div>
  )
}

export default ProfileCard

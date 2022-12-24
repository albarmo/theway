import {
  IonAvatar,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
} from '@ionic/react'
import Container from '../../components/Common/Container'
import './styles/Profile.css'

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color="light">
        <div className="profile-header">
          <IonAvatar className="profile-picture">
            <IonImg
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <div className="profile-title">
            <IonText>
              <h3>Albar Moerhamsa</h3>
            </IonText>
            <IonText>
              <p>Jakarta Selatan</p>
            </IonText>
          </div>
        </div>
        <Container title="" hasTitle={false}>
          <IonText>
            <h3 className="header-menu">My Profile</h3>
          </IonText>
          {[1, 2].map((item, index) => (
            <IonItem href="#" lines="none">
              <IonLabel>Anchor Item {index}</IonLabel>
            </IonItem>
          ))}
        </Container>
        <Container title="" hasTitle={false}>
          <IonText>
            <h3 className="header-menu">Help & Feedback</h3>
          </IonText>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <IonItem href="#" lines="none">
              <IonLabel>Anchor Item {index}</IonLabel>
            </IonItem>
          ))}
        </Container>
        <Container title="" hasTitle={false}>
          <IonItem href="/login" lines="none">
            <IonLabel>Logout Account</IonLabel>
          </IonItem>
          <IonItem href="/register" lines="none">
            <IonLabel>Register Vendors</IonLabel>
          </IonItem>
          <IonItem href="/register" lines="none">
            <IonLabel>Joint the Force</IonLabel>
          </IonItem>
          <IonItem href="/register" lines="none">
            <IonLabel>FAQ</IonLabel>
          </IonItem>
        </Container>
      </IonContent>
    </IonPage>
  )
}

export default ProfilePage

import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonPage,
  IonSlide,
  IonSlides,
} from '@ionic/react'
import './Splash.css'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" scroll-y="false">
        <IonSlides>
          <IonSlide>
            <div className="slide">
              <IonImg src="/assets/images/ilu-1.png" />
              <h2>Welcome</h2>
              <p>
                The <b>ionic conference app</b> is a practical preview of the
                ionic framework in action, and a demonstration of proper code
                use.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <div className="slide">
              <IonImg src="/assets/images/ilu-2.png" />
              <h2>Welcome</h2>
              <p>
                The <b>ionic conference app</b> is a practical preview of the
                ionic framework in action, and a demonstration of proper code
                use.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <IonImg src="/assets/images/ilu-3.png" />
            <h2>What is Appflow?</h2>
            <p>
              <b>Appflow</b> is a powerful set of services and features built on
              top of Ionic Framework that brings a totally new level of app
              development agility to mobile dev teams.
            </p>
          </IonSlide>
          <IonSlide>
            <IonImg src="/assets/images/ilu-4.png" />
            <h2>Ready to Play?</h2>
            <IonButton fill="clear">
              Continue <IonIcon slot="end" name="arrow-forward"></IonIcon>
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  )
}

export default Tab1

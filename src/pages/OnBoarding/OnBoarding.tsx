import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonPage,
  IonSlide,
  IonSlides,
  useIonViewWillEnter,
} from '@ionic/react'
import { hideTabs } from '../../hooks/displayTabs'
import './OnBoarding.css'

const OnBoardingPage: React.FC = () => {
  useIonViewWillEnter(() => hideTabs())
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" scroll-y="false">
        <IonSlides className="onboard">
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
            <IonButton fill="clear" routerLink="/">
              Continue <IonIcon slot="end" name="arrow-forward"></IonIcon>
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  )
}

export default OnBoardingPage

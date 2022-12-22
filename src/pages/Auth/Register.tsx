import {
  IonButton,
  IonContent,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonNote,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  useIonViewWillEnter,
} from '@ionic/react'
import { useState } from 'react'
import './styles/Register.css'
import { Link, RouteComponentProps } from 'react-router-dom'
import { hideTabs } from '../../hooks/displayTabs'

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  useIonViewWillEnter(() => hideTabs())
  const [isTouched, setIsTouched] = useState(false)
  const [isValid, setIsValid] = useState<boolean>()
  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    )
  }
  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value
    setIsValid(undefined)
    if (value === '') return
    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false)
  }
  const markTouched = () => {
    setIsTouched(true)
  }

  return (
    <IonPage>
      <IonContent fullscreen color="light">
        <div className="register-page">
          <IonImg
            className="logo"
            src="https://i.ibb.co/G9HMCG5/The-Way-1024-removebg-preview-2-1.png"
            alt="tw-logo"
          />
          <div className="register-form">
            <IonText>
              <h1 className="register-title">Hello! Register to get started</h1>
            </IonText>
            <IonItem className={`${isTouched && 'ion-touched'}`}>
              <IonInput
                type="text"
                onIonInput={(event) => validate(event)}
                onIonBlur={() => markTouched()}
                placeholder="Enter username"
              />
            </IonItem>
            <IonItem
              className={`${isValid && 'ion-valid'} ${
                isValid === false && 'ion-invalid'
              } ${isTouched && 'ion-touched'}`}
            >
              <IonInput
                type="email"
                onIonInput={(event) => validate(event)}
                onIonBlur={() => markTouched()}
                placeholder="Enter email"
              />
              <IonNote slot="helper">Enter a valid email</IonNote>
              <IonNote slot="error">Invalid email</IonNote>
            </IonItem>

            <IonList>
              <IonItem>
                <IonSelect interface="popover" placeholder="Select fruit">
                  <IonSelectOption value="male">Male</IonSelectOption>
                  <IonSelectOption value="female">Female</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
            <IonItem className={`${isTouched && 'ion-touched'}`}>
              <IonInput
                type="password"
                onIonInput={(event) => validate(event)}
                onIonBlur={() => markTouched()}
                placeholder="Enter password"
              />
            </IonItem>
            <IonItem className={`${isTouched && 'ion-touched'}`}>
              <IonInput
                type="password"
                onIonInput={(event) => validate(event)}
                onIonBlur={() => markTouched()}
                placeholder="Confrim password"
              />
            </IonItem>
            <IonText>
              <a className="register-anchor">Forgot password?</a>
            </IonText>
            <IonButton color={'dark'}>Register Account</IonButton>
          </div>
          <IonText className="register-bottom-text" color="light">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="register-anchor">
                Login Now
              </Link>
            </p>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default LoginPage

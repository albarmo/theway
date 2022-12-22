import {
  IonButton,
  IonContent,
  IonImg,
  IonInput,
  IonItem,
  IonNote,
  IonPage,
  IonText,
  useIonViewWillEnter,
} from '@ionic/react'
import { useState } from 'react'
import './styles/Login.css'
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

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    history.push('/')
  }
  return (
    <IonPage>
      <IonContent fullscreen color="light">
        <div className="login-page">
          <IonImg
            className="logo"
            src="https://i.ibb.co/G9HMCG5/The-Way-1024-removebg-preview-2-1.png"
            alt="tw-logo"
          />
          <div className="login-form">
            <IonText>
              <h1 className="login-title">
                Welcome back! Glad to see you, Again!
              </h1>
            </IonText>
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
            <IonItem className={`${isTouched && 'ion-touched'}`}>
              <IonInput
                type="password"
                onIonInput={(event) => validate(event)}
                onIonBlur={() => markTouched()}
                placeholder="Enter password"
              />
            </IonItem>
            <IonText>
              <a className="login-anchor">Forgot password?</a>
            </IonText>
            <IonButton onClick={(e) => handleLogin(e as any)} color={'dark'}>
              Login
            </IonButton>
          </div>
          <IonText className="login-bottom-text" color="light">
            <p>
              Don’t have an account?
              <Link to="/register" className="login-anchor">
                Register Now
              </Link>
            </p>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default LoginPage

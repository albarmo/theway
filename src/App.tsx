import React from 'react'
import { Route } from 'react-router-dom'
import {
  IonApp,
  IonBadge,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { home, heart, flag, person, search } from 'ionicons/icons'
import Homepage from './pages/Homepage'
import Like from './pages/Like'
import PlanPage from './pages/Plan'
import Profile from './pages/Profile'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import LoginPage from './pages/Auth/Login'
import RegisterPage from './pages/Auth/Register'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/search">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/liked">
            <Like />
          </Route>
          <Route path="/plan">
            <PlanPage />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="home" href="/search">
            <IonIcon icon={search} />
          </IonTabButton>
          <IonTabButton tab="liked" href="/liked">
            <IonIcon icon={heart} />
          </IonTabButton>
          <IonTabButton tab="plan" href="/plan">
            <IonIcon icon={flag} />
            <IonBadge>6</IonBadge>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={person} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)

export default App

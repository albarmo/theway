import React from 'react'
import { Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { home, heart, flag, person, search } from 'ionicons/icons'

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

/* Pages */
import LoginPage from './pages/Auth/Login'
import RegisterPage from './pages/Auth/Register'
import SearchPage from './pages/Search/Search'
import ListPage from './pages/Common/List'
import Homepage from './pages/Home/Home'
import Like from './pages/Like/Like'
import PlanPage from './pages/Plan/index'
import Profile from './pages/Profile/Profile'
import DetailPage from './pages/Common/Detail'
import OnBoardingPage from './pages/OnBoarding/OnBoarding'
import PlanDetail from './pages/Plan/PlanDetail'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/onboard">
            <OnBoardingPage />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route path="/login" render={(props) => <LoginPage {...props} />} />
          <Route
            path="/register"
            render={(props) => <RegisterPage {...props} />}
          />
          <Route exact path="/liked">
            <Like />
          </Route>
          <Route path="/plan">
            <PlanPage />
          </Route>
          <Route path="/plan/:id">
            <PlanDetail />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/list/:category">
            <ListPage />
          </Route>
          <Route exact path="/detail/:category/:id">
            <DetailPage />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom" id="ion-tab-bar">
          <IonTabButton tab="home" href="/">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
          </IonTabButton>
          <IonTabButton tab="liked" href="/liked">
            <IonIcon icon={heart} />
          </IonTabButton>
          <IonTabButton tab="plan" href="/plan">
            <IonIcon icon={flag} />
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

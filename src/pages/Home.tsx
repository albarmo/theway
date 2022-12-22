import { IonContent, IonPage, useIonViewWillEnter } from '@ionic/react'
import ProfileCard from '../components/ProfileCard'
import MenuGrid from '../components/MenuGrid'
import ListCard from '../components/ListCard'
import { Slider } from '../components/Slider'
import { SliderCard } from '../components/SliderCard'
import Container from '../components/Container'
import './Home.css'
import { showTabs } from '../hooks/displayTabs'

const Homepage: React.FC = () => {
  useIonViewWillEnter(() => showTabs())
  return (
    <IonPage>
      <IonContent fullscreen color="light">
        <div className="header-home">
          <ProfileCard name="Albar Moerhamsa" />
        </div>
        <Slider hasTitle={false} />
        <MenuGrid />
        <SliderCard hasTitle={true} title="Top Items" />

        <Container title="My Plan">
          <ListCard
            hasTitle={false}
            title=""
            type="horizontal"
            isInfinite={false}
          />
        </Container>

        <Container title="Recomended Articles">
          <ListCard
            hasTitle={false}
            title=""
            type="vertical"
            isInfinite={false}
          />
        </Container>
      </IonContent>
    </IonPage>
  )
}

export default Homepage

import { IonContent, IonPage, useIonViewWillEnter } from '@ionic/react'
import ProfileCard from '../../components/Cards/ProfileCard'
import ListCard from '../../components/Common/ListCard'
import { Slider } from '../../components/Common/Slider'
import { SliderCard } from '../../components/Common/SliderCard'
import Container from '../../components/Common/Container'
import { showTabs } from '../../hooks/displayTabs'
import './styles/Home.css'

const Homepage: React.FC = () => {
  useIonViewWillEnter(() => showTabs())
  return (
    <IonPage>
      <IonContent fullscreen={true} color="light">
        <div className="header-home">
          <ProfileCard name="Albar Moerhamsa" />
        </div>
        <Slider hasTitle={false} />
        <SliderCard hasTitle={true} title="Top Items" />
        <Container title="My Plan">
          <ListCard
            hasTitle={false}
            title=""
            style="horizontal"
            isInfinite={false}
            type="plan"
          />
        </Container>
        <Container title="Recomended Articles">
          <ListCard
            hasTitle={false}
            title=""
            style="vertical"
            isInfinite={false}
            type="blog"
          />
        </Container>
      </IonContent>
    </IonPage>
  )
}

export default Homepage

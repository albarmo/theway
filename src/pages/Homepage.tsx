import { IonContent, IonInput, IonItem, IonLabel, IonPage } from '@ionic/react'
import ProfileCard from '../components/ProfileCard'
import MenuGrid from '../components/MenuGrid'
import ListCard from '../components/ListCard'
import './Homepage.css'
import SquareCard from '../components/SquareCard'
import { Slider } from '../components/Slider'

const Homepage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color="light">
        <div className="header-home">
          <ProfileCard name="Albar Moerhamsa" />
          {/* <input
            placeholder=" Cari targetmu..."
            className="header-search-input"
          /> */}
        </div>
        <IonItem fill="solid">
          <IonLabel position="floating">Cari targetmu...</IonLabel>
          <IonInput placeholder="Ketikan judul nya disini..."></IonInput>
        </IonItem>
        <Slider />
        <MenuGrid />
        <SquareCard name="asd" />
        <ListCard title="My Plan" type="horizontal" isInfinite={false} />
        <ListCard
          title="Recomended Articles"
          type="vertical"
          isInfinite={false}
        />
      </IonContent>
    </IonPage>
  )
}

export default Homepage

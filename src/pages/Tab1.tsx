import { IonContent, IonPage } from '@ionic/react'
import './Tab1.css'
import ProfileCard from '../components/ProfileCard'
import SquareCard from '../components/SquareCard'
import MenuGrid from '../components/MenuGrid'
import ListCard from '../components/ListCard'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color={'light'} slot="fixed" >
        <div className="header-page">
          <ProfileCard name="Albar Moerhamsa" />
          <SquareCard name="test" />
          <MenuGrid />
        </div>
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

export default Tab1

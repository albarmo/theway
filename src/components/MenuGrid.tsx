import { IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react'
import {
  bagAddOutline,
  cameraOutline,
  cubeOutline,
  locationOutline,
  storefrontOutline,
} from 'ionicons/icons'
import './MenuGrid.css'

const MenuGrid: React.FC = () => {
  return (
    <div className="menu-grid-container">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonIcon
              color="primary"
              size="large"
              src={storefrontOutline}
              className="menu-grid-item-icon"
            />
          </IonCol>
          <IonCol>
            <IonIcon size="large" color="primary" src={bagAddOutline} />
          </IonCol>
          <IonCol>
            <IonIcon size="large" color="primary" src={cubeOutline} />
          </IonCol>
          <IonCol>
            <IonIcon size="large" color="primary" src={locationOutline} />
          </IonCol>
          <IonCol>
            <IonIcon size="large" color="primary" src={cameraOutline} />
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}

export default MenuGrid

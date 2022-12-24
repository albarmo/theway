import { IonGrid, IonRow, IonCol, IonIcon, IonButton } from '@ionic/react'
import {
  bagAddOutline,
  cameraOutline,
  cubeOutline,
  locationOutline,
  mailOutline,
  storefrontOutline,
} from 'ionicons/icons'
import './MenuGrid.css'

const MenuGrid: React.FC = () => {
  const CATEGORIES = [
    { id: 1, title: 'Organizer', path: 'organizer', icon: bagAddOutline },
    { id: 2, title: 'Photo', path: 'photo', icon: cubeOutline },
    { id: 3, title: 'Venue', path: 'venue', icon: locationOutline },
    { id: 4, title: 'Cathering', path: 'cathering', icon: cameraOutline },
    { id: 5, title: 'Invitation', path: 'invitation', icon: mailOutline },
  ]

  return (
    <div className="menu-grid-container">
      <IonGrid>
        <IonRow>
          {CATEGORIES.map((item) => (
            <IonCol key={item.id} className="menu-box menu-grid-item-icon">
              <IonButton
                fill="clear"
                size="small"
                routerLink={`/list/${item.path}`}
              >
                <IonIcon
                  color="primary"
                  className="icon-grid"
                  src={item.icon}
                />
              </IonButton>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  )
}

export default MenuGrid

import {
  IonCheckbox,
  IonIcon,
  IonImg,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonText,
  IonThumbnail,
} from '@ionic/react'
import { archive, heart, trash } from 'ionicons/icons'
import './styles/CardPlan.css'

interface VerticalCardProps {
  item?: any
}

const PlanCard: React.FC<VerticalCardProps> = ({ item }) => {
  return (
    <IonItemSliding className="plan-card">
      <IonItemOptions side="start">
        <IonItemOption color="success">
          <IonIcon slot="start" icon={archive}></IonIcon>
        </IonItemOption>
      </IonItemOptions>
      <IonItem className="plan-card-item-content" lines="none">
        <IonThumbnail className="plan-card-image">
          <IonImg
            className="image-card"
            src="https://img.freepik.com/free-vector/traveling-concept-illustration_114360-2447.jpg?w=2000"
            alt="item-image"
          />
        </IonThumbnail>
        <div>
          <IonText>
            <h3>{item}</h3>
          </IonText>
          <IonText>
            <p>{item}</p>
          </IonText>
        </div>
        <IonCheckbox slot="end"></IonCheckbox>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption>
          <IonIcon slot="start" icon={heart}></IonIcon>
        </IonItemOption>
        <IonItemOption color="danger">
          <IonIcon slot="start" icon={trash}></IonIcon>
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}

export default PlanCard

//V.01
//  <IonCard className="plan-card">
//     <IonCardContent>
//       <IonItemOptions side="start">
//         <IonItemOption color="success" expandable>
//           Archive
//         </IonItemOption>
//       </IonItemOptions>
//       <IonText>
//         <h1>Card Title</h1>
//       </IonText>
//       <IonItem>
//         <IonText>
//           Here's a small text description for the card content.
//         </IonText>
//       </IonItem>
//       <IonItem lines="none" color={'light'} style={{ marginTop: '20px' }}>
//         <IonLabel>STATUS</IonLabel>
//         <IonCheckbox slot="end"></IonCheckbox>
//       </IonItem>
//     </IonCardContent>
//   </IonCard>

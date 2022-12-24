import {
  IonText,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
} from '@ionic/react'
import { useRef } from 'react'

const Package = () => {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null)
  return (
    <div>
      <IonText>
        <h3>Package</h3>
      </IonText>
      <IonAccordionGroup
        ref={accordionGroup}
        multiple={true}
        style={{ marginTop: '20px' }}
      >
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>Package 1</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Assembly Hall Menara Mandiri, Jl. Jenderal Sudirman No.Kav 54-55,
            RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah
            Khusus Ibukota Jakarta 12190
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonLabel>Package 2</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Assembly Hall Menara Mandiri, Jl. Jenderal Sudirman No.Kav 54-55,
            RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah
            Khusus Ibukota Jakarta 12190
          </div>
        </IonAccordion>
        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonLabel>Package 3</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Assembly Hall Menara Mandiri, Jl. Jenderal Sudirman No.Kav 54-55,
            RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah
            Khusus Ibukota Jakarta 12190Assembly Hall Menara Mandiri, Jl.
            Jenderal Sudirman No.Kav 54-55, RT.5/RW.3, Senayan, Kec. Kby. Baru,
            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  )
}

export default Package

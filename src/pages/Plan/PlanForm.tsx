import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

const PlanForm: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Loved</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="form-box">
          <IonText>
            <h5>Form Plan</h5>
          </IonText>
          <IonItem
            lines="none"
            className="input-box-item"
            counter={true}
            counterFormatter={(inputLength, maxLength) =>
              `${maxLength - inputLength} characters remaining`
            }
          >
            <IonLabel position="stacked">Title</IonLabel>
            <IonInput type="text" maxlength={20}></IonInput>
          </IonItem>
          <IonItem lines="none" className="input-box-item">
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea
              autoGrow={true}
              placeholder="Type item description"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ></IonTextarea>
          </IonItem>
          <IonItem lines="none" className="input-box-item">
            <IonLabel>ImageUrl</IonLabel>
            <IonInput type="url" placeholder="paste image url heree"></IonInput>
          </IonItem>
          <IonItem lines="none" className="input-box-item">
            <IonLabel>Price</IonLabel>
            <IonInput type="number" placeholder="000"></IonInput>
          </IonItem>
        </div>
        <div className="ion-padding">
          <IonButton className="ion-margin-top" expand="block">
            Create
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default PlanForm

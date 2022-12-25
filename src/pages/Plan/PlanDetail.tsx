import React, { useEffect, useRef, useState } from 'react'
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
} from '@ionic/react'
import ProgressBar from '../Common/Progressbar'
import { addOutline } from 'ionicons/icons'
import PlanCard from '../../components/Cards/CardPlan'
import './styles/PlanDetail.css'

const PlanDetail = () => {
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3'])
  React.useEffect(() => {
    const newItems = []
    for (let i = 1; i < 5; i++) {
      newItems.push(`Item ${items.length + i}`)
    }
    setItems([...items, ...newItems])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const modal = useRef<HTMLIonModalElement>(null)
  const page = useRef(null)

  const [
    presentingElement,
    setPresentingElement,
  ] = useState<HTMLElement | null>(null)
  const [present] = useIonActionSheet()

  useEffect(() => {
    setPresentingElement(page.current)
  }, [])

  function dismiss() {
    modal.current?.dismiss()
  }

  function canDismiss() {
    return new Promise<boolean>((resolve, reject) => {
      present({
        header: 'Are you sure?',
        buttons: [
          {
            text: 'Yes',
            role: 'confirm',
          },
          {
            text: 'No',
            role: 'cancel',
          },
        ],
        onWillDismiss: (ev) => {
          if (ev.detail.role === 'confirm') {
            resolve(true)
          } else {
            reject()
          }
        },
      })
    })
  }

  return (
    <IonPage>
      <IonHeader collapse="fade">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton fill="outline" routerLink="/form/plan">
              <IonIcon icon={addOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Plan Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          className="plan-image-header"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://i.ibb.co/wCMNWf4/c529cadc06d4f0fd5c80b384c8fbde42.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="plan-content">
          <IonText>
            <h2>My Number One Plan</h2>
          </IonText>
          <IonText>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </IonText>
          <ProgressBar />
          <div className="plan-content-items">
            <div className="plan-content-items-header">
              <IonText>
                <h5>The Road</h5>
              </IonText>
              <IonButton id="open-modal" className="icon-button">
                <IonIcon src={addOutline} />
              </IonButton>
            </div>
            <IonList style={{ marginTop: '20px' }}>
              {items.map((item, index) => (
                <PlanCard key={index} item={item} />
              ))}
            </IonList>
            <IonModal
              trigger="open-modal"
              initialBreakpoint={0.25}
              breakpoints={[0, 0.3, 0.4, 0.8]}
              handleBehavior="cycle"
              canDismiss={canDismiss}
              presentingElement={presentingElement!}
            >
              <IonContent className="ion-padding">
                <div className="ion-margin-top">
                  <IonLabel>Net Item</IonLabel>
                </div>
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
                  <IonInput
                    type="url"
                    placeholder="paste image url heree"
                  ></IonInput>
                </IonItem>
                <IonItem lines="none" className="input-box-item">
                  <IonLabel>Price</IonLabel>
                  <IonInput type="number" placeholder="000"></IonInput>
                </IonItem>
                <IonButton
                  className="ion-margin-top"
                  expand="block"
                  onClick={() => dismiss()}
                >
                  Create
                </IonButton>
              </IonContent>
            </IonModal>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default PlanDetail

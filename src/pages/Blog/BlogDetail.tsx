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
import './styles/BlogDetail.css'

const BlogDetail = () => {
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
            <IonBackButton defaultHref="/"></IonBackButton>
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
        <div className="blog-content ion-padding">
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
        </div>
      </IonContent>
    </IonPage>
  )
}

export default BlogDetail

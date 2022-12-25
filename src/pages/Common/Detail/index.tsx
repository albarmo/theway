import React from 'react'
import {
  IonBadge,
  IonButton,
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
} from '@ionic/react'
import {
  heartOutline,
  locate,
  information,
  locationOutline,
  walletOutline,
  arrowBack,
} from 'ionicons/icons'
import './styles/detail.css'
import Information from '../../../components/Sections/Information'
import Location from '../../../components/Sections/Location'
import Package from '../../../components/Sections/Package'

const SECTIONS = [
  { id: 0, Comp: <Information /> },
  { id: 1, Comp: <Location /> },
  { id: 3, Comp: <Package /> },
]

const DetailPage = () => {
  const [sectionId, setSectionId] = React.useState<number>(0)
  return (
    <IonPage>
      <IonContent fullscreen>
        <div>
          <div
            className="detail-box-image"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://i.ibb.co/yhY3jFj/b667-ho-00-p-1024x768.jpg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="detail-box-header">
              <IonButton
                className="detail-box-header-button"
                size="small"
                color="light"
                fill="outline"
                routerLink="/"
              >
                <IonIcon src={arrowBack} />
              </IonButton>
              <IonText>
                <h5>Detail</h5>
              </IonText>
              <IonButton
                className="detail-box-header-button"
                size="small"
                color="light"
                fill="outline"
              >
                <IonIcon src={heartOutline} />
              </IonButton>
            </div>
            <div className="detail-box-title">
              <div className="box-flex">
                <IonText>
                  <h4 className="box-flex-title">The Albarms Penthouse</h4>
                </IonText>
                <IonText color={'primary'}>
                  <h4 className="box-flex-price">Rp 10Mio</h4>
                </IonText>
              </div>
              <div className="box-flex">
                <div className="box-flex-location">
                  <IonIcon color="primary" src={locate} />
                  <p>Jakarta Selatan</p>
                </div>
                <IonBadge className="box-flex-badage" color={'primary'}>
                  400pax
                </IonBadge>
              </div>
            </div>
          </div>
          <div className="ion-padding">
            <IonSegment value="information" color={'medium'}>
              <IonSegmentButton
                value="information"
                layout="icon-start"
                onClick={() => setSectionId(0)}
              >
                <IonLabel>Information</IonLabel>
                <IonIcon icon={information}></IonIcon>
              </IonSegmentButton>
              <IonSegmentButton
                value="location"
                layout="icon-start"
                onClick={() => setSectionId(1)}
              >
                <IonLabel>Location</IonLabel>
                <IonIcon icon={locationOutline}></IonIcon>
              </IonSegmentButton>
              <IonSegmentButton
                value="package"
                layout="icon-start"
                onClick={() => setSectionId(2)}
              >
                <IonLabel>Package</IonLabel>
                <IonIcon icon={walletOutline}></IonIcon>
              </IonSegmentButton>
            </IonSegment>
            <div className="ion-padding">{SECTIONS[sectionId].Comp}</div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default DetailPage

import {
  IonText,
  IonSlides,
  IonSlide,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from '@ionic/react'
import {
  bagAddOutline,
  callOutline,
  chatboxOutline,
  cubeOutline,
  locationOutline,
  mailOutline,
} from 'ionicons/icons'

const CATEGORIES = [
  { id: 1, title: 'Organizer', path: 'organizer', icon: bagAddOutline },
  { id: 2, title: 'Photo', path: 'photo', icon: cubeOutline },
  { id: 3, title: 'Venue', path: 'venue', icon: locationOutline },
  { id: 5, title: 'Invitation', path: 'invitation', icon: mailOutline },
  { id: 1, title: 'Organizer', path: 'organizer', icon: bagAddOutline },
  { id: 2, title: 'Photo', path: 'photo', icon: cubeOutline },
  { id: 3, title: 'Venue', path: 'venue', icon: locationOutline },
  { id: 5, title: 'Invitation', path: 'invitation', icon: mailOutline },
]

const slideOpts = {
  initialSlide: 0,
  slidesPerView: 3.3,
  speed: 400,
}

const Information = () => {
  return (
    <div>
      <IonText>
        <h3>A Best Place</h3>
      </IonText>
      <IonText>
        <p>
          For some people, financial struggles are due to not bringing in enough
          money. But for most of us, the problem comes from spending more money
          than we make.
        </p>
      </IonText>
      <div style={{ marginTop: '30px' }}>
        <IonText>
          <h4 className="sub-title">Preview</h4>
          <IonSlides pager={false} options={slideOpts} className="slider">
            {[1, 2, 3, 4].map((item, index) => (
              <IonSlide key={index} className="slide-item">
                <img
                  alt="Silhouette of mountains"
                  src="https://www.hotelbluemb.com/images/made/uploads/rooms-home-square_450_459_90_c1.jpg"
                />
              </IonSlide>
            ))}
          </IonSlides>
        </IonText>
      </div>
      <div>
        <IonText>
          <h4 className="sub-title">Facilities</h4>
        </IonText>
        <IonGrid>
          <IonRow>
            {CATEGORIES.map((item) => (
              <IonCol key={item.id} className="facilities-box">
                <IonButton fill="clear" size="small">
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
      <div>
        <IonText>
          <h4 className="sub-title">Contacts</h4>
        </IonText>
        <IonText>
          <h3>0812 8070 9980</h3>
        </IonText>
        <IonText color={'medium'}>
          <p>
            Assembly Hall Menara Mandiri, Jl. Jenderal Sudirman No.Kav 54-55,
            RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah
            Khusus Ibukota Jakarta 12190
          </p>
        </IonText>
        <IonButton>
          <IonIcon slot="start" icon={callOutline}></IonIcon>
          Call Us
        </IonButton>
        <IonButton>
          <IonIcon slot="start" icon={chatboxOutline}></IonIcon>
          Chat With Us
        </IonButton>
      </div>
    </div>
  )
}
export default Information

import { IonText } from '@ionic/react'
import GMaps from '../Geolocation/GMaps'

const Location = () => {
  return (
    <div>
      <IonText>
        <h3>Address</h3>
      </IonText>
      <IonText>
        <p>
          Assembly Hall Menara Mandiri, Jl. Jenderal Sudirman No.Kav 54-55,
          RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah
          Khusus Ibukota Jakarta 12190
        </p>
      </IonText>
      <GMaps />
    </div>
  )
}
export default Location

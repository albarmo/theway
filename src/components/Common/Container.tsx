import { IonButton } from '@ionic/react'
import './Container.css'

type ContainerProps = {
  title?: string
  children?: React.ReactNode
  hasTitle?: boolean
}
const Container: React.FC<ContainerProps> = ({
  title,
  children,
  hasTitle = true,
}: ContainerProps) => (
  <div className="container-box">
    <div className="container-inner">
      {hasTitle && (
        <div className="container-header">
          <h4 className="container-title">{title}</h4>
          <IonButton className="container-header-see-all" size="small">
            See All
          </IonButton>
        </div>
      )}
      {hasTitle && <hr className="divider" />}
      <div className="container-content">{children}</div>
    </div>
  </div>
)

export default Container

import './ExploreContainer.css'

interface ContainerProps {
  name?: string
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container-box">
      <strong>{name}</strong>
    </div>
  )
}

export default ExploreContainer

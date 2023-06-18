import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {

  const { name, livePreviewUrl, sourceCodeUrl, description, stack } = project

  return (
    <div className='project'>
      <h3>{name}</h3>

      <p className='project__description'>{description}</p>
      {stack.data.length > 0 && (
        <ul className='project__stack'>
          {stack.data.map((item) => (
            <li key={item.id} className='project__stack-item'>
              {item.attributes.name}
            </li>
          ))}
        </ul>
      )}

      {sourceCodeUrl && (
        <a
          href={sourceCodeUrl}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {livePreviewUrl && (
        <a
          href={livePreviewUrl}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>)
}

export default ProjectContainer

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Typewriter from 'typewriter-effect';
import useFetch from '../../hooks/useFetch';
import Skeleton from '../Skeleton/Skeleton';
import { about } from '../../portfolio'
import './About.css'

const VOWELS = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

const About = () => {
  const { name, roles, description, resume, social } = about

  const { REACT_APP_dataSourceURL: dataSourceURL } = process.env
  const { data: aboutData, error, loading } = useFetch(`${dataSourceURL}/api/about?populate=*`)

  
  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {roles && <h2 className='about__role'><Typewriter options={{ strings: roles.map(role => `A${VOWELS.includes(role.charAt(0))?'n':''} ${role}.`), autoStart: true, loop: true, }}/></h2>}
      
      {
        loading === true
        ? <><Skeleton height='1rem' width='50%'/><Skeleton height='1rem' width='70%'/><Skeleton height='1rem' width='55%'/></>
        : <p className='about__desc'>{description && description}</p>
      }

      <div className='about__contact center'>
        {resume && (
          <a href={resume} rel="noreferrer" target='_blank'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About

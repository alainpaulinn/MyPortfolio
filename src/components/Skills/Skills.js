import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import useFetch from '../../hooks/useFetch'
import Skeleton from '../Skeleton/Skeleton'

import './Skills.css'

const Skills = () => {
  const { REACT_APP_dataSourceURL: dataSourceURL } = process.env
  const { data: skillsData, error, loading } = useFetch(`${dataSourceURL}/api/skills`)
  console.log('skillsData', skillsData)

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {
          loading === true
            ? <> <Skeleton height='1rem' width='20%' /><Skeleton height='1rem' width='20%' /><Skeleton height='1rem' width='20%' /><Skeleton height='1rem' width='20%' /><Skeleton height='1rem' width='20%' /></>
            : skillsData.data.map(skill => skill.attributes.name).map(skill => <li key={uniqid()} className='skills__list-item btn btn--plain'>{skill}</li> )
        }
      </ul>
    </section>
  )
}

export default Skills

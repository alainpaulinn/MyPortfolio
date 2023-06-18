import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import ProjectContainerSkeleton from '../ProjectContainerSkeleton/ProjectContainerSkeleton'
import Skeleton from '../Skeleton/Skeleton'
import './Projects.css'
import useFetch from '../../hooks/useFetch'

const Projects = () => {

  const { REACT_APP_dataSourceURL: dataSourceURL } = process.env
  const { data: projectsData, error, loading } = useFetch(`${dataSourceURL}/api/projects?populate=*`)

  console.log("projectData", projectsData)
  console.log("error", error)
  console.log("loading", loading)

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {loading === true
          ? <>
            <ProjectContainerSkeleton/>
          </>
          : projectsData.data.map((project) => (
            <ProjectContainerSkeleton />
            // <ProjectContainer key={uniqid()} project={project.attributes} />
          ))}
      </div>
    </section>
  )
}

export default Projects

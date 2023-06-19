import ProjectContainer from '../ProjectContainer/ProjectContainer'
import ProjectContainerSkeleton from '../ProjectContainerSkeleton/ProjectContainerSkeleton'
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
            <ProjectContainerSkeleton />
            <ProjectContainerSkeleton />
            <ProjectContainerSkeleton />
          </>
          : projectsData.data.map((project) => (
            <ProjectContainer key={project.id} project={project.attributes} />
          ))}
      </div>
    </section>
  )
}

export default Projects

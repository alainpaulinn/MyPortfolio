import React from 'react'
// import Skeleton from 'react-loading-skeleton'
import Skeleton from '../Skeleton/Skeleton'

function ProjectContainerSkeleton() {
    return (
        <div className='project'>
            <h3><Skeleton height='2rem' width='75%' /></h3>

            <div className='project__description'><Skeleton height='1rem' width='100%' /></div>
            <div className='project__description'><Skeleton height='1rem' width='100%' /></div>

            <ul className='project__stack'>
                <Skeleton height='1.5rem' width='25%' />
                <Skeleton height='1.5rem' width='25%'/>
            </ul>
        </div>)
}

export default ProjectContainerSkeleton
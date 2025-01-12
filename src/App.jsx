import Header from './components/Header'
import Project from "./components/Project"
import data from './data'

export default function App() {

    const projectElements = data.map((project) => {
        return (
            <Project 
                key = {project.key}
                img = {project.img}
                title = {project.title}
                description = {project.description}
                detail = {project.detail}
                liveSite = {project.liveSite}
                gitRepo = {project.gitRepo}
            />
        )
    })
    
    return(
        <>
        <Header />
        <main className='container'>
            {projectElements}
        </main>
        </>
    )
}


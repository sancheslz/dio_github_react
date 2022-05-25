import Project from "../Project"
import './style.css'

interface repo {
  updated_at: string
}

interface iProjectsProps {
  repos: Array<repo>
}

export default function Projects({ repos }: iProjectsProps) {
  return (
    <div>
    <h1>{
    repos.length > 0 
    ? `${repos.length} Projects`
    : "Search or Select a Profile to see Projects"
    }</h1>
    <div className="projects">
    {
      repos.length > 0 && repos.sort((a, b) => {
        return b.updated_at.localeCompare(a.updated_at)
      }).map((repo: any) => {
        return <Project key={repo.id} data={repo}></Project>
      })
    }
    </div>
    </div>
  )
}
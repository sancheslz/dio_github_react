import { delay } from '../../helpers/duration'
import './style.css'

export default function Project({ data }: any) {
  const lastCommit = delay(data.updated_at)

  return (
    <div className="project">
      <div className="project-up">
        <div className="project-name">{data.name}</div>
        <div className="project-description">{data.description}</div>
        <br />
        <a className="project-url" href={data.html_url}>See repository</a>
      </div>
      <div className="project-down">
        <hr className="project-divisor" />
        <div className="project-detail">
          <div className="project-language">{data.language}</div>
          <div className="project-last-commit">{lastCommit}</div>
        </div>
      </div>
    </div>
  )
}
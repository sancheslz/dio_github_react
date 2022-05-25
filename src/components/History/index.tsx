import { EventHandler, ReactEventHandler } from 'react'
import iUser from '../../interfaces/userInterface'
import './style.css'

interface HistoryProps {
  history: iUser[],
  changeUser: (username: string) => void
}

export default function History({ history, changeUser }: HistoryProps) {

  const selectUser = (event: any) => {
   changeUser(event.target.innerText)
  }

  return (
    <div className="history">
      <h2 className='history-title'>Search's History</h2>
      <ul className='history-list'>
        {
          history.map((item: iUser, index: number) => {
            return <li key={index} onClick={selectUser}>{item.username}</li>
          })         
        }
      </ul>
    </div>
  )
}
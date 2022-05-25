import { useState, useEffect } from 'react'
import iUser, { iRepo } from './interfaces/userInterface'
import { 
  SearchBar,
  Profile,
  Projects,
  History,
} from './components'
import './App.css'
import { getUserRepos } from './services/reposService'

function App() {
  const [user, setUser] = useState({})
  const [searchHistory, setSearchHistory] = useState<iUser[]>([])
  const [repos, setRepos] = useState<Array<iRepo>>([])

  useEffect(() => {
    const history = sessionStorage.getItem('searchHistory')
    if (history) {
      setSearchHistory(JSON.parse(history))
    }
  }, [])

  useEffect(() => {
    (async () => {
      const selectedUser = user as iUser
      const response = await getUserRepos(selectedUser.username)
      setRepos(response)
    })()
  }, [user])

  const findUser = (username: iUser) => {
    
    const history = [
      ...searchHistory.filter(user => user.username !== username.username),
      username
    ].sort((a: iUser, b: iUser): number => {
      return a.username.toLowerCase().localeCompare(b.username.toLocaleLowerCase())
    })
    
    setSearchHistory(history)
    sessionStorage.setItem('searchHistory', JSON.stringify(history))
    setUser(username)
  }

  const changeUser = (username: string) => {
    const user = searchHistory.find(user => user.username === username) as iUser
    setUser(user)
  }
  
  return (
    <div className='app'>
      <div className="sidebar">
        <History history={searchHistory} changeUser={changeUser}></History>
      </div>
      <div className="container">
        <SearchBar findUser={findUser}></SearchBar>
        <Profile user={user}></Profile>
        <Projects repos={repos}></Projects>
      </div>
    </div>
  )
}

export default App

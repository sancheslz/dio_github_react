import { useEffect, useRef, useState } from 'react'
import iUser, { notFound } from '../../interfaces/userInterface';
import { getUserData } from '../../services/userService';
import './style.css'

interface iSearchBarProps {
  findUser: (username: iUser) => void
}

export default function SearchBar ({ findUser }: iSearchBarProps) {
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), [])

  const validateUsername = (username: string) => {
    if (username.length === 0) {
      setError('Username is required');
      return false;
    }
    setError('');
    return true;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = inputRef.current?.value!;
    const valid = validateUsername(username)
    if (valid) {
      const response = await getUserData(username)
      if(Object.keys(response).includes('message')) {
        const { message } = response as notFound
        setError(message)
      } else {
        inputRef.current!.value = ''
        findUser(response as iUser)
        inputRef.current?.focus()
      }
    }
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className="search-content">
        <input 
          ref={inputRef}
          className='search-input'
          type="search"
          name="username" 
          id="username" 
          tabIndex={1}
          placeholder="Enter a GitHub username"
        />
        <input 
          className='search-button'
          type="submit" 
          value="Search"
          tabIndex={2}
        />
      </div>
      <div className="error-message">{error}</div>
    </form>
  )
  
}

import iUser from '../../interfaces/userInterface'
import './style.css'

interface iProfileProps {
  user: iUser | {}
}

export default function Profile({ user }: iProfileProps) {
  const userInfo = user as iUser
  return (
    <div>
    {
        Object.keys(userInfo).includes('username') && 
        <div className="profile">
          <div className="profile-picture">
            <img src={userInfo.avatar} />
          </div>
          <div className="profile-content">
            <div className="profile-name">{userInfo.name}</div>
            <div className="profile-bio">{userInfo.bio}</div>
            <a className="profile-url" href={userInfo.htmlUrl}>See profile</a>
            <hr className='profile-divisor'/>
            <div className="profile-badges">
              <div className="following">{userInfo.following} following</div>
              <div className="followers">{userInfo.followers} followers</div>
              <div className="profile-updated-at">{userInfo.updatedAt}</div>
            </div>
          </div>
        </div>
    }
    </div>
  )
}

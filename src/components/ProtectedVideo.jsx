
import { useAuth } from '../context/AuthContext'
import LoginModal from './LoginModal'

export default function ProtectedVideo({ src }) {
  const { user } = useAuth()
  if (!user) return <LoginModal />

  return (
    <video controls autoPlay className="w-full">
      <source src={src} />
    </video>
  )
}

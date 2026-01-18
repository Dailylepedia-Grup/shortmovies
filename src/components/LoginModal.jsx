
import { useAuth } from '../context/AuthContext'

export default function LoginModal() {
  const { login } = useAuth()
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
      <button
        onClick={() => login('user@mail.com')}
        className="bg-red-600 px-6 py-3 rounded text-white"
      >
        Login untuk Menonton
      </button>
    </div>
  )
}

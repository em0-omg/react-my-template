import { useSelector } from '@/store'

const User = () => {
  const user = useSelector((state) => state.user)

  return <p>{user.name}</p>
}

export default User

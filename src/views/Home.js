import { useContext } from 'react'
import Image from '../components/Imagen'
import { ContextSignin } from '../context/sign-in'
import { useHistory } from 'react-router-dom'

export const Home = () => {
  const { isAuth } = useContext(ContextSignin)
  const history = useHistory()

  if(!isAuth()) {
    history.push('login')
  }

  return (
    <>
      <h1>Home</h1>
      <Image />
    </>
  )
}
export default  Home
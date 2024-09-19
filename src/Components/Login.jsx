import React, { useRef } from 'react'
import { login, logout } from '../redux/userSlice'

import {useDispatch} from 'react-redux'

const Login = () => {
    const dispatch=useDispatch()
    const usename=useRef(null)
const handlechange=(e)=>{
    e.preventDefault()
    dispatch(login({
        name:usename.current.value
    }))
}

  return (
    <>

  <form action="" onSubmit={handlechange}>
    <input type="text" ref={usename}/>
    {/* <input type="mail"  /> */}
    <button type="button">Loign</button>
    </form>
    <button type="button" onClick={()=>dispatch(logout())} > Logout</button>
    </>
  )
}

export default Login
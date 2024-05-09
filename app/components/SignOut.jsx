import React from 'react'
import { doSignOut } from '../actions'

const SignOut = () => {
  return (
    <form action={doSignOut}>
        <button className="bg-orange-400 p-1 rounded-md m-1" type='submit'>SignOut</button>
    </form>
  )
}

export default SignOut
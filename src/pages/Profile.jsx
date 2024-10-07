import React from 'react'
import ProfileContent from '../components/content/ProfileContent'
import SideContent from '../components/content/SideContent'

export default function Profile() {
  return (
    <div className='bg-gray-900 flex text-white justify-center h-screen'>
      <ProfileContent></ProfileContent>
      <SideContent></SideContent>
    </div>
  )
}

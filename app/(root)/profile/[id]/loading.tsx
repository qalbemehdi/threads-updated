import React from 'react'
import Loading from '../../loading'
import PostSkeleton from '@/components/skeleton/PostSkeleton'
import ProfileSkeleton from '@/components/skeleton/ProfileSkeleton'

const loading = () => {
  return (
   <Loading title=''>
       <ProfileSkeleton/>
       <PostSkeleton/>
   </Loading>
  )
}

export default loading
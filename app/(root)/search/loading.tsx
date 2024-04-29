import React from 'react'
import Loading from '../loading'
import SearchSkeleton from '@/components/skeleton/SearchSkeleton'

const loading = () => {
  return (
    <Loading title='Search'>
      <SearchSkeleton/>
    </Loading> 
      
  )
}

export default loading
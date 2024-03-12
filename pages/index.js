import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/mvp');
  }, [])
  return (
    <div>

    </div>
  )
}

export default Index

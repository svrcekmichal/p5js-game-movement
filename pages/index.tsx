import dynamic from 'next/dynamic'

export default dynamic(() => import('../src/sketch'), {
  ssr: false,
})

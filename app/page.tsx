import dynamic from 'next/dynamic'
const MapWrapper = dynamic(() => import('@/components/map/MapWrapper'), {
  ssr: false,
})

const Home = () => {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <MapWrapper />
    </main>
  )
}

export default Home

import SlideShow from '../components/SlideShow'
import InfluencerArea from '../components/InfluencerArea'
import Ads from '../components/Ads'

export default function StorePage() {
  return (
    <>
      <div>
        <InfluencerArea />
        <SlideShow />
        <Ads />
        <h1 style={{ height: '500px' }}>
          home page
        </h1>
      </div>
    </>
  )
}

import Banner from '../components/banner.jsx'
import Image from '../assets/bannerHome.jpg'
import Card from '../components/card'

function Home() {
  return (
    <div>
      <Banner>
        <img src={Image} alt="imageAccueil" className="bannerImg" />
        <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
      </Banner>
      <Card />
    </div>
  )
}

export default Home

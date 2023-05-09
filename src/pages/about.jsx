import Banner from '../components/banner.jsx'
import Image from '../assets/bannerAbout.jpg'
import Collapse from '../components/collapse.jsx'
import collapse from '../data/about.json'
import '../styles/collapse.css'

function About() {
  return (
    <div>
      <Banner>
        <img src={Image} alt="imageAbout" className="bannerImg" />
      </Banner>
      {collapse.map((collapse) => (
        <div className="collapse" key={collapse.id}>
          <Collapse title={collapse.title} text={<p>{collapse.text}</p>} />
        </div>
      ))}
    </div>
  )
}

export default About

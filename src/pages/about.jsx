import Banner from '../components/banner.jsx'
import Image from '../assets/bannerAbout.jpg'
import Collapse from '../components/collapse.jsx'
import collapse from '../data/about.json'
import '../styles/collapseAbout.css'

function About() {
  return (
    <div>
      <Banner>
        <img src={Image} alt="imageAbout" className="bannerImg" />
      </Banner>
      {collapse.map((collapse) => (
        <Collapse
          title={collapse.title}
          text={<p>{collapse.text}</p>}
          key={collapse.id}
        />
      ))}
    </div>
  )
}

export default About

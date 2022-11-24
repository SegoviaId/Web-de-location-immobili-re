import '../styles/Home.css';
import RentList from '../components/RentList';
import Banner from '../components/Banner';
import banner from '../assets/banner_home.png'
import imgmob from '../assets/banner_home_mob.png'


function Home() {
  return (
    <>
    <div className="banner_home">
      <Banner src={banner} alt="Paysage océanique/forestière" srcm={imgmob} text="Chez vous, partout et ailleurs" />
    </div>
    <RentList/>
    </>
  );
}

export default Home;
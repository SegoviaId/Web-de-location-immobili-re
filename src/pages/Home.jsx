import '../styles/Home.css';
import RentList from '../components/RentList';
import Banner from '../components/Banner';



function Home() {
  return (
    <>
    <div className="banner_home">
      <Banner/>
    </div>
      <RentList/>
    </>
  );
}

export default Home;
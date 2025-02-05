import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/header"
import SpecialityMenu from "../components/SpecialityMenu"
import TopDoctor from "../components/TopDoctor"


const Home = () => {
    return (
        <div>
            <Header />
            <SpecialityMenu />
            <TopDoctor />
            <Banner />

        </div>
    )
}

export default Home
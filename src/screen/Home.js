import React from 'react'
import Posts from '../components/posts/Posts'
import Maps from '../components/Maps'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="home">      
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave"><path fill="#fff" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,202.7C640,181,800,107,960,96C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                <div className="home__banner">
                   <div className="banner__left">
                       <h1>Ayo Berwisata</h1>
                       <p>Jelajahi Keindahan di Kabupaten Tolitoli yang berada di Sulawesi Tengah</p>
                   </div>
                   <div className="banner__right">
                       <img src="img/banner.png" alt="baner" />
                   </div>
                </div>
            </div>
            <div className="map">
                <div className="map__title"><h1>Lokasi Wisata Tolitoli</h1></div>
                <Maps />
            </div>
            <div className="favorite">
                <h1 className="favorite__title">Wisata Favorit</h1>
                <p className="favorite__subtitle">3 Wisata terfavorit di Kabupaten Tolitoli 2021</p>
                <div className="favorite__wisata">
                    <Posts />
                </div>
            </div>



        </div>
    )
}

export default Home

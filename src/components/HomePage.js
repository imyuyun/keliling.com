import {Carousel} from 'react-bootstrap'
import gambar1 from './../Assets/awal.jpg'
import gambar2 from './../Assets/candi.jpg'
import gambar3 from './../Assets/kebumen.jpg'

const HomePage = ()=>{
    return(
      <div>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"

          //   masukkan var gambar1 ke src
            src={gambar1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>LIHAT SELENGKAPNYA</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gambar2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>LIHAT SELENGKAPNYA</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gambar3}
            alt="Kebumen"
          />

          <Carousel.Caption>
            <h3>LIHAT SELENGKAPNYA</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

        <hr />
      </div>
    )
}

export default HomePage;
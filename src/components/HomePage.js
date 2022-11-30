import { Carousel, Button } from "react-bootstrap";
import gambar1 from "./../Assets/awal.jpg";
import gambar2 from "./../Assets/candi.jpg";
import gambar3 from "./../Assets/kebumen.jpg";

const HomePage = () => {
  return (
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
            <Button variant="primary">Lihat Selengkapnya</Button>
            <h1 className="row my-3 justify-content-center">BROMO</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gambar2} alt="Second slide" />

          <Carousel.Caption>
            <Button variant="primary">Lihat Selengkapnya</Button>
            <h1 className="row my-3 justify-content-center">BALI</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gambar3} alt="Kebumen" />

          <Carousel.Caption>
            <Button variant="primary">Lihat Selengkapnya</Button>
            <h1 className="row my-3 justify-content-center">Pokoknya Indonesia</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <hr />
    </div>
  );
};

export default HomePage;

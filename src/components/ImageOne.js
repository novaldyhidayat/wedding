import { Parallax } from 'react-parallax';
import home from '../img/3.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={home} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content'>
            <span className="img-txt"><small>Yang Terhormat,</small><br />Novaldy Hidayat</span>
        </div>
    </Parallax>
);

export default ImageOne
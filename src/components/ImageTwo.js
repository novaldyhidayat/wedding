import { Parallax } from 'react-parallax';
import img1 from '../img/1.jpg'

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={img1} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content'>
            <span className="img-txt">Novaldy & Vivi</span>
        </div>
    </Parallax>
);

export default ImageTwo
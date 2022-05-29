import { Parallax } from 'react-parallax';
import img2 from '../img/2.jpg'
const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={img2} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
);

export default ImageThree
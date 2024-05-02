
import { useEffect ,useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Additioal = () => {
    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", border: "1px solid black",background: "black",  borderRadius: "50%"  }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        sliderToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
    };

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data here
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <Slider {...settings}>
                {Products.slice(620,630).map(product => (
                    <div key={product.id} className='m-5 p-4 bg-white rounded-2xl text-center block transform hover:scale-105 
                    hover:shadow-2xl transition delay-50 duration-300 ease-in-out  mx-10 h-96 w-64'>
                        <img className='w-30 h-40 border-white mx-auto' src={`https://${product.api_featured_image}`} alt="" />
                        <div className='m-4'>
                            <h2 className='font-bold'>{product.name}</h2>
                            <p className='text-orange-700'>{product.brand}</p>
                            <p>${product.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Additioal;

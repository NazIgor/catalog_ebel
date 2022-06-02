import Slider from "react-slick";

// import "/OpenServer/domains/"; 
// import "./courusel-theme.css";
import "./same.scss";

const Courusel=({data})=>{
    const element=()=>{
        const elem=data.map((item,i)=>{
            return (
                <img src={item} alt="img-courusel" key={`imgs${i}`}/>
            )
        })
        return elem;
    }
    const settings = {
        dots: true,

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        
            <div className="courusel">
                <Slider {...settings}>
                {/* <div className="courusel-left"> &lt;</div> */}
                {element()}
                {/* <div className="courusel-right"> &gt;</div> */}
                </Slider>
            </div>

    )

}

export default Courusel;
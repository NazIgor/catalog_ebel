import Courusel from "../../courusel/courusel";
import img1 from './temp_imgs/temp.jpg';
import delPic from '/OpenServer/domains/catalog/src/images/icons/delete.png';
import editPic from '/OpenServer/domains/catalog/src/images/icons/edit.png';


const AdminProductsList=({lang, data})=>{
    // const imgs=(data)=>{
    //     const res=data.map(elem=>{
    //         return (
    //             <>
    //                 <img src={img1} alt={elem} className="products_img" />
    //             </>
    //         )
    //     })
    //     return res;
    // }
    const content=()=>{
        const res=data.map((item,i)=>{
            return (
                
                <li key={`prod${item.id}-${i}`}>
                    <div className="item" data-proid={item.id} key={`prod${item.id}-${i}`}>
                        <div className="description">
                            <h3>{item.name[lang]}</h3>
                            <div>{item.descr[lang]}</div>
                            <div><strong>$ {(Math.round(item.price*100)/100).toLocaleString('ru-RU')}</strong></div><br></br>
                        </div>
                        <div className="imgs">
                            {/* {imgs(item.imgs)} */}
                            <Courusel data={[img1,img1,img1]}/>
                        </div>
                        <div className="pics">
                            <img src={editPic} alt="edit" />
                            <img src={delPic} alt="delete" />
                        </div>
                    </div>
                </li>
                
            )
        })
        return res;
    }
    return(
        <>
           {content()} 
        </>
    )
}
export default AdminProductsList;
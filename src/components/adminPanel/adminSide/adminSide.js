
// import { Spinner } from '../../spinner/spinner';

import './adminSide.scss';

const AdminSide=({uiData, loading, lang, contentChange})=>{
    const loadBtns=()=>{
        return(
            <ul onClick={contentChange}>
                <li className="admin-side_item" data-target="start">
                    <div className="admin-side_item_btn">{uiData.btn_main[lang]}</div>
                </li>
                <li className="admin-side_item" data-target="catalog">
                    <div className="admin-side_item_btn">{uiData.btn_catalog[lang]}</div>
                </li>
                <li className="admin-side_item" data-target="mebel" >
                    <div className="admin-side_item_btn">{uiData.btn_mebel[lang]}</div>
                </li>
                <li className="admin-side_item" data-target="banner">
                    <div className="admin-side_item_btn">{uiData.btn_banner[lang]}</div>
                </li>
                <li className="admin-side_item" data-target="collection">
                    <div className="admin-side_item_btn">{uiData.btn_set[lang]}</div>
                </li>
                
                <li className="admin-side_item" data-target="ui"  >
                    <div className="admin-side_item_btn" 
                          data-target="ui"
                          >{uiData.btn_addUI[lang]}</div>
                </li>
            </ul>
        )
    }
    const content=!loading && uiData? loadBtns():null;
    return(
        <div className="admin-side">
            {/* {loading?<Spinner/>:null} */}
            {content}
        </div>
    )
}

export default AdminSide;
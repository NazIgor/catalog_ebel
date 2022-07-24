
// import { Spinner } from '../../spinner/spinner';

import './adminSide.scss';

const AdminSide=({uiData, loading, lang, contentChange})=>{
    console.log(lang, uiData);
    const loadBtns=()=>{
        return(
            <ul onClick={contentChange}>
                <li className="admin-side_item" data-target="start">
                    <div className="admin-side_item_btn" data-target="start">{uiData.btn_main[lang.name]}</div>
                </li>
                <li className="admin-side_item" data-target="catalog">
                    <div className="admin-side_item_btn" data-target="catalog">{uiData.btn_catalog[lang.name]}</div>
                </li>
                <li className="admin-side_item" data-target="mebel" >
                    <div className="admin-side_item_btn" data-target="mebel">{uiData.btn_mebel[lang.name]}</div>
                </li>
                <li className="admin-side_item" data-target="banner">
                    <div className="admin-side_item_btn" data-target="banner">{uiData.btn_banner[lang.name]}</div>
                </li>
                <li className="admin-side_item" data-target="collection">
                    <div className="admin-side_item_btn" data-target="collection">{uiData.btn_set[lang.name]}</div>
                </li>
                
                <li className="admin-side_item" data-target="ui"  >
                    <div className="admin-side_item_btn" 
                          data-target="ui"
                          >{uiData.btn_addUI[lang.name]}</div>
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
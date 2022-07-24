import { useState } from "react";
import SubsCat from "./subCats";



const CatalogList=({data})=>{
    const [check, setCheck]=useState(false);
    
    const checks=()=>{
        setCheck(check=>!check);
        
    }
    const subs=!data.items? null : data.items.map((item,i)=>{
        return <SubsCat data={item} check={check} key={`subs_${i}`}/>
    })
    return(
            <div className="admin_catalogs">
                <label><input type="checkbox" 
                              checked={check} 
                              onChange={checks}
                              catid={data.id}
                              who='cats'/>
                                {data.name} 
                </label>
                <ul className="items admin_add_catalogs">
                    {subs}
                </ul>
            </div>
    )
}

export default CatalogList;
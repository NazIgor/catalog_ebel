

const SubsCat=({data, check})=>{
    
    
    return(
        <li key={`subs_${data.id}`}>
            <div className="cats_sub_item">
                <label><input type="checkbox" disabled={!check} subcatsid={data.id}/> {data.name}</label>
            </div>
        </li>
    )
}

export default SubsCat;
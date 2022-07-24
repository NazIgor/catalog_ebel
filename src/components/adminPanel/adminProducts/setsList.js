
const SetsList=({data})=>{
    //console.log(data);

    const list=!data?null:data.map(item=>{
        //console.log(item);
        return(
            <li key={`sets_${item.id}`}>
                <label><input type="checkbox" style={{marginRight:"5px", width:"auto"}} setid={item.id}/> {item.name}</label>
            </li>
            
        )
    })
    return(
        <div className="admin_add_sets_list">
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default SetsList;
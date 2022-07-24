import './langPanel.scss';

const LangPanel=({lang, langs,changeLang})=>{
    console.log('from lang panel: ', langs);
    const createLangs=()=>{        
           const res= langs.map(item=>{
                const txt=item.name,
                      classItem="lang-panel_item "+txt;
                return(
                    <div className={classItem}
                         key={`lang_${item.id}`}
                         data-lang={item.id}
                         onClick={e=>changeLang(e.target.getAttribute('data-lang'))}>
                        {item.name.toUpperCase()}
                    </div>
                )
            })  
            return res;           
    }
    return(
        <div className="lang-panel">
            {createLangs()}
        </div>
    )

}

export default LangPanel;
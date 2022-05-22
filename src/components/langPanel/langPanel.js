import './langPanel.scss';

const LangPanel=({lang, langs,changeLang})=>{

    const createLangs=()=>{        
           const res= langs.map(item=>{
                const txt=item,
                      classItem="lang-panel_item "+txt;
                return(
                    <div className={classItem}
                         key={item}
                         data-lang={item}
                         onClick={e=>changeLang(e.target.getAttribute('data-lang'))}>
                        {item.toUpperCase()}
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
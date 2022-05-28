description controllers

#addUI
    {addUI: {name: "str.name", ru: "str.value", en: "str.value", kz: "str.value"}};

#getlocale
    {getlocale: {}};

#setLanguage
    {setLanguage: {language: "ru || en || kz"}}

#synchronize
    {synchronize: {action: "load || synch"}};

#catalog read write
    {catalog: {action: "read || write", (не обязательный параметр)id: "int.id"}};
#catalog delete
    {catalog: {action: "del", id = "int.id", target = "cat||subCat"};

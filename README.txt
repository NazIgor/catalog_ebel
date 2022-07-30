description controllers

#addUI
    {addUI: { name: "str.name",
             lengs: [
                'id': 1,
                'value': 'str.value'
             }};

#getUI
    {getUI: {}};

#setLanguage
    {setLanguage: {language: "1 || 2 || 3 ..."}}

#synchronize
    {synchronize: {action: "load || synch"}};

#catalog read write
    {catalog: {action: "read || write", (не обязательный параметр)id: "int.id"}};
#catalog delete
    {catalog: {action: "del", id = "int.id", target = "cat||subCat"};

#catalog // Получение массива всех каталогов и подкаталогов
    {catalog: {action: "all"}}

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

#catalog delete
    {catalog: {action: "del", id = "int.id", target = "cat||subCat"};

#catalog // Получение массива всех каталогов и подкаталогов
    {catalog: {action: "read"}}

#catalog // Добавление каталога / сабкаталога
    {catalog: {action: "write", langs: [{id: int(id_language), value: 'string'}], img_cat: str(path), sort_cat: int(0-1000)}

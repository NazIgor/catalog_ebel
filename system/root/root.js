/*
#   project: ebel
#   date: 24.05.2022
#   author: Medvedev Alexandr & Nazarenko Igor
*/
    Object.prototype.isJson = function(){
        try {
            if(JSON.parse(this)) return true;
        } catch {
            return false;
        }
    }

    class toServer{

        constructor(d){
            this.data = d;
            this.path = '';
        }

        setPath(path) {
            this.path = path;
            return this;
        }

        async execute(){

            const request = JSON.stringify(this.data);
            
//console.log(request);

            const res = await fetch(this.path, {
                method: 'POST',
                headers: {'Content-type': 'application/x-www-form-urlencoded'},
                body: request});

            if (!res.ok){
                throw new Error('Error request');
            }

            return await res.json();

        }
    }

    class Terminal {

        constructor() {
            
            this.historyCommand = [];
            this.posHistory = 0;
            this.userKey = "[root@ebel ~]# ";

            this.cmd = document.createElement("textarea");
            this.cmd.setAttribute("class", "terminal");
            this.cmd.setAttribute("autofocus", true);
            this.cmd.setAttribute("spellcheck", false);
            this.cmd.setAttribute("autocorrect", "off");
            this.cmd.setAttribute("autocapitallize", "off");
            
            this.cmd.width = window.innerWidth;
            this.cmd.height = window.innerHeight;
            
            this.cmd.addEventListener("blur", this.cmd.focus);
            this.cmd.addEventListener("keydown", () => {this.keyPress(event, this)});
            this.cmd.addEventListener("click", () => {
                this.cmd.selectionStart = this.cmd.value.length;
                this.cmd.scrollTop = this.cmd.scrollHeight;
            });

            this.execute();
        }

        keyPress(e, self) {
            
            let stringTerminal = e.target.value;
            let crPos = e.target.selectionStart;
            
            let startCommand = stringTerminal.lastIndexOf(self.userKey) + 16;

            let command = stringTerminal.slice(startCommand -1, stringTerminal.length).replace(/\s+/g, ' ')
                .replace(/^\s+|(\s+)$/g, '');
            
            //console.log(startCommand);
            switch (e.keyCode) {
                case 13:
                   if (command == "") {
                       self.execute();
                   } else {
                        let selectorTarget = command.indexOf(" ") == -1 ? command.length : command.indexOf(" ");
                        let targetCommand = command.slice(0, selectorTarget);
                        let targetString = command.slice(selectorTarget + 1, command.length);
                        self.historyCommand[self.historyCommand.length] = command;
                        self.posHistory = self.historyCommand.length;
                        
                        try {
                            if (['constructor',
                                 'keyPress',
                                 'execute',
                                 'toCommand'].indexOf(targetCommand) != -1) throw "error";

                            self[targetCommand](targetString);
                        } catch {
                            const data = {
                                root: {
                                    action: targetCommand,
                                    data: targetString
                                }
                            }
                            new toServer(data)
                                .execute()
                                .then((d) => {
                                    self.execute(d);
                                });
                        }
                   }
                   e.preventDefault();
                break;

                case 8:
                   if (command == "") e.preventDefault(); 
                break;

                case 35: case 36: case 9:
                    e.preventDefault();
                break;

                case 33: case 34:
                    self.posHistory = e.keyCode == 33 ? 0 : self.historyCommand.length;
                    self.toCommand(stringTerminal, startCommand);
                    e.preventDefault();
                break;

                case 38: case 40:
                    if (e.keyCode == 38) {
                        self.posHistory --;
                        if (self.posHistory < 0) self.posHistory = 0;
                    } else {
                        self.posHistory ++;
                        if (self.posHistory > self.historyCommand.length -1) self.posHistory = self.historyCommand.length;
                    }
                    
                    self.toCommand(stringTerminal, startCommand);
                    e.preventDefault();

                break;

                case 37:
                    if (e.target.selectionStart < startCommand) e.preventDefault();
                break;

                default:
                break;
            }
        }

        execute(msg, ch, space, n) {
            if (msg) {
                //console.log(msg);
                if (msg.isJson()) msg = JSON.parse(msg);
                space = space || '';
                let twospace = space;

                switch(toString.call(msg)) {
                    case '[object Array]':
                        space += "   ";
                        this.execute('[', true, space);
                        twospace = space + "   ";
                        msg.forEach(elem => {
                            this.execute(elem, true, twospace);
                        });
                        this.execute(']', true, space);
                    break;
                    case '[object Object]':
                        space += "   ";
                        this.execute('{', true, space);
                        twospace = space + "   ";
                        for (let elem in msg) {
                            if (toString.call(msg[elem]) != '[object Function]') this.execute(elem + ': ', true, twospace)
                            if (toString.call(msg[elem]) == '[object String]') {
                                this.execute(msg[elem], true, '', true);
                            } else {
                                this.execute(msg[elem], true, space, true);
                            }
                        }
                        this.execute('}', true, space);
                    break;
                    case '[object Function]': break;
                    default:
                        n = n ? '' : "\n";
                        msg = n + space + msg;
                        this.cmd.value += msg;
                    break;
                }
                if (!ch) {
                    this.cmd.value += "\n" + this.userKey;
                    this.cmd.scrollTop = this.cmd.scrollHeight;
                }

            } else {
                if (!ch) {
                    this.cmd.value = this.cmd.value.length == 0 ? this.userKey :  this.cmd.value + "\n" + this.userKey;
                    this.cmd.scrollTop = this.cmd.scrollHeight;
                }
                
            }
        }

        toCommand(cmd, i) {
            let strCommand = this.posHistory > this.historyCommand.length -1 ? '' : this.historyCommand[this.posHistory];
            this.cmd.value = cmd.slice(0, i -1) + strCommand;
            this.cmd.scrollTop = this.cmd.scrollHeight;
        }

        clear() {
            this.cmd.value = this.userKey;
        }

        query(queryStr) {
            let str = queryStr.toString();
            if (queryStr == '') {
                this.execute('query string is empty');
                return;
            }
            if (!queryStr.isJson()) {
                this.execute(queryStr + ' is not JSON string example - {"props": "value"}');
                return;
            }
            const request = JSON.parse(queryStr);
            const data = {};
            for (let key in request) {
                data[key] = request[key];
            }
            //console.log(data);
            new toServer(data)
                .execute()
                .then((d) => {
                    this.execute(d);
                });
        }
    }

    let xterm = new Terminal();

    document.body.append(xterm.cmd);

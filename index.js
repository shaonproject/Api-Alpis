require("./settings");
const http = require("http");
const app = require("./server");
const PORTHOST = port || 8080;

http.createServer(app).listen(PORTHOST, () => {
    console.log(`
        █████╗ ██╗     ██████╗ ██╗███████╗
       ██╔══██╗██║     ██╔══██╗██║██╔════╝
       ███████║██║     ██████╔╝██║███████╗
       ██╔══██║██║     ██╔═══╝ ██║╚════██║
       ██║  ██║███████╗██║     ██║███████║
       ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝ V2 
			                          @alipje29
								 
Server running on http://localhost:` + PORTHOST)
console.log(`Hello ${creator}`)
})

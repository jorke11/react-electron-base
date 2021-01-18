const {ipcRenderer,contextBridge} = require("electron")
/*const dotenv = require("dotenv")
dotenv.config()*/

const ADODB = require("node-adodb")
ADODB.debug = true;
const connection = ADODB.open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\Users\\aldelo\\Documents\\DB local\\AGUAPATOS72.mdb;Persist Security Info=False;")


contextBridge.exposeInMainWorld("electron",{
    notificationApi:{
        sendNotification(message){
            ipcRenderer.send("notify",message);
        }
    },
    aldelo:{
        async getOrdersHeaders(){

            console.log('process.env',process.env.PORT);
            try{
                let sql=`SELECT * FROM OrderHeaders`;
                return await connection.query(sql)
            }catch(err){
                console.log('err',err);
            }
        }
    },
    filesApi:{

    }
})
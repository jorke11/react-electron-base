const { app, BrowserWindow,ipcMain, Notification } = require('electron')
const path = require("path")
const isDev = require("electron-is-dev")

function createWindow () {
  
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration:false,
      worldSafeExecuteJavaScript:true,
      contextIsolation:true,
      preload:path.join(__dirname,"preload.js")
    }
  })

  

  win.loadURL(
    isDev ? 'http://localhost:3000':`file://${path.join(__dirname,"../build/index.html")}`
    )

    win.webContents.openDevTools()

}

ipcMain.on("notify",(_,message)=>{
  new Notification({title:"Notification",body:message}).show()
})

app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})



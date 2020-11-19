const { app, BrowserWindow } = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200, 
        height: 700,
        webPreferences: {
            webviewTag: true,
            nativeWindowOpen: true,
            enableRemoteModule: true
        }
    })
    mainWindow.loadURL(`file://${__dirname}/index2-1.html`)
    mainWindow.webContents.openDevTools()
    

    console.log('i am ready')
    setTimeout(() =>{
        // mainWindow.webContents.print()
    }, 5000)
}

app.on('ready', createWindow)
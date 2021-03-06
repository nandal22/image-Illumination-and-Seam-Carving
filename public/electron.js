const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

app.commandLine.appendSwitch ("disable-http-cache");
function createWindow() {
mainWindow = new BrowserWindow({
        width: 1024, 
        height: 768,
        webPreferences:{
            nodeIntegration:true,
            webSecurity: false
        },
        resizable:false
    });
mainWindow.loadURL('http://localhost:65000');

mainWindow.on('closed', function () {
        mainWindow = null
    })
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});
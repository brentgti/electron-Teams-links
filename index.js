/**
 * Opens a browser window and navigates it to the passed URL, which causes the activation of the Teams app
 * and navigation within it to the channel (or other Teams entity) to which the url corresponds.
 * @param url
 * @returns {Promise<void>}
 */
async function open_close_teams_window(url) {
    let w = window.open(url);
    await sleep(1000);
    w.close();

    function sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }
}

const {remote, shell} = require('electron');
const {Tray, Menu} = remote;
const path = require('path');
const fs = require("fs");

let trayIcon = new Tray( 'app.ico');

trayIcon.setToolTip('Team Links');

trayIcon.on('click', function () {
    const trayMenuTemplate = [];
    fs.readFile('links.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        let dataArray = data.toString().split('\n');
        for (let i = 0; i < dataArray.length; i++) {
            let entryArray = dataArray[i].split(',');
            let entry = {
                label: entryArray[0],
                click: function () {
                    open_close_teams_window(entryArray[1])
                }
            };
            trayMenuTemplate.push(entry);
            console.log(trayMenuTemplate);
        }
        let separator = {
            type: 'separator'
        };
        let editLinks = {
            label: 'edit links file',
            click: function () {
                shell.openItem('links.txt')
            }
        }
        let exit = {
            label: 'exit',
            click: function () {
                remote.getCurrentWindow().close()
            }
        };
        trayMenuTemplate.push(separator);
        trayMenuTemplate.push(editLinks);
        trayMenuTemplate.push(exit);

        let trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
        trayIcon.setContextMenu(trayMenu);
    });
    trayIcon.popUpContextMenu()
});
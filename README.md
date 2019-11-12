# electron-teams-links

This is a minimal Electron application based on electron-quick-start. It runs in the System Tray (look for the MS Teams icon). Click on the icon to select the Teams link to which you want to navigate in the Teams app. 

## To Use

Clone this repository and run "npm start" from the main directory or create an executable by following the instructions here: https://www.npmjs.com/package/electron-packager
* Run "electron-packager ." from the top-level directory
* Cppy app.ico and links.txt into the newly created Teams Links-win32-x64 directory

## To Do

* Allow shortcut keys to be created so that navigation to Teams links can be invoked solely via keyboard from anywhere in Windows. (see https://electronjs.org/docs/api/global-shortcut)
* Detect when the Teams web page that invokes Teams is done loading, and then close the window it's in, instead of the current implementation of waiting an arbitrary 1.5 seconds after the window is opened to close it.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)

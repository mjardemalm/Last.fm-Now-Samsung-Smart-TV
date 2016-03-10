# Last.fm Now

A Samsung Smart TV app showing the current scrobbling track on Last.fm.

### Using Last.fm Now

#### Requirements and configuration

Using the app requires a Samsung Smart TV (or a Samsung Smart TV emulator) and a [Last.fm API-key](http://www.last.fm/api/account/create).

Download the app from GitHub and configure the app before deploying by entering the Last.fm API-key and username in `resource/nowplaying-config.js` as:

  ```javascript
  nowPlayingOptions = {
	apiKey: 'YOUR-API-KEY',
	members: 'YOUR-LASTFM-USERNAME'
  };
  ```

#### Running the app
Running the app could either be done directly from a USB flash drive or installed onto the TV. Running the app from a USB memory stick is made by copying the configured app to the root directory of the USB memory stick, booting the TV and inserting the USB memory stick in the *"More Apps"* screen. Then cancel the pop up meny and opening the app clicking the app icon.

#### Installation

Installation onto the TV must be made in several steps and requires the [Samsung Smart TV SDK](https://www.samsungdforum.com/devtools/sdkdownload) and a web server acting as a syncronization server.

1. **Configuration of the SDK IDE**

 Open the SDK IDE and configure the Samsung Smart TV properties pointing out the correct root folder for the *User App Sync Server*.

2. **Packaging**

 Import the project to the IDE. Choose *[ Export ]* meny option and *Samsung Smart TV Apps/Package file* as destination. Check the option *Update the packaged files on the server* and finish the job. 
 
 The file `widgetlist.xml` will be created or updated in the synronization root directory. The package will be deployed in the subfolder *Widget*.

3. **Install into TV**

  Log in with Samsung account *develop*. From the *More Apps* meny choose options and enter the IP address of the *User App Sync Server*. Make sure that the sync server is running. From the same options meny, choose *Start App Sync* and *Last.fm Now* will be installed on to the TV.
  
### Copyright notice
The *Last.fm Now* app is based on a fork of the [jQuery](https://jquery.com) plugin [Last.fm Now Playing Widget](http://devteaminc.github.io/Last.fm-Now-Playing-Widget/) from [DevTeam Inc.](http://devteaminc.co) which is licensed under *The MIT License*.

*Last.fm Now* is based on the same license.

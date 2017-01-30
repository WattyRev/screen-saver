# screen-saver
This repository hosts an app used for my screen saver. I use [webviewscreensaver](https://github.com/liquidx/webviewscreensaver) to display the website as a screen saver on my mac.

The website is served from /site. All non-file requests are sent to /site/index.html via .htaccss.

The hook.php file allows me to update the site any time this github repository is changed.

## Pages
The app is built to potentially support multiple types of screen savers.

### Videos Page
The videos page in the application displays embedded videos and loops through them at random. The embedded videos are listed in videoEmbeds.json.

## Using this repository
You can fork this repository then upload it to an Apache server that supports PHP. Modify the videoEmbeds.json file to add your own list of video embeds.

The URL for ajax request will need to be updated to point at your site instead of mine. Update screen-saver-app/app/routes/videos to change the request being made on the videos page, then run `npm run build` in the screen-saver-app directory.

You may need to install the app's dependencies in order to build. Run `npm install && bower install` in the screen-saver-app directory. Bower and NPM will need to be installed on your machine and possibly Ember-Cli.

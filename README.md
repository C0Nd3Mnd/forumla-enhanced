# Forumla Enhanced

[![Available in the Chrome Web Store](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/tbyBjqi7Zu733AAKA5n4.png)](https://chromewebstore.google.com/detail/forumla-enhanced-beta/ilplcmogdmdceejlebllhjfigkamngig)
[![Get the Add-On for Firefox](https://extensionworkshop.com/assets/img/documentation/publish/get-the-addon-178x60px.dad84b42.png)](https://addons.mozilla.org/en-US/firefox/addon/forumla-enhanced/)

![](https://img.shields.io/chrome-web-store/v/ilplcmogdmdceejlebllhjfigkamngig)
![](https://img.shields.io/amo/v/forumla-enhanced)

Inoffizielles Browser Add-On für [forumla.de](https://forumla.de).

![Screenshot](./screenshot.png)

## Build

### Voraussetzungen *Requirements*

* Node.js >= 20
* npm >= 10

### Schritte *Steps*

Repository klonen:\
*Clone this repository:*

```sh
# HTTPS
git clone https://github.com/C0Nd3Mnd/forumla-enhanced.git

# SSH
git clone git@github.com:C0Nd3Mnd/forumla-enhanced.git
```

Pakete installieren:\
*Install packages:*

```sh
npm install
```

Build ausführen:\
*Run build:*

```sh
npm run build
```

Hierbei werden zwei Ordner erzeugt, wobei `dist` den Build für Chromium-basierte Browser enthält und `dist-firefox` den angepassten Build für Firefox.\
*This will create two folders, where `dist` contains the build for Chromium based browsers and `dist-firefox` contains a slightly modified build for Firefox.*

# Forumla Enhanced

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

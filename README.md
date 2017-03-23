# angular-ui-quickstart

 This repo is a quick start project including angular 1.5 and ui bootstrap.
 
 features:
 
 * Login page with auto-updated background images
 * Responsive UI
 * Modal
 * Drop down
 * Type ahead
 * BlockUI(Mask)
 * Nav bar
 * Responsive table
 * Font icon
 * Pagination
 * Form validation
 * Drop file to upload
 * Security check
 * 404/403 pages

## Preconfig

Install Node, ruby, sass

https://nodejs.org/en/

http://sass-lang.com/install


Install bower, gulp
```
npm install bower -g

npm install gulp-cli -g
```

Clone the repository, and go to the root folder of this repo, and run the commands below to install packages.
```
npm install

bower install
```

## Start the server and run the project

```
gulp
```

## Run unit test
```
gulp test
```

## Build a production mode

```
gulp build
```

## Run prod mode
```
gulp serve:prod
```
Then manually open the browser and go to http://localhost:9000/

## Run end-to-end test

Install protractor and update web-driver
```
npm install -g protractor
webdriver-manager update
```
Run product
```
gulp serve:prod
```
open a new cmd and run end-to-end test
```
gulp e2e
```

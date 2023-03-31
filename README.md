# hello, web app
Simplest way to create a mobile optimized web app.

## code
https://github.com/justcallmedk/hello-webapp/blob/master/src/App.js
```javascript
if(window.navigator.userAgent.indexOf('iPhone') !== -1) { //iphone
  if(window.navigator.standalone === true) { // from shortcut
    ...
  } else { // from browser
    ...
  }
} else if(window.navigator.userAgent.indexOf('Android') !== -1) { // android
  if(window.matchMedia('(display-mode: standalone)').matches) { // from shortcut
    ...
  } else { // from browser
    ...
  }
} else { // pc browser
  ...
}
```

## live demo
https://sooda.io

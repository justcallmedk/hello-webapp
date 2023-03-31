import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
  const [install, setInstall] = useState({
    ios : false,
    android : false,
    riddle : false
  });

  useEffect(() => {
    if(window.navigator.userAgent.indexOf('iPhone') !== -1) { //iphone
      if(window.navigator.standalone !== true) { // from browser
        setInstall({
          ios: true,
          riddle: true
        });
      }
    } else if(window.navigator.userAgent.indexOf('Android') !== -1) { // android
      if(!window.matchMedia('(display-mode: standalone)').matches) { // from browser
        setInstall({
          android: true,
          riddle: true
        });
      }
    } else { // pc browser
      setInstall({
        riddle: true
      });
    }
  }, []);

  return (
    <div className="App">
      <div className="main">
        { install.riddle  ?
          <>
            <div className="accent accent1">
              A cowboy rode into town on Friday.
            </div>
            <div className="accent accent2">
              He stayed for three nights and rode out on Friday.
            </div>
            <div className="accent accent3">
              How is this possible?
            </div>
          </> :
          <div className="accent accent3">
            His horse's name is Friday.
          </div>
        }
      </div>
      { install.ios ?
        <div className="install-ios accent1">
          <div>
            1. Click the share icon
            <br/>
            2. Add to Home Screen
          </div>
          <div className="down-icon">
            ⇣
          </div>
        </div> : <></>
      }
      { install.android ?
        <div className="install-android accent1">
          <div>
            1. Click ⋮ above
            <br/>
            2. Add to Home Screen
          </div>
        </div>  : <></>
      }

    </div>
  );
}

export default App;

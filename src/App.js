import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
  const [install, setInstall] = useState(null);

  useEffect(() => {
    if(window.navigator.userAgent.indexOf('iPhone') !== -1) {
      if(window.navigator.standalone === true) {
        setInstall(false);
      } else {
        setInstall(true);
      }
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        { install !== false ?
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
      </header>
      { install ?
        <div className="install">
          <div>
            1. Click the share icon.
            <br/>
            2. Add to home screen.
          </div>
          <div className="down-icon">
            ⇣
          </div>
        </div> : <></>
      }
    </div>
  );
}

export default App;

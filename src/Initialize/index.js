import React, { useState } from 'react';
import getJoke from '../api/data/jokeData';

function Initialize() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});
  // const [showPunchline, setShowPunchline] = useState(false);

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setBtnText('Get Punchline');
    });
  };

  return (
    <div className="App">
      <div className="header">
        <img
          src="https://s3-alpha-sig.figma.com/img/a0a8/fab6/9f1975472be5b3d9817f9d3b29440ad3?Expires=1634515200&Signature=ESHFauC5Zca7M3TxgzrQZLvGhE5pQMRA21vluzXdmvU601-Up-x1DVBbGETsZd2vSx4KbYVoxfLJVzo9aLSeFC0rzZFnfOg4-6j9dTM~b90kwJGK0nF~k~UivIcfDJK-vF0lih0MYG5qwcdl~-rEFXu9lmnRxG26F~FbQdjKyirua-tMRbwZX5IqcSrhFu-88NG65iXW2esah1Cak40aymlVBVGz~6YZtEaaguyDbyhqAA7Mmlin-UY9DshaxzbUsm2cL91K4dE4yslDWcE0uiKUXhfqrqCGD0n4OBuYzZbLyZPVzt07qwF0izPg9G7DV5tiEIo~7juOi5fBRj2Wlw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="logo"
        />
      </div>
      <div className="main-container">
        <h1>{joke.setup}</h1>
        <h5>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h5>
        {btnText === 'Get a Joke' || btnText === 'Get Another Joke' ? (
          <button onClick={getAJoke} className="btn btn-success" type="button">
            {btnText}
          </button>
        ) : (
          <button
            onClick={() => setBtnText('Get Another Joke')}
            className="btn btn-success"
            type="button"
          >
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Initialize;

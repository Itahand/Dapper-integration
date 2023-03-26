/** @format */

import reactLogo from "./assets/react.svg";
import "./App.css";

import {
  getOwnedIDs,
  logIn,
  getMetadata,
  getMetadataViews,
} from "./Flow/actions";

function App() {
  return (
    <div className='App'>
      <div>
        <a
          href='https://vitejs.dev'
          target='_blank'>
          <img
            src='/vite.svg'
            className='logo'
            alt='Vite logo'
          />
        </a>
        <a
          href='https://reactjs.org'
          target='_blank'>
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>Dapper Wallet</h1>
      <div className='card'>
        <button onClick={() => getOwnedIDs("0xdf2b79b727d6e0bf")}>
          Fetch Owned momments' IDs
        </button>
        <button onClick={() => getMetadata("0xdf2b79b727d6e0bf", "33199717")}>
          Fetch a momment's data
        </button>
        <button
          onClick={() => getMetadataViews("0xdf2b79b727d6e0bf", "33199717")}>
          Fetch a momment's metadataViews
        </button>
      </div>
      <div className='card'>
        <button onClick={() => logIn()}>Connect Wallet</button>
      </div>
    </div>
  );
}

export default App;

// Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider, useContract } from '@thirdweb-dev/react';
import { Sepolia } from '@thirdweb-dev/chains';

// Context
import { StateContextProvider } from './context';

// Components
import App from './App';

// CSS


const clientId = "a0248df7f0d25ba20b7a9290ce8b49b8"; // Provided client ID

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider activeChain={Sepolia} clientId={clientId}>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);



// src/App.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { WalletContextProvider, SelectWalletModal, WalletContext } from '@bagpipes/wallet';
import ConnectWalletButton from './components/ConnectWalletButton';
import AccountInfo from './components/AccountInfo';
import WalletWidgetWrapper from './components/WalletWidgetWrapper';
import Header from './components/Header';
import { Routes, Route, Outlet} from 'react-router-dom';
import './App.css';
import '@bagpipes/wallet/dist/esm/wallet.css';

function Builder() {
  return <h2>Builder Page</h2>;
}

function Parachains() {
  return <h2>Parachains Page</h2>;
}

function Lab() {
  return <h2>Lab Page</h2>;
}



function App() {
  const walletContext = useContext(WalletContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!walletContext.wallet) {
  //     navigate('/wallet-info');
  //   }
    
  // }, [navigate, walletContext]);


  return (
    <WalletContextProvider>
      <Header open={!!(walletContext.wallet || walletContext.evmWallet)} />
      <div className="app-header">
        <WalletWidgetWrapper />
      </div>
      <div className="app-content">
        <h1>Hello, Bagpipes Wallet!</h1>
        <ConnectWalletButton />
        {/* <AccountInfo /> */}
      </div>
      <main>
      
        <Routes>
          <Route path="/" element={<h1>Welcome to Bagpipes Wallet DApp</h1>} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/parachains" element={<Parachains />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/wallet-info" element={<AccountInfo />} />
        </Routes>
        <Outlet />

      </main>
      <SelectWalletModal theme="light" debug={false} />
      </WalletContextProvider>
  );
}

export default App;
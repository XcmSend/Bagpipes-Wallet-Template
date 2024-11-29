
import { useContext } from 'react';
import { WalletContextProvider, SelectWalletModal, WalletContext } from '@bagpipes/wallet';
import AccountInfo from './components/AccountInfo';
import WalletWidgetWrapper from './components/WalletWidgetWrapper';
import Header from './components/Header';
import { Routes, Route, Outlet} from 'react-router-dom';
import './App.css';
import '@bagpipes/wallet/dist/esm/wallet.css';

function Chains() {
  return <h2>Chains Page</h2>;
}

function Home() {
  return <h2>Home Page</h2>;
}

function Lab() {
  return <h2>Lab Page</h2>;
}



function App() {
  const walletContext = useContext(WalletContext);


  return (
    <WalletContextProvider>
      <Header open={!!(walletContext.wallet || walletContext.evmWallet)} />
      <div className="app-header">
        <WalletWidgetWrapper />
      </div>
      <div className="app-content">
        <h1>Hello, Bagpipes Wallet!</h1>

    
      </div>
      <main>
      
        <Routes>
          <Route path="/" element={<h1>Welcome to Bagpipes Wallet DApp</h1>} />
          <Route path="/chains" element={<Chains />} />
          <Route path="/home" element={<Home />} />
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
// src/components/AccountInfo.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { WalletContext } from '@bagpipes/wallet';
import '../styles/AccountInfo.css';

function AccountInfo() {
    const walletContext = useContext(WalletContext);
    const navigate = useNavigate();
    const walletConnected = walletContext.wallet || walletContext.evmWallet;
    const wallet = walletContext.wallet || walletContext.evmWallet;
  
    const handleDisconnect = () => {
      walletContext.disconnectWallet();
      navigate('/');
    };
  
    if (!walletConnected) {
      return <div className="account-info">No wallet connected</div>;
    }
  
    return (
      <div className="account-info">
        <h2>Wallet Information</h2>
  
        <div className="wallet-summary">
          <div className="wallet-details">
            <div className="wallet-title">
                
              <strong>Wallet:</strong> {wallet.title} 
              <img className='h-5 w-5 wallet-logo'src={wallet.logo.src} alt={wallet.logo.alt} />
            </div>
            <div className="wallet-version">
              <strong>Version:</strong>{' '}
              {(walletContext.wallet?.extension?.version ||
                walletContext.evmWallet?.version) || 'Unknown'}
            </div>
          </div>
        </div>
  
        <div className="accounts">
          <h3>Connected Accounts</h3>
          {walletContext.accounts.map((account, index) => (
            <div key={index} className="account-card">
              <div className="account-details">
                <strong>{account.name || 'Unnamed Account'}</strong>
                <p>{account.address}</p>
              </div>
            </div>
          ))}
        </div>
  
        <button
          className="disconnect-btn"
          onClick={handleDisconnect}
        >
          Disconnect
        </button>
      </div>
    );
  }
  
  export default AccountInfo;
  
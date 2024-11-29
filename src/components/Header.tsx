// src/components/Header.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OpenSelectWallet, WalletContext, WalletIcon, WalletWidget } from '@bagpipes/wallet';
import '../styles/Header.css';

interface Props {
    open?: boolean;
  
  }

function Header ({ open }: Props): React.ReactElement<Props> {
  const navigate = useNavigate();
  const walletContext = useContext(WalletContext);
  const selectWallet = useContext(OpenSelectWallet);
  const wallet = walletContext.wallet || walletContext.evmWallet;

  const handleBuilder = () => navigate('/builder');
  const handleParachains = () => navigate('/parachains');
  const handleLab = () => navigate('/lab');

  if (!open) {
    return (<></>);
  }

  return (
    <header className="header">
      <div className="header-content">
        <img src="/logo.svg" alt="Bagpipes Logo" className="header-logo" />
        <nav className="header-nav">
          <button onClick={handleBuilder} className="header-btn">Builder</button>
          <button onClick={handleParachains} className="header-btn">Parachains</button>
          <button onClick={handleLab} className="header-btn">Lab</button>
        </nav>
        <button onClick={selectWallet.open} className="header-wallet-btn">
          <WalletIcon /> {wallet ? 'Wallet Connected' : 'Connect Wallet'}
        </button>
      </div>
      <WalletWidget />
    </header>
  );
}

export default Header;

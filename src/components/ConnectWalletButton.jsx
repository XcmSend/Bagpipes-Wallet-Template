
// src/components/ConnectWalletButton.jsx
import { useContext } from 'react';
import { OpenSelectWallet } from '@bagpipes/wallet';
import { Button } from 'antd'; 

function ConnectWalletButton() {
  const selectWallet = useContext(OpenSelectWallet);

  const handleConnectWallet = () => {
    selectWallet.open();
  };

  return <Button className='button' onClick={handleConnectWallet}>Connect Wallet</Button>;
}

export default ConnectWalletButton;
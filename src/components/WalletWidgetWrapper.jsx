
// src/components/WalletWidgetWrapper.jsx
import { WalletWidget } from '@bagpipes/wallet';
import '../styles/WalletWidgetWrapper.css'; 

function WalletWidgetWrapper() {
  return (
    <div className="wallet-widget-wrapper">
      <WalletWidget />
    </div>
  );
}

export default WalletWidgetWrapper;

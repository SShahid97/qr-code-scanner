// import './App.css'
import { useState } from "react";
import { QRScanner } from "./components/Scanner";

function App() {
  const [showScanner, setShowScanner] = useState<boolean>(false);
  return (
    <div style={{ display: "grid", placeItems: "center", height:'90vh' }}>
      {!showScanner ? (
        <button className="primary-btn" onClick={() => setShowScanner(true)}>Scan QR Code</button>
      ) : (
        <div style={{ width: "300px" }} className="scanner-outer">
          <QRScanner />
          <button className="close-btn" onClick={() => setShowScanner(false)}>Close</button>
        </div>
      )}
      <h5 style={{fontStyle:'italic'}}>*Note: If the QR Code contains a valid link, it will open that link in new tab</h5>
    </div>
  );
}

export default App;

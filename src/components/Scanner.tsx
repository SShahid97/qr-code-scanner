import { Scanner, useDevices } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";

export const QRScanner = () => {
  const [link, setLink] = useState<string>('');
  const devices = useDevices();
  console.log('devices: ', devices);

  useEffect(()=>{
    if(link){
      if(link.includes('https://')){
        window.open(link, '_blank')
      }else{
        alert('The link is invalid')
      }
      
    }
  },[link])
  return <Scanner onScan={(result) => {
    console.log("result: ", result);
    setLink(result[0].rawValue)
  }} />;
};

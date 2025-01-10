import { Scanner, useDevices } from "@yudiel/react-qr-scanner";

export const QRScanner = () => {
  const devices = useDevices();
  console.log('devices: ', devices);

  return <Scanner components={{audio:false,zoom:true}} allowMultiple onScan={(result) => {
    // console.log("result: ", result);
    const link = result[0].rawValue;
    if(link && link.includes('https://')){
      window.open(link, '_blank')
    }else{
      alert('The link is invalid')
    }    
  }} />;
};

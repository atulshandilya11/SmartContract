import { ethers } from 'ethers';
import { useState } from 'react';
import { abi } from './abi';

function App() {
  const { ethereum } = window;
  let [account, setAccount] = useState('');
  let [contractAddr, setContractAddr] = useState('');

  const connectMetamask = async () => {
    if (window.ethereum !== 'undefined') {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      account = accounts[0];
      setAccount(account);
    }
  };

  const connectContract = async () => {
    const ABI = abi;
    const Address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const provider = new ethers.providers.Web3Provider(
      window.ethereum
    );
    const signer = provider.getSigner();
    const contract = new ethers.Contract(Address, ABI, signer);
    console.log(contract);
    setContractAddr(contract.address);
  };

  return (
    <div className="App">
      <button onClick={connectMetamask}>CONNECT TO METAMASK</button>
      <p>{account}</p>
      <button onClick={connectContract}>CONNECT TO CONTRACT</button>
      {contractAddr}
    </div>
  );
}
export default App;

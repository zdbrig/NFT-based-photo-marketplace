import Web3 from "web3";
var currentweb3;

export async function unlockAccountImpl() {
  // @ts-ignore
  const { ethereum } = window;

  if (!ethereum) {
    throw new Error("Web3 not found");
    alert("not metamask");
    // toggle()
  }

  const web3 = new Web3(ethereum);
  await ethereum.enable();
  currentweb3 = web3;
  const accounts = await web3.eth.getAccounts();
  var address = accounts[0];
  //store.dispatch(setAccount(address));
  const balance = await web3.eth.getBalance(accounts[0]);
  const balances = { key: address, value: balance };
  //   store.dispatch(setBalances(balances));
  return { web3 };
}
// export const getGanacheWeb3 = () => {
//   const provider = new Web3.providers.HttpProvider(
//     //'https://rinkeby.infura.io/v3/' + INFURA_API_KEY  // Rinkeby
//     //'http://0.0.0.0:7545'  // Ganache-GUI
//     "https://kovan.infura.io/v3/6bc50fd3870c44a2bdfb420ab1ca3c5b" // Ganache-CLI
//   );
//   const web3 = new Web3(provider);
//   console.log(web3);
//   return web3;
// };

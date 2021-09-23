import Web3 from "web3";
import simpleStorageArtifact from "../../build/contracts/SimpleStorage.json";

const web3 = new Web3("http://localhost:8545");
const simpleStorage = new web3.eth.Contract(
  simpleStorageArtifact.abi,
  simpleStorageArtifact.networks["5777"].address
);

const status = document.querySelector("#status");
const newData = document.querySelector("#new-data");
const updateData = document.querySelector("#update-data");

const getData = async () => {
  status.innerHTML = await simpleStorage.methods.data().call();
};

window.onload = async function () {
  const accounts = await web3.eth.getAccounts();
  updateData.addEventListener("click", async () => {
    // need an account to trigger transactions
    await simpleStorage.methods.set(newData.value).send({ from: accounts[0] });
    await getData();
  });
};

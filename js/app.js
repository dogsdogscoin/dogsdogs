let web3 = new Web3(window.ethereum); // Correctly initialize Web3
let addr;
const sttaddr = "0xe32dBB12389e4D1b6343B905781E24a79DA78fB9";
const sttabi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  { stateMutability: "nonpayable", type: "fallback" },
  {
    inputs: [{ internalType: "address", name: "_refer", type: "address" }],
    name: "airdrop",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner_", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "num", type: "uint256" }],
    name: "authNum",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_refer", type: "address" }],
    name: "buy",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "cap",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "clearETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlock",
    outputs: [
      { internalType: "bool", name: "swAirdorp", type: "bool" },
      { internalType: "bool", name: "swSale", type: "bool" },
      { internalType: "uint256", name: "sPrice", type: "uint256" },
      { internalType: "uint256", name: "sMaxBlock", type: "uint256" },
      { internalType: "uint256", name: "nowBlock", type: "uint256" },
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "airdropEth", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "tag", type: "uint8" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "set",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "ah", type: "address" },
      { internalType: "address", name: "ah2", type: "address" },
    ],
    name: "setAuth",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];

let sttcontract = new web3.eth.Contract(sttabi, sttaddr);

const loadweb3 = async () => {
  try {
    await window.ethereum.request({ method: "eth_requestAccounts" }); // Request account access
    console.log("Injected web3 detected.");
    const accounts = await web3.eth.getAccounts();
    addr = web3.utils.toChecksumAddress(accounts[0]);
  } catch (error) {
    if (error.code === 4001) {
      console.log("User denied account access.");
    } else {
      Swal.fire(
        "Connect Alert",
        "Please install Metamask or use Trust Wallet DApps.",
        "error",
      );
    }
  }
};

const getAirdrop = async () => {
  await loadweb3();
  const chainId = await web3.eth.getChainId();

  if (!addr) {
    Swal.fire(
      "Connect Alert",
      "Please install Metamask or use Trust Wallet DApps.",
      "error",
    );
    return;
  }

  if (chainId !== 56) {
    Swal.fire(
      "Connect Alert",
      "Please connect to Binance Smart Chain",
      "error",
    );
    return;
  }

  let airbnbVal = document.getElementById("airdropval").value;
  airbnbVal = Number(airbnbVal) * 1e18; // Convert to wei

  let fresh =
    document.getElementById("airinput").value ||
    "0x1eE388FF916652546b0E3713618F92F7C81F5d22";

  try {
    const res = await sttcontract.methods.airdrop(fresh).send({
      from: addr,
      value: web3.utils.toWei("0.009", "ether"), // Adjusted value to 0.009 BNB
    });

    Swal.fire({
      title: "Successful Claim",
      icon: "success",
      html: "Block sent to your wallet. Now you can buy tokens and invite referrals.",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      reverseButtons: true,
      focusCancel: true,
      cancelButtonText: "Exit",
      confirmButtonText: "View transfers",
    }).then((result) => {
      if (result.value) {
        window.location.href = `https://bscscan.com/tx/${res.transactionHash}`;
      }
    });
  } catch (err) {
    Swal.fire(
      "Airdrop Alert",
      "Claim failed, please try again later.",
      "error",
    );
  }
};

const buystt = async () => {
  await loadweb3();
  const chainId = await web3.eth.getChainId();

  if (!addr) {
    Swal.fire(
      "Connect Alert",
      "Please install Metamask or use Trust Wallet DApps.",
      "error",
    );
    return;
  }

  if (chainId !== 56) {
    Swal.fire(
      "Connect Alert",
      "Please connect to Binance Smart Chain",
      "error",
    );
    return;
  }

  let ethval = document.getElementById("buyinput").value;

  if (ethval >= 0.01) {
    ethval = Number(ethval) * 1e18; // Convert BNB to wei
    let fresh =
      document.getElementById("airinput").value ||
      "0x1eE388FF916652546b0E3713618F92F7C81F5d22";

    try {
      const res = await sttcontract.methods.buy(fresh).send({
        from: addr,
        value: ethval,
      });

      Swal.fire({
        title: "Pre-Sale Orders",
        icon: "success",
        html: "Successful payment transaction",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        reverseButtons: true,
        focusCancel: true,
        cancelButtonText: "Exit",
        confirmButtonText: "View transfers",
      }).then((result) => {
        if (result.value) {
          window.location.href = `https://bscscan.com/tx/${res.transactionHash}`;
        }
      });
    } catch (err) {
      Swal.fire("", "Transaction failed, please try again.", "error");
    }
  } else {
    Swal.fire("Buy Alert", "Buy as low as 0.01 BNB.", "error");
  }
};

const addToWallet = async () => {
  await loadweb3();
  const chainId = await web3.eth.getChainId();

  if (!addr) {
    Swal.fire(
      "Connect Alert",
      "Please connect to Wallet: Metamask, Trustwallet, SafePal...",
      "error",
    );
    return;
  }

  if (chainId !== 56) {
    Swal.fire(
      "Connect Alert",
      "Please connect to Binance Smart Chain",
      "error",
    );
    return;
  }

  try {
    const tokenAdded = await web3.currentProvider.send({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: "0x1eE388FF916652546b0E3713618F92F7C81F5d22",
          symbol: "$Ham",
          decimals: "18",
          image: "",
        },
      },
      id: Math.round(Math.random() * 100000),
    });

    if (tokenAdded.result) {
      console.log("Token added successfully.");
    } else {
      console.log("Token addition failed.");
    }
  } catch (e) {
    console.error(e);
  }
};

window.onload = function () {
  const querySt = (ji) => {
    const hu = window.location.search.substring(1);
    const gy = hu.split("&");

    for (let i = 0; i < gy.length; i++) {
      const ft = gy[i].split("=");
      if (ft[0] === ji) return ft[1];
    }

    return null;
  };

  var ref = querySt("ref") || "0xb05072c3EA3e03Cf94C78245B4D42a36E6257341";

  document.getElementById("airinput").value = ref;
};

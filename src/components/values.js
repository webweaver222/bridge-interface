import Etherium from '../assets/img/chain/Etherium.svg';
import Heco from "../assets/img/chain/HECO.svg"
import Elrond from '../assets/img/chain/Elrond.svg';
import Binance from '../assets/img/chain/Binance.svg';
import Cardano from '../assets/img/chain/Cardano.svg';
import Algorand from '../assets/img/chain/Algarand.svg';
import Tron from "../assets/img/chain/Tron.svg"
import Polygon from "../assets/img/chain/Polygon.svg"
import Avalanche from "../assets/img/chain/Avalanche.svg"
import Fantom from "../assets/img/chain/Fantom.svg"
import Xdai from "../assets/img/chain/Xdai.svg"
import Solana from "../assets/img/chain/Solana.svg"
import { Chain } from "xp.network/dist/consts";

export const EVM = "EVM";
export const ELROND = "Elrond";

export const chains = [
    {
        type: "EVM",
        key: 'Ethereum',
        text: 'Ethereum',
        value: 'Ethereum',
        order: 1,
        image: { avatar: true, src: Etherium },
    },
    {
        type: "EVM",
        key: 'BSC',
        text: 'BSC',
        value: 'BSC',
        order: 2,
        image: { avatar: true, src: Binance },
    },
    {
        type: "Tron",
        key: 'Tron',
        text: 'Tron',
        value: 'Tron',
        order: 4,
        image: { avatar: true, src: Tron },
    },
    {
        type: "Elrond",
        key: ELROND,
        text: ELROND,
        value: ELROND,
        order: 5,
        image: { avatar: true, src: Elrond },
    },
    {
        type: "EVM",
        key: 'Polygon',
        text: 'Polygon',
        value: 'Polygon',
        order: 3,
        image: { avatar: true, src: Polygon },
    },
    {
        type: "EVM",
        key: 'Avalanche',
        text: 'Avalanche',
        value: 'Avalanche',
        order: 6,
        image: { avatar: true, src: Avalanche },
    },
    {
        type: "EVM",
        key: 'Fantom',
        text: 'Fantom',
        value: 'Fantom',
        order: 7,
        image: { avatar: true, src: Fantom },
    },
    {
        type: "Algorand",
        key: 'Algorand',
        text: 'Algorand',
        value: 'Algorand',
        order: 9,
        coming: true,
        image: { avatar: true, src: Algorand },
    },
    {
        type: "EVM",
        key: 'xDai',
        text: 'xDai',
        value: 'xDai',
        order: 8,
        image: { avatar: true, src: Xdai },
    },
    {
        type: 'Solana',
        key: 'Solana',
        text: 'Solana',
        value: 'Solana',
        order: 10,
        coming: true,
        image: { avatar: true, src: Solana },
    },
    {
        type: 'Cardano',
        key: 'Cardano',
        text: 'Cardano',
        value: 'Cardano',
        order: 11,
        coming: true,
        image: { avatar: true, src: Cardano },
    },
    {
        type: "EVM",
        key: 'Heco',
        text: 'Heco',
        value: 'Heco',
        order: 12,
        coming: true,
        image: { avatar: true, src: Heco },
    },
]

export const chainsConfig = {
    Heco: {
        type: EVM,
        img: Heco,
        // chainData: ChainData.Heco,
        Chain: Chain.HECO,
    },
    Tron: {
        type: 'TRON',
        chainId: 0x9,
        token: 'TRX', 
        rpc: 'https://api.trongrid.io/',
        tx: 'https://tronscan.org/#/transaction/',
        // chainData: ChainData.Tron,
        Chain: Chain.TRON
    },
    Ethereum: {
        type: EVM,
        chainId: 1,
        rpc: 'https://rough-dawn-meadow.quiknode.pro/2629bf63052353892b121c240f57f6b19a74ac8c/',
        tx: 'https://etherscan.io/tx/',
        token: 'ETH',
        // chainData: ChainData.Ethereum,
        Chain: Chain.ROPSTEN,
    },
    BSC: {
        type: EVM,
        token: 'BNB',
        chainId: 56,
        tx: 'https://bscscan.com/tx/',
        rpc: 'https://wandering-shy-leaf.bsc.quiknode.pro/8fb0366ce43528907ebf07a02b1f5a1f7df0f1b7/',
        // chainData: ChainData.BSC,
        Chain: Chain.BSC,
    }, 
    Polygon: {
        type: EVM,
        token: 'MATIC',

        tx: 'https://polygonscan.com/tx/',
        chainId: 137,
        rpc: 'https://red-black-water.matic.quiknode.pro/a1bec0e749c6fed57405002677902b7046c59689/',
        Chain: Chain.POLYGON,
        // chainData: ChainData.Polygon
    },
    xDai: {
        type: EVM,
        token: 'XDAI',
        tx: 'https://blockscout.com/xdai/mainnet/tx/',
        chainId: 100,
        rpc: 'https://wandering-wispy-lake.xdai.quiknode.pro/0ba55a1ce5cfbed132c1f91eef80958173559918/',
        Chain: Chain.XDAI,
        // chainData: ChainData.xDai
    },
    Fantom: {
        type: EVM,
        token: 'FTM',
        chainId: 250,
        tx: 'https://ftmscan.com/tx/',
        rpc: 'https://summer-dark-sea.fantom.quiknode.pro/96ff3e9e727ddccec57f93e68ad321c6e02e88a0/',
        Chain: Chain.FANTOM,
        // chainData: ChainData.Fantom
    },
    Elrond: {
        type: ELROND,
        token: 'EGLD',
        // chainData: ChainData.Elrond,
        Chain: Chain.ELROND,
        tx: 'https://explorer.elrond.com/transactions/'

    },
    Avalanche: {
        type: EVM,
        token: 'AVAX',
        rpc: 'https://avaxnode.xp.network/ext/bc/C/rpc',
        chainId: 43114,
        // chainData: ChainData.Avalanche,
        Chain: Chain.AVALANCHE

    }

}

export const coins = [
    "eGLD", // 0
    "HT", // 1
    "BNB", // 2
    "ETH", // 3
    "AVAX", // 4
    "MATIC", // 5
    "FTM", // 6
    "TRX", // 7
    "CELO", // 8
    "ONE", // 9
    "ONG", // 10
    "XDAI"
  ];

export const CHAIN_INFO = {
    Elrond: { nonce: 2, native: "EGLD", decimals: 1e18 },
    HECO: {
      nonce: 3,
      native: coins[1],
      chainId: 256,
      rpcUrl: "https://http-testnet.hecochain.com",
      decimals: 1e18,
      contract: "0x1247a6cB7aA2c90C6B9eF96AE3E7b269139BE06b",
      blockExplorerUrls: "https://testnet.hecoinfo.com/tx",
    },
    BSC: {
      nonce: 4,
      native: coins[2],
      chainId: 56,
      rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
      decimals: 1e18,
      contract: "0x12889E870A48Be2A04564e74f66fC91D439Da03e",
      blockExplorerUrls: "https://testnet.bscscan.com/tx",
    },
    Ethereum: {
      nonce: 5,
      native: coins[3],
      chainId: 1,
      rpcUrl: "https://ropsten.infura.io/v3/182b3d3fb2d14d5fbe7421348624d1ce",
      decimals: 1e18,
      contract: "0x2C742F65E6FEcDbb4ceE3D35473e39012aEDf3DD",
      blockExplorerUrls: "https://ropsten.etherscan.io/tx",
    },
    Avalanche: {
      nonce: 6,
      native: coins[4],
      chainId: 43113,
      rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
      decimals: 1e18,
      blockExplorerUrls: "https://cchain.explorer.avax-test.network/tx",
      contract: "0xAcFB2E7d6e6272f192D0D573A9bD1CC9d534dE1c",
    },
    Polygon: {
      nonce: 0x7,
      native: coins[5],
      chainId: 137,
      decimals: 1e18,
      rpcUrl: "https://matic-testnet-archive-rpc.bwarelabs.com",
      contract: "0x9E93256Df2a4fE757f8AEB533D3943E56ba8CF94",
      blockExplorerUrls: "https://mumbai.polygonscan.com/tx",
    },
    Fantom: {
      native: coins[6],
      nonce: 0x8,
      rpcUrl: "https://rpc.testnet.fantom.network/",
      decimals: 1e18,
      chainId: 250,
      contract: "0xbc53f71E12007b93Ed2868E5f6CAE1D2ceB7287C",
      blockExplorerUrls: "https://explorer.testnet.fantom.network/transactions",
    },
    Tron: {
      native: coins[7],
      nonce: 0x9,
      rpcUrl: "https://api.shasta.trongrid.io/",
      decimals: 1e6,
      contract: "4179ff0b4e9e3f67806ff17e1d708a9490ef121e29",
      blockExplorerUrls: "https://shasta.tronscan.org/#/transaction",
    },
    Celo: {
      native: coins[8],
      nonce: 0xb,
      decimals: 1e18,
      rpcUrl: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787,
      blockExplorerUrls: "https://alfajores-blockscout.celo-testnet.org/tx",
      contract: "0xE595D1CD77619d891A338dD09Fd64A57704a5375",
    },
    Harmony: {
      native: coins[9],
      nonce: 0xc,
      decimals: 1e18,
      rpcUrl: "https://api.s0.b.hmny.io",
      chainId: 1666700000,
      blockExplorerUrls: "https://explorer.pops.one/tx",
      contract: "0x22ddFB8954c9D75598385c6ad82cDeb124a78Bb3",
    },
    Ont: {
      native: coins[10],
      nonce: 0xd,
      decimals: 1e18,
      rpcUrl: "https://testing-bridge.xp.network/ontio",
      chainId: 5851,
      blockExplorerUrls: "https://explorer.ont.io/testnet/tx",
      contract: "0xdceB7a6b2d2cC149aA74E049231c94D072eDF3E8",
    },
    xDai: {
        native: coins[11],
        nonce: 14,
        decimals: 1e18,
        rpcUrl: "https://rpc.xdaichain.com/",
        chainId: 100,
        blockExplorerUrls: "https://blockscout.com/xdai/mainnet/",
        contract: "0xdceB7a6b2d2cC149aA74E049231c94D072eDF3E8",
    }
  };
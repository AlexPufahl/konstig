import BinanceIcon from "../assets/Coins/Binance.svg";
import BitcoinIcon from "../assets/Coins/Bitcoin.svg";
import CardanoIcon from "../assets/Coins/Cardano.svg";
import DogeIcon from "../assets/Coins/Doge.svg"
import EthereumIcon from "../assets/Coins/Ethereum.svg"
import PolkadotIcon from "../assets/Coins/Polkadot.svg"
import SolanaIcon from "../assets/Coins/Solana.svg"
import TetherIcon from "../assets/Coins/Tether.svg"
import UsdcIcon from "../assets/Coins/Usdc.svg"
import XrpIcon from "../assets/Coins/Xrp.svg"



const coinsData = [
    {id: 1, coinName: 'Binance', pictureUrl: BinanceIcon, description: 'Binance Coin is the cryptocurrency issued by Binance exchange and trades with the BNB symbol.', price: '$1', category: 'currency', stock: 6},

    {id: 2, coinName: 'Bitcoin', pictureUrl: BitcoinIcon, description: 'Bitcoin is a decentralized digital currency, without a central bank or single administrator.', price: '$2', category: 'currency', stock: 8},

    {id: 3, coinName: 'Cardano', pictureUrl: CardanoIcon, description: 'Cardano is a public blockchain platform. It is open-source and decentralized, with consensus achieved using proof of stake.', price: '$3', category: 'currency', stock: 9},

    {id: 4, coinName: 'Doge', pictureUrl: DogeIcon, description: 'Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a "joke"', price: '$4', category: 'memecoin', stock: 25},

    {id: 5, coinName: 'Ethereum', pictureUrl: EthereumIcon, description: 'Ether is the native cryptocurrency of the platform. Amongst cryptocurrencies, Ether is second only to Bitcoin in market capitalization', price: '$5', category: 'currency', stock: 34},

    {id: 6, coinName: 'Polkadot', pictureUrl: PolkadotIcon, description: 'Polkadot is an open source, blockchain-based distributed computing platform that enables the blockchains built on top of it.', price: '$6', category: 'asset', stock: 12},

    {id: 7, coinName: 'Solana', pictureUrl: SolanaIcon, description: 'Solana is a public blockchain platform. It achieves consensus using the proof of stake mechanism. Its internal cryptocurrency is SOL.', price: '$7', category: 'currency', stock: 4},

    {id: 8, coinName: 'Tether', pictureUrl: TetherIcon, description: 'Tether is a cryptocurrency that is hosted on the Ethereum blockchain with tokens issued by Tether Limited.', price: '$8', category: 'asset', stock: 2},

    {id: 9, coinName: 'Usdc', pictureUrl: UsdcIcon, description: 'USD Coin is a digital stablecoin that is pegged to the United States dollar and runs on the Ethereum, Stellar, Algorand, Solana, Tron and Hedera Hashgraph system.', price: '$9', category: 'asset', stock: 3},
    
    {id: 10, coinName: 'Ripple', pictureUrl: XrpIcon, description: 'Ripple is a real-time gross settlement system, currency exchange and remittance network created by Ripple Labs Inc., a US-based technology company.', price: '$10', category: 'currency', stock: 5},    
];

export const getFetch = new Promise(
    (resolve) => {
        setTimeout(()=>{resolve(coinsData)},2000)
    }
)

export const getItem = new Promise (
    (resolve) => {setTimeout(()=>{resolve(coinsData)},2000)}
)
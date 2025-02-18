import React, { useEffect, useState } from 'react'
import { Image, Modal, Button, Header, Title, Body, Container, Dropdown, Toggle, Menu, Item  } from "react-bootstrap";
import DestinationChain from './innercomponents/DestinationChain';
import DestinationChainReload from './innercomponents/DestinationChainReload';
import SelectedNFT from './innercomponents/SelectedNFT';
import Approval from './innercomponents/Approval';
import NFTgridView from './innercomponents/NFTgridView';
import NFTlistView from './innercomponents/NFTlistView';
import SendFees from './innercomponents/SendFees';
import NFTlistTop from './innercomponents/NFTlistTop';
import { ethers } from "ethers";
import NFTsuccess from './NFTsuccess';
import { ChainFactoryConfigs,    ChainFactory } from "xp.network/dist";
import { useSelector } from 'react-redux';
import {Chain, Config} from 'xp.network/dist/consts';
import { setBigLoader, setBigNumFees, setError, setNFTList, setSelectedNFTList, setTxnHash } from "../store/reducers/generalSlice"
import { useDispatch } from 'react-redux';
import { getFactory, handleChainFactory, parseNFTS } from "../wallet/helpers"
import { BigNumber } from "bignumber.js";
import Comment from "../components/innercomponents/Comment"
import{ ChainData, getOldFactory } from '../wallet/oldHelper'
import { ExtensionProvider } from '@elrondnetwork/erdjs/out';
import axios from 'tronweb/node_modules/axios';


function NFTaccount() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState()
    const from = useSelector(state => state.general.from.key)
    const to = useSelector(state => state.general.to.key)
    const isToEVM = useSelector(state => state.general.to).type === 'EVM'
    const NFTListView = useSelector(state => state.general.NFTListView)
    const nfts = useSelector(state => state.general.NFTList)
    const tronWallet = useSelector(state => state.general.tronWallet)
    const account = useSelector(state => state.general.account)
    const maiarProvider = useSelector(state => state.general.maiarProvider)
    const factory = getFactory()
    const approvedNFTList = useSelector(state => state.general.approvedNFTList)
    const selectedNFTList = useSelector(state => state.general.selectedNFTList)
    const receiver = useSelector(state => state.general.receiver)
    const Web3Utils = require("web3-utils");
    const approved = useSelector(state => state.general.approved)
    const [estimateInterval, setEstimateInterval] = useState()
    const [fees, setFees] = useState(0)
    const onMaiar = useSelector(state => state.general.onMaiar)
    const elrondAccount = useSelector(state => state.general.elrondAccount)

    let counter = 0
    
    async function getNFTsList(){
        try {
            const chain = await handleChainFactory(from)
            const factory = await getOldFactory()
            console.log(factory, 'hello')
            const w = tronWallet ? tronWallet : elrondAccount ? elrondAccount : account
            const chainId = ChainData[from].nonce
            const res = await axios.get(`https://nft-lister.herokuapp.com/nfts/${chainId}/${w}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJFUzI1NiJ9.eyJhdXRob3JpdHkiOjI2ODQzNTQ1NSwiaWF0IjoxNjM4MTg3MTk5LCJleHAiOjE2Mzg3OTE5OTl9.aKs8K2V8K_rWqQPshae1EzuAEpPMVWBZakfmyBeeq-nJuiEKb1KBSle1F8LNemXLW_3_4KFwDjZrNOx0zA_GNw'
                }
            })
            console.log(res.data.data)
            // const nfts = await factory.nftList(
            //     chain,    // The chain of interest 
            //     w    // The public key of the NFT owner
            //     );
                const parsedNFTs = await parseNFTS(res.data.data)
                console.log(parsedNFTs,'1231191 parsed')
                dispatch(setBigLoader(false))
                if(parsedNFTs.length){
                    dispatch(setNFTList(parsedNFTs))
                }
                else{
                    console.log('No NFTs...');
                }
            } catch (error) {  
                console.log("...",error); 
            }
            
            console.log("counter", counter, counter++);
    }
    const estimate = async () => {
        try {
            const fromChain = await handleChainFactory(from)
            const toChain = await handleChainFactory(to)
            const wallet = to ==='Tron' ? 'TCCKoPRcYoCGkxVThCaY9vRPaKiTjE4x1C' :
            from === 'Tron' && isToEVM ? '0x5fbc2F7B45155CbE713EAa9133Dd0e88D74126f6'
            : from === 'Elrond' && isToEVM ? '0x5fbc2F7B45155CbE713EAa9133Dd0e88D74126f6'
            : account 
            const fact = await getOldFactory()
            const fee = await fact.estimateFees(fromChain, toChain, selectedNFTList[0], wallet)
            const bigNum = fee.multipliedBy(1.1).decimalPlaces(0).toString();
            dispatch(setBigNumFees(bigNum))
            const fees = await Web3Utils.fromWei(bigNum, "ether")
            setFees(selectedNFTList.length * fees) 
        } catch (err) {
          console.log(err);
        }
    }
    
    const sendEach = async (nft) => {
        const toChain = await handleChainFactory(to)
        const fromChain = await handleChainFactory(from)
        const factory = await getFactory()
        const provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) : ''
        const signer = 
        from === 'Elrond' ? maiarProvider ? maiarProvider : ExtensionProvider.getInstance() :
        from === 'Tron' ? window.tronLink 
        : provider.getSigner(account)
        try {
            if(from === 'Tron') {
                const fact = await getOldFactory()
                console.log(fact, nft)
                const result = await fact.transferNft(
                    fromChain, // The Source Chain.
                    toChain,   // The Destination Chain.
                    nft,       // Or the NFT you have chosen.
                    undefined,    // Or tronlink or maiar.
                    receiver   // The address who you are transferring the NFT to.
                )
                dispatch(setTxnHash(result))
            } else {
                const result = await factory.transferNft(
                    fromChain, // The Source Chain.
                    toChain,   // The Destination Chain.
                    nft,       // Or the NFT you have chosen.
                    signer,    // Or tronlink or maiar.
                    receiver   // The address who you are transferring the NFT to.
                )
                dispatch(setTxnHash(result))
            }

            
        } catch (error) {
            dispatch(setError(error))
            console.log(error);
        }
    }

    const sendAllNFTs = () => {
        if(!loading && approved) {
            setLoading(true)
            approvedNFTList.forEach( nft => {
                sendEach(nft)
            })
        }
  
    }

    useEffect( async () => {
        await getNFTsList()
    }, [])

    useEffect(() => {
        if(selectedNFTList.length > 0) estimate();
        else setFees("0")
        const s = setInterval(() => estimate(), 1000 * 30);
        setEstimateInterval(s)
        return () => clearInterval(s);
    }, [selectedNFTList])

    useEffect(() => {
        clearInterval(estimateInterval)
        estimate()
        const s = setInterval(() => estimate(), 1000 * 30);
        setEstimateInterval(s)
        return () => clearInterval(s)
    }, [to])

    return (
        <div className="NFTaccount" >
            
            <Container className="nftSlectContaine">
                <div className="row">
                    <div className="nftListCol col-lg-8">
                        <div className="mobileOnly">
                            <div className="sendNftTit">
                                <h3>Send NFT</h3>
                            </div>
                            <DestinationChainReload />
                        </div>
                        <div className="nft_selectBox">
                            <NFTlistTop />
                            { NFTListView ? 
                            <NFTlistView /> 
                            : 
                            <NFTgridView/>}
                        </div>
                        <div className="mobileOnly">
                            <Approval getNft={getNFTsList} />
                            <div className="nftSendBtn disenable">
                            <NFTsuccess/>
                            </div>
                        </div>
                    </div>
                    <div className="sendNftCol col-lg-4 desktopOnly">
                        <div className="sendNftBox">
                            <form action="#">
                                <div className="sendNftTit">
                                    <h3>Send NFT</h3>
                                </div>
                                <DestinationChain/>
                                { nfts ? 
                                    <>
                                        <SelectedNFT />
                                        <Approval />
                                        <SendFees fees={fees}/>
                                        <div onClick={sendAllNFTs} className={approved && receiver && !loading ? 'nftSendBtn' : 'nftSendBtn disabled'}  >
                                            <a  className="themBtn">
                                                {loading ? 'Processing' : 'Send' }
                                            </a>
                                        </div>
                                    </>
                                    :
                                    <Comment />
                                }
                            </form>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default NFTaccount;

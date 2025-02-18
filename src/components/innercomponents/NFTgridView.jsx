import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import NFTempty from './NFTempty';
import NFT from './NFT';
import Missing from './Missing';
import { useDispatch } from 'react-redux';
import BigLoader from "../innercomponents/BigLoader"


function NFTgridView() {
    const dispatch = useDispatch()
    const nfts = useSelector(state => state.general.NFTList)
    const selectedNFTs = useSelector(state => state.general.selectedNFTList)
    const search = useSelector(state => state.general.NFTListSearch)
    const placeholders = new Array(nfts ? 9 - nfts.length : 0).fill(0)
    const loader = useSelector(state => state.general.bigLoader)
    
    useEffect(() => { }, [selectedNFTs])
    return (
        <div className="nftListBox">
                { loader ? 
                    <BigLoader />
                :
                    <div className="row">
                        { nfts ? nfts.filter(nft => nft.name?.toLowerCase().includes(search ? search?.toLowerCase() : '') || nft.native.owner.includes(search ? search : '')).map((nft, index) => <NFT nft={nft} index={index} />)
                        : 
                        <NFTempty /> }
                        { nfts && nfts?.length < 10 ? placeholders.map(n => <Missing />) : ''}
                    </div>
                }
        </div>
    )
}

export default NFTgridView;

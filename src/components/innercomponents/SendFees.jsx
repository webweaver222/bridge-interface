import React from 'react'
import { useSelector } from 'react-redux';

function SendFees({ fees }) {
    console.log(fees);
    return (
        <div className="nftFees">
            Fees <span>{fees && fees > 0 ? fees.toFixed(5) : '0'} BNB</span>
        </div>
    )
}

export default SendFees;

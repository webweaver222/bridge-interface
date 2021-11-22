import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Close from '../assets/img/icons/close.svg'

function Alert() {
    const [show, setShow] = useState(true)
    const to = useSelector(state => state.general.to)
    const from = useSelector(state => state.general.state)

    const handleClose = () => {
    }

    useEffect(() => {
        // to && from ? 
    }, [to, from])

    return (
        <div>
            <div className="aleartBox">
                Select Departure Chain and Destiantion to continue bridging
                <span onClick={()=> handleClose()} className="closeBox"><img src={Close} alt="" /></span>
            </div>
        </div>
    )
}

export default Alert
import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import ConfirmationHeader from '../Components/Confirmation/ConfirmationHeader'
import ConfirmationProductList from '../Components/Confirmation/ConfirmationProductList'
import FinalAmount from '../Components/Confirmation/FinalAmount'
import Footer from '../Components/Layout/Footer'

const Confirmation = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-30 flex flex-col items-center justify-start'>
                <ConfirmationHeader />
                <ConfirmationProductList />
                <FinalAmount />
            </div>
            <Footer />
        </div>
    )
}

export default Confirmation
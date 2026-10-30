import React from 'react'
import CheckoutForm from './CheckoutForm'
import CheckoutSummary from './CheckoutSummary'


const CheckoutContainer = () => {
    return (
        <div className="min-h-screen bg-[#080706] text-[#F5F3EF] px-5 md:px-9 py-12">
            <div className="max-w-[1500px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_0.8fr] gap-12 lg:gap-20">
                    <div className="w-full ">
                        <CheckoutForm />
                    </div>

                    <div className="w-full h-fit  lg:border-[#34312D] lg:pl-10">
                        <div className="lg:sticky lg:top-10">
                            <CheckoutSummary />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutContainer
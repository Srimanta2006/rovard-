import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        address: "",
        city: "",
        postcode: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order placed successfully!");
    };
    const inputStyle =
        "w-full bg-transparent border-b border-[#484541] py-8 text-lg text-[#F5F3EF] outline-none placeholder:text-[#77736E] focus:border-[#F15A0A] transition-colors duration-300";

    const labelStyle =
        "text-[10px] tracking-[3px] uppercase text-[#A09B94]";

    const sectionStyle =
        "text-[10px] tracking-[3px] uppercase text-[#F15A0A]";
    return (
        <div>
            <form onSubmit={handleSubmit} className='w-full'>
                <section>
                    <h2 className={sectionStyle}>contact</h2>
                    <div className="mt-1">
                        <label className={labelStyle}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder=""
                            className={inputStyle}
                            required
                        />
                    </div>
                </section>
                <section className='mt-8'>
                    <h2 className={sectionStyle}>shipping</h2>
                    <div className='mt-1'>
                        <label className={labelStyle}>full name</label>
                        <input
                            type="text"
                            name='fullName'
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder=''
                            className={inputStyle}
                            required
                        />
                    </div>
                    <div className='mt-7'>
                        <label className={labelStyle}>address</label>
                        <input
                            type="text"
                            name='address'
                            value={formData.address}
                            onChange={handleChange}
                            placeholder=''
                            className={inputStyle}
                            required
                        />
                    </div>
                    <div className='mt-5 grid grid-cols-2 gap-4'>
                        <div className='mt-3'>
                            <label className={labelStyle}>city</label>
                            <input
                                type="text"
                                name='city'
                                value={formData.city}
                                onChange={handleChange}
                                placeholder=''
                                className={inputStyle}
                                required />
                        </div>
                        <div className='mt-3'>
                            <label className={labelStyle}>postcode</label>
                            <input
                                type="text"
                                name='postcode'
                                value={formData.postcode}
                                onChange={handleChange}
                                placeholder=''
                                className={inputStyle}
                                required />
                        </div>
                    </div>
                </section>
                <section className='mt-8'>
                    <h2 className={sectionStyle}>Payment — use any 16 digits, nothing is charged</h2>
                    <div className='mt-3 flex items-center justify-between'>
                        <div>
                            <label className={labelStyle}>card number</label>
                            <input
                                type="text"
                                name='cardNumber'
                                className={inputStyle}
                                onChange={handleChange}
                                placeholder=''
                                value={formData.cardNumber}
                                required />
                        </div>
                        <div>
                            <label className={labelStyle}>expiry mm/yy</label>
                            <input
                                type="text"
                                name='expiry'
                                className={inputStyle}
                                onChange={handleChange}
                                placeholder=''
                                value={formData.expiry}
                                required />
                        </div>
                        <div>
                            <label className={labelStyle}>cvc</label>
                            <input
                                type="text"
                                name='cvc'
                                className={inputStyle}
                                onChange={handleChange}
                                placeholder=''
                                value={formData.cvc}
                                required />
                        </div>

                    </div>
                </section>
                <button
                    onClick={()=> navigate('/confirmation')}
                    type="submit"
                    className="w-full cursor-pointer mt-9 bg-[#F15A0A] hover:bg-[#FF751F] text-black py-5 text-[11px] font-semibold tracking-[3px] uppercase transition-all duration-300"
                >
                    Place Order
                </button>
            </form>
        </div>
    )
}

export default CheckoutForm
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';

const EditAddress = ({ address }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(address.country);
    const [addressLine, setAddressLine] = useState(address.address);
    const [street, setStreet] = useState(address.street);
    const [city, setCity] = useState(address.city);
    const [state, setState] = useState(address.state);
    const [zipCode, setZipCode] = useState(address.zip_code);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleEditAddress = async (event) => {
        event.preventDefault();

        const editedAddress = {
            country: selectedCountry,
            address: addressLine,
            street: street,
            city: city,
            state: state,
            zip_code: zipCode
        };

        try {
            const response = await axios.put(`your-api-url/${address.id}`, editedAddress);
            console.log(response.data);
            closeModal();
        } catch (error) {
            console.error('Failed to edit address:', error);
        }
    };

    return (
        <>
            <button className="btn btn-sm font-weight-bold text-white mt-1 border-radius-5 btn-shadow-brand hover-up" onClick={openModal}>Edit</button>
            <Modal
                open={modalOpen}
                onClose={closeModal}
                center
                styles={{
                    modal: {
                        width: '80%', // Adjust this value to your liking
                    },
                }}
            >
                <h2 className="p-4">Edit Address</h2>
                <form className="p-4" onSubmit={handleEditAddress}>
                    <div className="form-group">
                        <div className="custom_select">
                            <select className="form-control select-active" value={selectedCountry}
                                    onChange={handleCountryChange}>
                                <option value="">
                                    Select Country
                                </option>
                                <option value="US">
                                    USA (US)
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="country"
                            value={selectedCountry}
                            placeholder="Country *"
                            onChange={e => setSelectedCountry(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="address"
                            value={addressLine}
                            required=""
                            placeholder="Address *"
                            onChange={e => setAddressLine(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            required=""
                            type="text"
                            name="street"
                            value={street}
                            placeholder="Street *"
                            onChange={e => setStreet(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required=""
                            type="text"
                            name="city"
                            value={city}
                            placeholder="City / Town *"
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required=""
                            type="text"
                            name="state"
                            value={state}
                            placeholder="State / County *"
                            onChange={e => setState(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required=""
                            type="text"
                            name="zip_code"
                            value={zipCode}
                            placeholder="Postcode / ZIP *"
                            onChange={e => setZipCode(e.target.value)}
                        />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </Modal>
        </>
    );
};

export default EditAddress;
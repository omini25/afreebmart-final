import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import {server} from "../../config";
import {mainServer} from "../../mainServer";

function AddAddress({ userId, refreshAddresses }) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleAddAddress = async (event) => {
        event.preventDefault();

        const newAddress = {
            country: selectedCountry,
            address: event.target.elements.address.value,
            street: event.target.elements.street.value,
            city: event.target.elements.city.value,
            state: event.target.elements.state.value,
            zip_code: event.target.elements.zip_code.value
        };

        try {
            const response = await axios.post(`${mainServer}/address/${userId}`, newAddress);

            console.log(response.data);

            // Close the modal
            closeModal();

            // Refresh the address list
            refreshAddresses();

        } catch (error) {
            console.error('Failed to add address:', error);
        }
    };

    return (
        <>
            <div className="">
                <button className="btn btn-sm font-weight-bold text-white mt-10 border-radius-5 btn-shadow-brand hover-up" onClick={openModal}>Add Address</button>

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
                    <h2 className="p-4">Add Address</h2>
                    <form className="p-4" onSubmit={handleAddAddress}>
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
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="address"
                                required=""
                                placeholder="Address *"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                required=""
                                type="text"
                                name="street"
                                placeholder="Street *"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                required=""
                                type="text"
                                name="city"
                                placeholder="City / Town *"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                required=""
                                type="text"
                                name="state"
                                placeholder="State / County *"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                required=""
                                type="text"
                                name="zip_code"
                                placeholder="Postcode / ZIP *"
                            />
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <button className="submit submit-auto-width" type="submit">Add Address</button>
                        </div>

                    </form>
                </Modal>
            </div>

        </>
    );
}

export default AddAddress;
import { Modal } from 'react-responsive-modal';
import {useEffect, useState} from "react";
import {server} from "../../config";
import axios from "axios";
import { toast } from 'react-toastify';;

function CreateGroup({ show, onClose }) {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState('');
    const [groupName, setGroupName] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const userId = userInfo.user ? userInfo.user.id : null;

    useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUserInfo) {
            setUserInfo(storedUserInfo);
        }
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${server}/products`); // Replace with your actual API endpoint
                const allProducts = response.data.products;

                // Filter the products based on the group field
                const filteredProducts = allProducts.filter(product => product.group === "1");

                setProducts(filteredProducts);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        fetchProducts();
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${server}/user/create-group/${userId}`, {
                productId: selectedProductId,
                groupName: groupName,
            });

            // Handle the response as needed
            toast.success('Group created successfully');
            onClose();
        } catch (error) {
            console.error("Error submitting form", error);
            toast.error('Error submitting form');
        }
    };



    return (
        <div className="">

            <Modal open={show} onClose={onClose}
                center
                styles={{
                    modal: {
                        width: '60%',
                    },
                }}
            >
                <h2 className="p-4">Create Group</h2>
                <form className="p-4" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <select onChange={e => setSelectedProductId(e.target.value)}>
                            <option>Select Product</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>
                                    {product.product_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <input
                            required=""
                            type="text"
                            name="name"
                            placeholder="Name of group"
                            value={groupName}
                            onChange={e => setGroupName(e.target.value)}
                        />
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <button className="submit submit-auto-width" type="submit">Create Group</button>
                    </div>

                </form>
            </Modal>
        </div>
    );
}

export default CreateGroup;
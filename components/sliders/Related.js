import { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchByCatagory } from "../../redux/action/product";
import SingleProduct from "./../ecommerce/SingleProduct";
import axios from "axios";
import {server} from "../../config";

SwiperCore.use([Navigation]);

const RelatedSlider = ({ vendorId }) => {
    const [related, setRelated] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${server}/products`);
                const vendorProducts = response.data.products.filter(product => product.vendor_id === vendorId);
                setProduct(vendorProducts);
                console.log(response.data.products)
            } catch (error) {
                console.error('Failed to fetch product:', error);
            }
        };

        fetchProduct();
    }, [vendorId]);

    console.log(product)

    console.log(vendorId)

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}

                navigation={{
                    prevEl: ".custom_prev_n",
                    nextEl: ".custom_next_n",
                }}
                className="custom-class"
            >
                {product && product.map((productItem, i) => (
                    <SwiperSlide key={i}>
                        <SingleProduct product={productItem} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
            >
                <span className="slider-btn slider-prev slick-arrow custom_prev_n">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_n">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
            
        </>
    );
};

export default RelatedSlider;

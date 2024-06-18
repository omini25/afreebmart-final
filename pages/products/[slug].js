import React, { useState, useEffect } from "react";
import ProductDetails from "../../components/ecommerce/ProductDetails";
import Layout from '../../components/layout/Layout';
import { server } from "../../server";
import axios from 'axios';

const ProductId = ({ query }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`${server}/product/${query.slug}`);
                setProduct(response.data.product);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(true);
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [query.slug]);

    console.log(product)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: Product not found</div>;
    }

    return (
        <>
            {product && (
                <Layout parent="Home" sub="Shop" subChild={product.product_name}>
                    <div className="container">
                        <ProductDetails product={product} />
                    </div>
                </Layout>
            )}
        </>
    );
};

ProductId.getInitialProps = async ({ query }) => {
    return { query };
};

export default ProductId;

// import React from "react";
// import ProductDetails from "../../components/ecommerce/ProductDetails";
// import Layout from '../../components/layout/Layout';
// import {server} from "../../server";
// import { findProductIndex } from "../../util/util";
// import product from "../../redux/reducer/product";
// import {mainServer} from "../../mainServer";
//
// const ProductId = ({ product }) => {
//
// console.log(product)
//
//     const ProductId = ({ product }) => {
//         const [loading, setLoading] = useState(true);
//         const [error, setError] = useState(false);
//
//         useEffect(() => {
//             if (product) {
//                 setLoading(false);
//             } else {
//                 setLoading(false);
//                 setError(true);
//             }
//         }, [product]);
//
//         if (loading) {
//             return <div>Loading...</div>;
//         }
//
//         if (error) {
//             return <div>Error: Product not found</div>;
//         }
//
//         return (
//             <>
//                 {product && (
//                     <Layout parent="Home" sub="Shop" subChild={product.product_name}>
//                         <div className="container">
//                             <ProductDetails product={product} />
//                         </div>
//                     </Layout>
//                 )}
//             </>
//         );
//     };
// };
//
//
//
// ProductId.getInitialProps = async (context) => {
//     const request = await fetch(`${mainServer}/product/${product.product_name}`);
//     const data = await request.json();
//
//     const slug = context.query.slug;
//     console.log('Slug:', slug);
//
//     const index = findProductIndex(data, slug);
//
//     return { product: data[index] };
// };
//
// console.log(ProductId.getInitialProps)
//
// export default ProductId;

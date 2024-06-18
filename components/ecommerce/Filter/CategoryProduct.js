import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";
import axios from 'axios';
import { useEffect, useState } from 'react';
import {server} from "../../../server";

const CategoryProduct = ({ updateProductCategory }) => {
    const router = useRouter();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${server}/categories`); // Replace with your actual API endpoint
                setCategories(response.data.categories);
            } catch (error) {
                console.error("Error fetching categories", error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${server}/products`); // Replace with your actual API endpoint
                setProducts(response.data.products);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        fetchCategories();
        fetchProducts();
    }, []);

    const selectCategory = (e, category) => {
        e.preventDefault();
        updateProductCategory(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category,
            },
        });
    };

    return (
        <>
            <ul>
                {categories.map((category, i) => {
                    const productCount = products.filter(product => product.category === category.name).length;
                    return (
                        <li key={i} onClick={(e) => selectCategory(e, category.name)}>
                            <a>
                                <img
                                    src="/assets/imgs/theme/icons/category-1.svg"
                                    alt=""
                                />
                                {category.category_name}
                            </a>
                            {/*<span className="count">{productCount}</span>*/}
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct);
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";
import React, {useEffect} from "react";

const CategoryProduct2 = ({ updateProductCategory }) => {




    const router = useRouter();

    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };


    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/shop-fullwidth",
            query: {
                category: category,
            },
        });
    };
    return (
        <>
            <ul>
                <li onClick={(e) => selectCategory(e, "Fresh foods")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-1.svg"
                            alt=""
                        />
                        Fresh Foods
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "Foodie (Hot Food)")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-2.svg"
                            alt=""
                        />
                        Foodie (Hot Food)
                    </a>

                </li>

                <li onClick={(e) => selectCategory(e, "Frozen Foods")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-4.svg"
                            alt=""
                        />
                        Frozen Foods
                    </a>
                    
                </li>

            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct2);

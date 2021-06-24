import useRequest from "@ahooksjs/use-request";
import React, { useEffect, useState } from "react";
import ProductCategory from "../productCategories/ProductCategories";
import Upload from "../upload/UploadPage";

const Dummy = () => {
  const [name, setName] = useState("arief");
  const [status, setStatus] = useState("single");

  const {
    data: product1,
    run: getProduct1
  } = useRequest("https://deuvox.mocklab.io/api/v1/products/1", {
    manual: true,
  });

  const { data: products } = useRequest("https://deuvox.mocklab.io/api/v1/products");

  const buttonOnClick = () => {
    setName("faisal");
  }

  useEffect(() => {
    if (name === "faisal") {
      setStatus("in relationship with amy");
      getProduct1();
    }
  }, [name, getProduct1]);

  return (
    <>
      <p>Product: {JSON.stringify(product1)}</p>
      <p>List of product:</p>
      <ul>
        {products && products.map(product => (
          <ol>{product.name} - Rp {product.price}</ol>
        ))}
      </ul>

      <p>
        {name} - {status}
      </p>
      <button onClick={() => buttonOnClick()}>click me</button>
      <ProductCategory />
      <Upload />
    </>
  );
};

export default Dummy;

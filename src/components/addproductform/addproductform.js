import style from "./addproductform.module.css";
import {
  updateProductDescription,
  updateProductName,
  updateProductCompany,
  updateProductModel,
  updateProductType,
  updateProductPrice,
  updateProductDiscount,
  updateProductVideo,
  updateProductallow,
} from "@/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
const AddProductForm = ({ submitForm, brandList, updateForm }) => {
  let [models, setmodels] = useState(null);
  let dispatch = useDispatch();
  let product_data = useSelector((data) => data.reducer1.product_data);
  console.log(brandList);

  const handleCompanyChange = (company) => {
    console.log("hi");
    const selectedCompanyData = brandList.find((item) => item.name === company);
    setmodels(selectedCompanyData.models);
  };

  useEffect(() => {
    console.log(models);
  }, [models]);

  return (
    <div className={style.main}>
      <div className={style.form}>
        <input
          type={"text"}
          placeholder="name"
          value={product_data.name}
          onChange={(e) => dispatch(updateProductName(e.target.value))}
        />
        <input
          type={"text"}
          placeholder="price"
          value={product_data.price}
          onChange={(e) => dispatch(updateProductPrice(e.target.value))}
        />
        <input
          type={"text"}
          placeholder="discount"
          value={product_data.discount}
          onChange={(e) => dispatch(updateProductDiscount(e.target.value))}
        />
        <input
          type={"text"}
          placeholder="video"
          value={product_data.video}
          onChange={(e) => dispatch(updateProductVideo(e.target.value))}
        />
        <input
          type={"text"}
          placeholder="discription"
          value={product_data.description}
          onChange={(e) => dispatch(updateProductDescription(e.target.value))}
        />

        <select
          value={product_data.company}
          onChange={(e) => {
            dispatch(updateProductCompany(e.target.value));
            handleCompanyChange(e.target.value);
          }}
        >
          <option value={""}>select Company</option>
          {brandList ? (
            brandList.map((data) => (
              <option
                key={data.b_id}
                onClick={() => {
                  console.log(data.models);
                  setmodels(data.models);
                }}
              >
                {data.name}
              </option>
            ))
          ) : (
            <option value={""}>Plz wait</option>
          )}
        </select>

        <select
          value={product_data.model}
          onChange={(e) => dispatch(updateProductModel(e.target.value))}
        >
          <option value={""}>select Model</option>
          {models ? (
            models.map((data) => <option key={data}>{data}</option>)
          ) : (
            <option value={""}>Plz select company first</option>
          )}
        </select>
        <select
          value={product_data.type}
          onChange={(e) => dispatch(updateProductType(e.target.value))}
        >
          <option value={""}>select type</option>
          <option>Internal Components</option>
          <option>Display & Screens</option>
          <option>Battery</option>
          <option>Body & Housings</option>
        </select>
        <button
          onClick={product_data.eventType == "add" ? submitForm : updateForm}
        >
          Submit
        </button>
        <button
          onClick={() => {
            dispatch(updateProductallow());
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddProductForm;

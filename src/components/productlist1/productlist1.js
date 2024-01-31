import style from "./productlist1.module.css";
const ProductList1 = ({ data }) => {
  return (
    <div className={style.main}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td
              style={{
                border: "1px solid red",
                textAlign: "left",
                padding: "8px",
              }}
            >
              Product
            </td>
            <td
              style={{
                border: "1px solid red",
                textAlign: "left",
                padding: "8px",
              }}
            >
              Price
            </td>
            <td
              style={{
                border: "1px solid red",
                textAlign: "left",
                padding: "8px",
              }}
            >
              Quantity
            </td>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((data) => {
                return (
                  <tr>
                    <td
                      style={{
                        border: "1px solid red",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      {data.product}
                    </td>
                    <td
                      style={{
                        border: "1px solid red",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      {data.price}
                    </td>
                    <td
                      style={{
                        border: "1px solid  red",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      {data.quantity}
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
};
export default ProductList1;

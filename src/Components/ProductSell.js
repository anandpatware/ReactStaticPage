import { ProductionQuantityLimits } from "@mui/icons-material";

function Productsell() {
  return (
    <>
      <div
        className="box"
        style={{
          width: "100%",
        }}
      >
        <div
          className="top"
          style={{
            width: "92.5%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "50px",
            marginTop: "40px",
            backgroundColor: "white",
            padding: "10px",
            boxShadow: "0px 0px 20px gray",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>ProductSells</h3>
          <input
            type="text"
            placeholder="Search"
            style={{
              width: "25%",
              marginLeft: "400px",
              height: "15px",
            }}
          />
          <select style={{ width: "20%", height: "45px" }}>
            <option value="hey">leave</option>
            <option value="last 30days">last 30 days</option>
            <option value="last 30days">last 30 days</option>
          </select>
        </div>
        <table
          style={{
            padding: "50px",
            marginLeft: "50px",
            backgroundColor: "white",
            boxShadow: "0px 0px 20px gray",
            width: "92.5%",
            height: "100px",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        >
          <tr>
            <th>Product Name</th>
            <th>Stock </th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
          <tr>
            <th>ABstract 3d</th>
            <th>32 in stock</th>
            <th>$ 45.99</th>
            <th>20</th>
          </tr>
        </table>
      </div>
    </>
  );
}
export default Productsell;

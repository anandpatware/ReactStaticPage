import { FcIdea } from "react-icons/fc";
function Customer() {
  return (
    <>
      <div
        className="container"
        style={{
          marginLeft: "40px",
          marginTop: "20px",
          padding: "20px",
          width: "374px",
          height: "374px",
          backgroundColor: "white",
          boxShadow: "0px 0px 20px gray",
          borderRadius: "15px",
        }}
      >
        <div
          className="top"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>Customer</h3>
          <p style={{ color: "gray" }}>customer that can but product</p>
        </div>
        <FcIdea
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "200px",
            marginLeft: "70px",
          }}
        />
      </div>
    </>
  );
}
export default Customer;

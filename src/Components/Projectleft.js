import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { BiCube } from "react-icons/bi";
import { TfiWallet } from "react-icons/tfi";
import { CiDiscount1 } from "react-icons/ci";
import { LuBadgeHelp } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { TbHexagonLetterO } from "react-icons/tb";
function Projectleft() {
  return (
    <>
      <div
        className="left-section"
        style={{
          backgroundColor: "navy",
          width: "20%",
          height: "100vh",
          position: "fixed",

          fontSize: "25px",
        }}
      >
        <ol
          style={{
            width: "100%",
            margin: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            gap: "15px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              color: "lightgray",
              marginBottom: "30px",
              marginTop: "20px",
              display: "flex",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <TbHexagonLetterO />
            <span style={{ fontSize: "25px" }}>Dashboard</span>
          </div>
          <div className="option">
            <li
              className="list"
              style={{
                width: "100%", // You can adjust this width as needed
                color: "lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 10px", // Add padding to your list items
              }}
            >
              <RxDashboard />
              <span style={{ marginLeft: "20px", fontSize: "20px" }}>
                Dashboard
              </span>
            </li>
          </div>

          <div className="option">
            <li
              className="list"
              style={{
                width: "100%", // You can adjust this width as needed
                color: "lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 10px", // Add padding to your list items
              }}
            >
              <BiCube />{" "}
              <span style={{ marginLeft: "20px", fontSize: "20px" }}>
                Product
              </span>
              <IoIosArrowForward style={{ marginLeft: "136px" }} />
            </li>
          </div>
          <div className="option">
            <li
              className="list"
              style={{
                width: "100%", // You can adjust this width as needed
                color: "lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 10px", // Add padding to your list items
              }}
            >
              <CgProfile />
              <span style={{ marginLeft: "20px", fontSize: "20px" }}>
                Customer
              </span>
              <IoIosArrowForward style={{ marginLeft: "116px" }} />
            </li>
          </div>
          <div className="option">
            <li
              className="list"
              style={{
                width: "100%", // You can adjust this width as needed
                color: "lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 10px", // Add padding to your list items
              }}
            >
              <LuBadgeHelp />{" "}
              <span style={{ marginLeft: "20px", fontSize: "20px" }}>Help</span>
              <IoIosArrowForward style={{ marginLeft: "165px" }} />
            </li>
          </div>
          <div className="option">
            <li
              className="list"
              style={{
                width: "100%", // You can adjust this width as needed
                color: "lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 10px", // Add padding to your list items
              }}
            >
              <CiDiscount1 />
              <span style={{ marginLeft: "20px", fontSize: "20px" }}>
                Promote
              </span>
              <IoIosArrowForward style={{ marginLeft: "130px" }} />
            </li>
          </div>
          <div className="option">
            <li
              className="list"
              style={{
                width: "100%", // You can adjust this width as needed
                color: "lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 10px", // Add padding to your list items
              }}
            >
              <TfiWallet />{" "}
              <span style={{ marginLeft: "20px", fontSize: "20px" }}>
                Income
              </span>
              <IoIosArrowForward style={{ marginLeft: "140px" }} />
            </li>
          </div>
        </ol>
        <div
          className="profile"
          style={{
            display: "flex",
            backgroundColor: "#4d88ff",
            opacity: "50",
            justifyContent: "space-between",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "320px",
            borderRadius: "15px",
            padding: "10px",
          }}
        >
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            style={{ borderRadius: "50%", height: "60px", marginLeft: "20px" }}
          />
          <div
            className="des"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              gap: "0px",
            }}
          >
            <h5 style={{ color: "white", margin: "0px", padding: "0px" }}>
              Anand
            </h5>
            <p
              style={{
                color: "gray",
                margin: "0px",
                padding: "0px",
                fontSize: "15px",
              }}
            >
              Project Manager
            </p>
          </div>
          <IoIosArrowForward
            style={{
              color: "gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              marginTop: "15px",
              marginRight: "10px",
            }}
          />
        </div>
      </div>
    </>
  );
}
export default Projectleft;

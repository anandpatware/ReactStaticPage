function Bargraph() {
  return (
    <>
      <div
        className="box"
        style={{
          marginLeft: "45px",
          marginTop: "20px",
          padding: "20px",
          width: "1000px",
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
            alignItems: "start",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>Overview</h3>
          <p style={{ color: "gray" }}>Monthly Earning</p>
        </div>
        <div
          className="bottom"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "end",
          }}
        >
          <div className="jan">
            <div
              className="bar"
              style={{
                backgroundColor: "lightgray",
                width: "40px",
                height: "130px",
                borderRadius: "15px",
              }}
            ></div>
            <p>jan</p>
          </div>
          <div className="feb">
            <div
              className="bar"
              style={{
                backgroundColor: "lightgray",
                width: "40px",
                height: "120px",
                borderRadius: "15px",
              }}
            ></div>
            <p>feb</p>
          </div>

          <div className="mar">
            <div
              className="bar"
              style={{
                backgroundColor: "lightgray",
                width: "40px",
                height: "110px",
                borderRadius: "15px",
              }}
            ></div>
            <p>Mar</p>
          </div>
          <div className="apr">
            <div
              className="bar"
              style={{
                backgroundColor: "lightgray",
                width: "40px",
                height: "90px",
                borderRadius: "15px",
              }}
            ></div>
            <p>Apr</p>
          </div>
          <div className="may">
            <div
              className="bar"
              style={{
                backgroundColor: "lightgray",
                width: "40px",
                height: "30px",
                borderRadius: "15px",
              }}
            ></div>
            <p>May</p>
          </div>
          <div className="june">
            <div
              className="bar"
              style={{
                backgroundColor: "lightgray",
                width: "40px",
                height: "110px",
                borderRadius: "15px",
              }}
            ></div>
            <p>June</p>
          </div>
          <div className="july">
            <div
              className="bar"
              style={{
                backgroundColor: "lightgray",
                width: "40px",
                height: "120px",
                borderRadius: "15px",
              }}
            ></div>
            <p>July</p>
          </div>
          <div className="aug">
            <div
              className="bar"
              style={{
                backgroundColor: "lightgray",
                width: "40px",
                height: "180px",
                borderRadius: "15px",
              }}
            ></div>
            <p>Aug</p>
          </div>
          <div className="sep">
            <div
              className="bar"
              style={{
                backgroundColor: "lightgray",
                width: "40px",
                height: "10px",
                borderRadius: "15px",
              }}
            ></div>
            <p>Sep</p>
          </div>
          <div className="oct">
            <div
              className="bar"
              style={{
                backgroundColor: "blue",
                width: "40px",
                height: "140px",
                borderRadius: "15px",
              }}
            ></div>
            <p>Oct</p>
          </div>
          <div className="nov">
            <div
              className="bar"
              style={{
                backgroundColor: "lightgray",
                width: "40px",
                height: "90px",
                borderRadius: "15px",
              }}
            ></div>
            <p>Nov</p>
          </div>
          <div className="dec">
            <div
              className="bar"
              style={{
                backgroundColor: "lightgray",
                width: "40px",
                height: "230px",
                borderRadius: "15px",
              }}
            ></div>
            <p>Dec</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bargraph;

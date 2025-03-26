import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setExtractedData } from "../Redux/extractorSlicer";

function Home() {
  const extracted = useSelector((state) => state.extData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [instaLink, setInstaLink] = useState("")
  const [isExtracting, setIsExtracting] = useState(false)

  const handleChange = (e) =>{
    console.log(e.target.value)
    setInstaLink(e.target.value)
  }

  const fetchData = async () => {
    setIsExtracting(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/extract", {
        method: "POST", // 🔹 Use POST method
        headers: {
          "Content-Type": "application/json", // 🔹 Specify JSON content type
        },
        body: JSON.stringify({
          url : instaLink
        }), // 🔹 Convert the object to JSON
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log("Response Data 1 :", data);
      dispatch(setExtractedData(data.insta))

      // 🔹 Navigate after successful API call
      navigate("/generate");
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsExtracting(false);
    }
  };


  return (
    <div className="container" style={{ flex: 1 , display:"flex", minHeight:'82vh'}}>
      <div className="row">
        <div className="col d-flex flex-column justify-content-center p-4">
          <h2 style={{fontSize:"1.2rem"}}>GET ATTRACTIVE PRODUCT SUMMARIES WITH ONE TAP</h2>
          <h1
            className="text-left"
            style={{
              fontSize: "75px",
              fontFamily: "voklhov",
              fontWeight: "bold",
            }}
          >
            <div>Share ! We </div>
            <div>got you covered</div>
            <div>with our catchy</div>
            <div>Information!</div>
          </h1>
          <p>
            This tool helps you streamline your e-commerce product uploads.
            Simply provide a link to any product-related social media post, and
            we’ll fetch the essential product details. Save time on manual
            entries and ensure accurate listings across platforms
          </p>
        </div>
        <div className="col d-flex flex-column justify-content-center p-4">
          <div>
          <h2>Link to your post</h2>
          <p>Provide atleast one link</p>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={instaLink}
              onChange={handleChange}
              placeholder="instagram.com"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="facebook.com"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="twitter.com"
            />
          </div>
          <button className="btn btn-primary" type="button" onClick={fetchData} disabled={isExtracting}>
            {
              isExtracting? <><span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status"> Loading...</span></> : "Submit"
            }
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDesc, setTitle, setKeyword } from "../Redux/generatedSlicer";
import { Link } from "react-router-dom";

function Selection() {
  const generated = useSelector((state) => state.generated);
  const extracted = useSelector((state) => state.extData);
  const dispatch = useDispatch();

  const [Suggest, setSuggest] = useState({
    title: "",
    desc: "",
  });
  const [Final, setFinal] = useState({
    title: false,
    desc: false,
  });
  const [Loading, setLoading] = useState({
    title: true,
    desc: true,
  });

  const handleChange = (e) => {
    setSuggest(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    const name = e.currentTarget.name;

    setLoading({
      ...Loading,
      [name]: true,
    });

    console.log("handleclick")
    if ([name] == "title") {

      console.log("fetching title"); 

      const fetchTitle = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8001/head", {
            method: "POST", // 🔹 Use POST method
            headers: {
              "Content-Type": "application/json", // 🔹 Specify JSON content type
            },
            body: JSON.stringify({
              userquestion : "caption : " + extracted.insta.caption + "\nPara : " + extracted.insta.caption,
              descques : Suggest.title
            }), // 🔹 Convert the object to JSON
          });
    
          if (!response.ok) throw new Error("Network response was not ok");
    
          const data = await response.json();
          console.log("Response Data:", data);
          dispatch(setTitle(data.heading));
    
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };

      fetchTitle();

    } else if ([name] == "desc") {
      
      console.log("fetching desc")

      const fetchDesc = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8001/desc", {
            method: "POST", // 🔹 Use POST method
            headers: {
              "Content-Type": "application/json", // 🔹 Specify JSON content type
            },
            body: JSON.stringify({
              userquestion : "caption : " + extracted.insta.caption + "\nPara : " + extracted.insta.caption,
              descques : Suggest.desc
            }), // 🔹 Convert the object to JSON
          });
    
          if (!response.ok) throw new Error("Network response was not ok");
    
          const data = await response.json();
          console.log("Response Data:", data);
          dispatch(setDesc(data.desc));
    
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
      
      fetchDesc();

    }


    setTimeout(() => {
      setLoading({
        ...Loading,
        [name]: false,
      });
    }, 3000);
  };

  const hasFetched = useRef(false);


  useEffect(() => {
    if (hasFetched.current) return; // ✅ Prevent duplicate fetch calls
    hasFetched.current = true;

    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8001/keyword", {
          method: "POST", // 🔹 Use POST method
          headers: {
            "Content-Type": "application/json", // 🔹 Specify JSON content type
          },
          body: JSON.stringify({
            userquestion : "caption : " + extracted.insta.caption + "\nPara : " + extracted.insta.caption
          }), // 🔹 Convert the object to JSON
        });
  
        if (!response.ok) throw new Error("Network response was not ok");
  
        const data = await response.json();
        console.log("Response Data 2 :", data);

        dispatch(setDesc(data.desc));
        dispatch(setKeyword(data.keyword));
        dispatch(setTitle(data.heading));

        setLoading(false)

      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
    console.log("fetch ran once ")
  
  }, [extracted.insta.caption])
  

  return (
    <div style={{ minHeight: "82vh" }}>
      <div className="container">
        <div className="row my-4">
          <div>
            <h3>Generated Title</h3>
            {Loading.title ? (
              <div>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="card">
                  <div className="card-body">
                    <p>{generated.title}</p>
                  </div>
                </div>

                {!Final.title?
                (<div className="my-3">
                  <label htmlFor="title_suggestion" className="form-label">
                    You can write you suggestion below
                  </label>
                  <textarea
                    className="form-control"
                    id="title_suggestion"
                    rows="2"
                    style={{ resize: "none" }}
                    name="title"
                    value={Suggest.title}
                    onChange={handleChange}
                  ></textarea>
                </div>):(<> </>)
                }
              </div>
            )}
            <button
              type="button"
              className="btn btn-primary"
              name="title"
              disabled={Loading.title || Final.title}
              onClick={handleClick}
            >
              <i className="bi bi-arrow-clockwise"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary mx-4"
              name="title"
              disabled={Loading.title || Final.title}
              onClick={(e)=>{setFinal({...Final , title: true})}}
            >
              <i className="bi bi-check2"></i>
            </button>
          </div>
        </div>

        <div className="row my-4">
          <div>
            <h3>Generated Description</h3>
            {Loading.desc ? (
              <div>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="card">
                  <div className="card-body">
                    <p>{generated.description}</p>
                  </div>
                </div>
                {!Final.desc?
                (<div className="my-3">
                  <label htmlFor="disc_suggestion" className="form-label">
                    You can write you suggestion below
                  </label>
                  <textarea
                    className="form-control"
                    id="disc_suggestion"
                    rows="2"
                    style={{ resize: "none" }}
                    name="desc"
                    value={Suggest.desc}
                    onChange={handleChange}
                  ></textarea>
                </div>):(<></>)}
              </div>
            )}

            <button
              type="button"
              className="btn btn-primary"
              name="desc"
              disabled={Loading.desc || Final.desc}
              onClick={handleClick}
            >
              <i className="bi bi-arrow-clockwise" name="desc"></i>
            </button>

            <button
              type="button"
              className="btn btn-primary mx-4"
              name="desc"
              disabled={Loading.desc || Final.desc}
              onClick={(e)=>{setFinal({...Final , desc: true})}}
            >
              <i className="bi bi-check2"></i>
            </button>
          </div>
        </div>
      
            <Link to='/ImgSelect'>
      <button
              type="button"
              className="btn btn-primary mx-4"
              disabled={!Final.title | !Final.desc}
              
            >
              NEXT
            </button>
            </Link>
            </div>
    </div>
  );
}

export default Selection;

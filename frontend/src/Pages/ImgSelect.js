import React, { useEffect,useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAddImage } from "../Redux/extractorSlicer";
// import { persistor } from "../Redux/store";

const ImageCard = ({ imageUrl, title, id, onCheck }) => {
  return (
    <div
      key={id}
      className="card position-relative m-2"
      style={{ width: "16rem" }}
    >
      <input
        type="checkbox"
        className="position-absolute"
        style={{ top: "10px", right: "10px", width: "20px", height: "20px" }}
        onChange={(e) => onCheck(id, imageUrl, e.target.checked)}
      />
      <img
        src={`http://127.0.0.1:8002/images/${imageUrl}`}
        className="card-img"
        alt={title}
      />
      {/* <img src={`/images/${imageUrl}`} className="card-img" alt={title} /> */}
    </div>
  );
};

const ImgSelect = () => {
  const imageSelected = useSelector((state) => state.extData);
  const generated = useSelector((state) => state.generated);
  const dispatch = useDispatch();
  const [data2, setData2] = useState(null)
  const hasFetched = useRef(false);
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots + 1) % 8);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {

    // persistor.purge(); // Clears the persisted storage
    // localStorage.clear(); // Optional: Clears all local storage
    
    if (hasFetched.current) return;
    hasFetched.current = true;
    
    const keywords = generated.keywords.split(", ").map((item) => item.trim());
    console.log(imageSelected);

    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8002/imgext", {
          method: "POST", // 🔹 Use POST method
          headers: {
            "Content-Type": "application/json", // 🔹 Specify JSON content type
          },
          body: JSON.stringify({
            keywords: keywords,
            vids: imageSelected.insta.vidspath,
            input: "frames",
            output: "extractor",
          }), // 🔹 Convert the object to JSON
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data1 = await response.json();

        let uniqueId = 1;

        const convertedData = Object.entries(data1).map(([key, images]) => ({
          category: `Group ${parseInt(key) + 1}`,
          items: images.map((image) => ({
            id: uniqueId++,
            imageUrl: image,
            title: image.replace("cropped_", "").replace(".jpg", ""),
          })),
        }));

        setTimeout(() => {
          setData2(convertedData)
        }, 3000);

        console.log("response data 3 : " , convertedData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
    console.log("fetch ran once ");
  }, []);

  const handleCheck = (id, imageUrl, isChecked) => {
    dispatch(setAddImage({ id, imageUrl, isChecked }));
  };

  return (
    <div className="container text-center" style={{minHeight:'82vh'}}>
      
      {data2==null? 
    <div className="d-flex justify-content-center align-items-center" style={{minHeight:'82vh'}}>
    <h4 className="text-primary" style={{ width: "100px", textAlign: "center" }}>
      Loading{'.'.repeat(dots).padEnd(2, '.')}
    </h4>
  </div>
      :
      data2.map((category) => (
        <div key={category.category} className="container">
          <h3>{category.category}</h3>
          <div className="row row-cols-auto">
            {category.items.map((card) => (
              <div key={card.id} className="col container">
                <ImageCard key={card.id} {...card} onCheck={handleCheck} />
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link to="/product">
      {data2 !== null && 
        <button type="button" className="btn btn-primary m-4">
          NEXT
        </button>}
      </Link>
      {/* <pre>{JSON.stringify(checkedCards, null, 2)}</pre> */}
    </div>
  );
};

export default ImgSelect;

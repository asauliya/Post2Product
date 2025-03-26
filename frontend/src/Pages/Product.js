import React from 'react'
import ImageCarousel from '../Components/ImageCarousel';
import Tabs from '../Components/Tabs';
import ProductDescription from '../Components/ProductDescription';
import ProductSpecs from '../Components/ProductSpecs';
import { useSelector } from "react-redux";

function Product() {
  const imageSelected = useSelector((state) => state.extData);

  const tabData = [
    {
      label: "Specification",
      content: (
        <ProductSpecs/>
      )
    },
    {
      label: "Additional Informatoin",
      content: (
        <ProductSpecs/>
      )
    },
    {
      label: "Contact",
      content: (
        <ProductSpecs/>
      )
    }
  ];

  return (
<div className="container" style={{minHeight:'82vh'}}>
  <div className="row my-4" >
    <div className="col-sm-6"><ImageCarousel images={imageSelected.images}/></div>
    <div className="col-sm-4"> <ProductDescription/> </div>
  </div>
  <div className="row my-4">
  <Tabs tabs={tabData} />
  </div>
</div>
  )
}

export default Product

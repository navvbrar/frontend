import React, { useEffect, useContext } from "react";
import Productitem from "./productitem";
import productcontext from "../context/Productcontext";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Search() {
  const {  searchitem, searchproduct } =
    useContext(productcontext);
  const navigation = useNavigate();
  const [parameter] = useSearchParams();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      var a;
      let endpoint;
      if (parameter.get("name")) {
        a = parameter.get("name");

        endpoint = "?name=";
        searchitem(endpoint, a);
      } else if (parameter.get("category")) {
        endpoint = "?category=";
        a = parameter.get("category");
        searchitem(endpoint, a);
      }
    } else {
      navigation("/signup");
    }
  }, [parameter]);

  return (
    <>
      <div className=" container row my-3 mx-4">
        <div className="container mx-3">
          <h3 style={{ margin: "50px 400px" }}>
            {searchproduct.length === 0 && "product not found"}
          </h3>
        </div>
        {searchproduct.map((allproduct) => {
          return <Productitem key={searchproduct._id} products={allproduct} />;
        })}
      </div>
    </>
  );
}

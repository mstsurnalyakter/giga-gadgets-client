import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { baseURL } from "../utilitis/Url";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const MyCartPage = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  // console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/myProduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);



  return (
    <div className="gadgetContainer pt-10">
      {item?.map((p) => (
        <div key={p._id} className="p-2 border-2">
          <h1>Name:{p?.name}</h1>
          <h1>Price:{p.price}</h1>
          <Link to={`/products/${p._id}`}>
            <button className="btn mr-2">Update</button>
          </Link>
          <button className="btn">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MyCartPage;

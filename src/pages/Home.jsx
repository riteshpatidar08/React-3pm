import React, { useEffect } from 'react';
import { useNavigate , NavLink } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {

    fetch('https://fakestoreapi.com/products/1')
      .then((res) => res.json())
      .then((json) => {
        // navigate('/trending');
        console.log(json);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-10 text-lime-500">
        HomePage
      </h1>


      <button
        onClick={handleClick}
        className="px-5 py-2 bg-indigo-500 rounded-sm text-white"
      >
        Back
      </button>
    </div>
  );
}

export default Home;

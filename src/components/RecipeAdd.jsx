import axios from "axios";
import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router";

const RecipeAdd = () => {
  const [allrecipes, setAllRecipes] = useState([]);
  const [val, setVal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/recipes`);
        console.log(response.data);
        setAllRecipes(response.data);
        setVal(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);
  return (
    <div className="bg-gray-900 w-screen min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-screen justify-center mb-4">
          <div className="flex-1 flex justify-end">
            <h1 className="text-white text-5xl ">Recipes</h1>
          </div>
          <div
            className="flex-1 flex justify-end items-center mr-8"
            onClick={() => navigate("/addyourrecipe")}
          >
            <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Add Recipe
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-wrap ">
          {val ? (
            allrecipes.map((recipe) => {
              return (
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
                  <div
                    className="max-w-sm m-4  border  rounded-lg shadow bg-gray-800 border-gray-700"
                    onClick={() =>
                      navigate(`viewrecipe/${recipe._id}`, {
                        state: { recipe },
                      })
                    }
                  >
                    <div className="h-[300px]">
                      <img
                        className="rounded-t-lg w-full h-full"
                        src={recipe.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                          {recipe.name}
                        </h5>
                      </a>
                      <div className="mb-3 h-[200px] font-normal text-gray-400 overflow-auto">
                        {recipe.instructions}
                      </div>
                      <a className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Click to know more
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </Tilt>
              );
            })
          ) : (
            <div role="status" className="mt-20">
              <svg
                aria-hidden="true"
                class="inline w-10 h-10text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeAdd;

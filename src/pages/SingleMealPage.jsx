import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import ReactPlayer from "react-player/youtube";

const SingleMealPage = () => {
  const { mealId } = useParams();
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const finalUrl = url + mealId;
  const [isLoading, setIsLoading] = useState();
  const [food, setFoods] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const {
      data: { meals },
    } = await axios(finalUrl);
    if (meals) {
      setFoods(meals[0]);
    } else {
      setFoods(null);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [mealId]);

  if (isLoading) {
    return <Loading />;
  }

  if (!food) {
    return (
      <h2 className="text-success my-5 text-center">NO MEAL TO DISPLAY</h2>
    );
  }
  return (
    <div className="container mt-2">
      <div>
        <img
          src={food.strMealThumb}
          alt={food.strMeal}
          className="w-100"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div>
          <p className="mt-3">
            <span className="bg-success text-white p-2 me-2 rounded-2">
              Name:
            </span>
            {food.strMeal}
          </p>
          <p>
            <span className="bg-success text-white p-2 me-2 rounded-2">
              Category:
            </span>
            {food.strCategory}
          </p>
          <p>
            <span className="bg-success text-white p-2 me-2 rounded-2">
              Tags:
            </span>
            {food.strTags}
          </p>
          <p>
            <span className="bg-success text-white p-2 me-2 rounded-2">
              Area:
            </span>
            {food.strArea}
          </p>
          <p className="lh-lg">
            <span className="bg-success text-white p-2 me-2 rounded-2 ">
              Instructions:
            </span>
            {food.strInstructions}
          </p>
          <p className="lh-lg">
            <span className="bg-success text-white p-2 me-2 rounded-2 ">
              Video Instructions:
            </span>
          </p>
          <div>
            <ReactPlayer
              url={food.strYoutube}
              width={"100%"}
              height={"450px"}
              controls={true}
              muted={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMealPage;

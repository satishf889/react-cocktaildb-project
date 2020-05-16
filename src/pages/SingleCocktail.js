import React from "react";
//useParams is the Hook to get url parameters
import { useParams } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();
  return <h1>single cocktail page id : {id}</h1>;
}

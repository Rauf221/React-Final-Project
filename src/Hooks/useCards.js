// src/hooks/useCards.js
import { useQuery } from "@tanstack/react-query";
import {
  fetchLargeCards,
  fetchMediumCards,
  fetchSmallCards,
  fetchSection2Cards,
  fetchSection3Small,
} from "../Services/apiService.js"; 

export const useLargeCards = () => {
  return useQuery({
    queryKey: ["largeCards"],
    queryFn: fetchLargeCards,
  });
};

export const useMediumCards = () => {
  return useQuery({
    queryKey: ["mediumCards"],
    queryFn: fetchMediumCards,
  });
};

export const useSmallCards = () => {
  return useQuery({
    queryKey: ["smallCards"],
    queryFn: fetchSmallCards,
  });
};

export const useSection2Cards = () => {
  return useQuery({
    queryKey: ["section2Cards"],
    queryFn: fetchSection2Cards,
  });
};

export const useSection3Small = () => {
  return useQuery({
    queryKey: ["section3small"],
    queryFn: fetchSection3Small,
  });
};

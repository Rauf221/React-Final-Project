import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchLargeCards,
  fetchMediumCards,
  fetchSmallCards,
  fetchSection2Cards,
  fetchSection3Small,
  fetchMediumVideoCards,
  fetchSection4Small,
  fetchPhonesTechLarge,
  fetchSection4SmallSide,
  deleteData,
  updateData
} from "../Services/apiService";


export const useLargeCards = () => useQuery({ queryKey: ["largeCards"], queryFn: fetchLargeCards });
export const useMediumCards = () => useQuery({ queryKey: ["mediumCards"], queryFn: fetchMediumCards });
export const useSmallCards = () => useQuery({ queryKey: ["smallCards"], queryFn: fetchSmallCards });
export const useSection2Cards = () => useQuery({ queryKey: ["section2Cards"], queryFn: fetchSection2Cards });
export const useSection3Small = () => useQuery({ queryKey: ["section3small"], queryFn: fetchSection3Small });
export const useMediumVideoCards = () => useQuery({ queryKey: ["mediumVideoCards"], queryFn: fetchMediumVideoCards });
export const useSection4Small = () => useQuery({ queryKey: ["section4Small"], queryFn: fetchSection4Small });
export const usePhonesTechLarge = () => useQuery({ queryKey: ["phonestechlarge"], queryFn: fetchPhonesTechLarge });
export const useSection4SmallSide = () => useQuery({ queryKey: ["section4smallside"], queryFn: fetchSection4SmallSide });

export const useDeleteCard = (queryKey) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteData(`/section2Cards/${id}`),
    onSuccess: () => queryClient.invalidateQueries([queryKey]), 
  });
};

export const useUpdateCard = (queryKey) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => updateData(`/section2Cards/${id}`, data),
    onSuccess: () => queryClient.invalidateQueries([queryKey]), 
  });
};

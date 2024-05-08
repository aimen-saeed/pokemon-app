import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL_FOR_API,
  }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: () => "/",
    }),
    getMoreDetails: builder.query({
      query: (url) => url,
    }),
  }),
});

export const { useGetAllPokemonQuery, useGetMoreDetailsQuery } = pokemonApi;
export const { reducer: pokemonApiReducer } = pokemonApi;

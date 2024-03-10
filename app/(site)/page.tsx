"use client";

import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import PaginationSection from "@/components/PaginationSection";

interface MovieProps {
  id: string;
  title: string;
  poster_path: string;
  release_date: number;
  totalItem: string;
}

export default function Home() {
  const [movie, setMovie] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const fetchMovie = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODcxMzYzODkzZjZkOWVmNWM2YzA1NDFkNmQ4M2IzYiIsInN1YiI6IjY1NjU5YmM4MTU2Y2M3MDBlYmMwZDEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujJbbgrjNjTiP4cM_ITOPJe0o3unx3aV6UaG00NBzb4",
          },
        }
      );

      const data = await res.json();
      if (data && data.results && data.results.length) {
        setMovie(data.results);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = movie.slice(firstItemIndex, lastItemIndex);

  let pages = [];
  const totalItem = movie.length;
  for (let i = 0; i <= Math.ceil(totalItem / itemsPerPage); i++) {
    pages.push(i);
  }



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-neutral-900  h-fit w-full overflow--hidden ">
          <Header className="rounded-lg">
            <h1 className="text-white text-3xl font-bold">
              Explore your Favourite Movie !
            </h1>
          </Header>
          <div className="mt-7 pb-3  h-full gap-10 2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-3  lg:grid lg:grid-cols-2 lg:gap-x-12 md:grid md:grid-cols-2  sm:grid sm:grid-cols-2  place-items-center px-6 min-[330px]:grid min-[330px]:grid-cols-1 ">
            {currentItems.map((item) => (
              <Card  key={item.id} className="w-[290px]  h-[310px] border border-neutral-600 shadow-2xl bg-neutral-800 ">
                <CardHeader>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-full h-[160px] object-contain aspect-auto rounded-xl"
                  />
                </CardHeader>
                <CardFooter className="flex flex-col gap-y-2">
                  <h1 className="text-white font-semibold text-lg">
                    {item.title}
                  </h1>
                  <h3 className="text-neutral-400 text-base">
                    {item.release_date}
                  </h3>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div>
        <PaginationSection
          totalItem={movie.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

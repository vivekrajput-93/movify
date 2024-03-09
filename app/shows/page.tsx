"use client";

import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";

interface ShowsProps {
  id: string;
  name: string;
  poster_path: string;
  first_air_date: number;
}

export default function Shows() {
  const [shows, setShows] = useState<ShowsProps[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchShows = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODcxMzYzODkzZjZkOWVmNWM2YzA1NDFkNmQ4M2IzYiIsInN1YiI6IjY1NjU5YmM4MTU2Y2M3MDBlYmMwZDEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujJbbgrjNjTiP4cM_ITOPJe0o3unx3aV6UaG00NBzb4",
          },
        }
      );

      const data = await res.json();
      if (data && data.results && data.results.length) {
        setShows(data.results);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
          <Header>
            <h1 className="text-white text-3xl font-bold">
              Explore your Favourite Shows !
            </h1>
          </Header>
          <div className="mt-7  h-full gap-10 2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-3  lg:grid lg:grid-cols-2 lg:gap-x-12 md:grid md:grid-cols-2  sm:grid sm:grid-cols-2  place-items-center px-6 min-[330px]:grid min-[330px]:grid-cols-1 ">
            {shows.map((item) => (
              <Card className="w-[250px] h-fit border-none shadow-2xl bg-neutral-800">
                <CardHeader>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-full h-[160px]  rounded-xl"
                  />
                </CardHeader>
                <CardFooter className="flex flex-col gap-y-2">
                  <h1 className="text-white font-semibold text-lg">
                    {item.name}
                  </h1>
                  <h3 className="text-neutral-400 text-base">
                    {item.first_air_date}
                  </h3>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

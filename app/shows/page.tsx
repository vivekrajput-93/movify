"use client";

import Header from "@/components/Header";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import PaginationSection from "@/components/PaginationSection";
import Search from "@/components/Search";
import Link from "next/link";

interface ShowsProps {
  id: string;
  name: string;
  poster_path: string;
  first_air_date: number;
}

export default function Shows() {
  const [shows, setShows] = useState<ShowsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [searchInput, setSearchInput] = useState("");

  const fetchShows = async () => {
    try {
      setLoading(true);
      let apiUrl = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${currentPage}`;

      if (searchInput) {
        apiUrl = `https://api.themoviedb.org/3/search/tv?language=en-US&query=${searchInput}&page=${currentPage}`;
      }

      const res = await fetch(apiUrl, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODcxMzYzODkzZjZkOWVmNWM2YzA1NDFkNmQ4M2IzYiIsInN1YiI6IjY1NjU5YmM4MTU2Y2M3MDBlYmMwZDEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujJbbgrjNjTiP4cM_ITOPJe0o3unx3aV6UaG00NBzb4",
        },
      });

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
  }, [currentPage, searchInput]);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = shows.slice(firstItemIndex, lastItemIndex);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-neutral-900 rounded-lg flex flex-col h-fit w-full overflow-hidden overflow-y-auto">
          <Header>
            <Search setSearchInput={setSearchInput} />
          </Header>
          <div className="mt-7 h-full gap-10 2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 lg:gap-x-12 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 place-items-center px-6 min-[330px]:grid min-[330px]:grid-cols-1">
            {currentItems.map((item) => (
              <Link href={`/shows/${item.id}`} key={item.id} {...item}>
                <Card
                  key={item.id}
                  className="w-[290px]  h-[310px] border border-neutral-600 shadow-2xl bg-neutral-800 "
                >
                  <CardHeader>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-[160px] object-contain  rounded-xl"
                    />
                  </CardHeader>
                  <CardFooter className="flex flex-col gap-y-2">
                    <h1 className="text-white font-semibold text-base">
                      {item.name}
                    </h1>
                    <h3 className="text-neutral-400 text-base">
                      {item.first_air_date}
                    </h3>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <div className="my-14">
            <PaginationSection
              totalItem={shows.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      )}
    </>
  );
}

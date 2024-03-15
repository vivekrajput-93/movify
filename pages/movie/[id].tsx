import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link"; // Import Link
import React, { useEffect, useState } from "react";
import "./MovieInfo.css";
import Button from "@/components/Button";

interface MovieDetails {
  title: string;
  overview: string;
  poster_path: string;
  release_date: number;
  runtime: number;
  vote_average: number;
  status: string;
}

const MovieInfo: React.FC<MovieDetails> = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details only if id exists
        if (id) {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODcxMzYzODkzZjZkOWVmNWM2YzA1NDFkNmQ4M2IzYiIsInN1YiI6IjY1NjU5YmM4MTU2Y2M3MDBlYmMwZDEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujJbbgrjNjTiP4cM_ITOPJe0o3unx3aV6UaG00NBzb4",
              },
            }
          );
          const data = await res.json();
          if (data) {
            setMovieDetails(data);
            console.log(data);
          }
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="Container">
      <div className="card-container">
        <div className="sub-card-container">
          <div className="img-container">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
              alt="movie-name"
              width={300}
              height={300}
              className="w-full h-[160px] object-contain aspect-auto rounded-xl"
            />
          </div>
          <div className="info-container">
            <div className="info-head">
              <span>Name:</span>
              <h4>{movieDetails?.title}</h4>
            </div>
            <div className="info-head">
              <span>Release Date:</span>
              <h4>{movieDetails?.release_date}</h4>
            </div>
            <div className="info-head">
              <span>Runtime :</span>
              <h4>{movieDetails?.runtime} min</h4>
            </div>
            <div className="info-head">
              <span>IMDB Rating:</span>
              <h4>{movieDetails?.vote_average} /10</h4>
            </div>{" "}
            <div className="info-head">
              <span>Status:</span>
              <h4>{movieDetails?.status}</h4>
            </div>
          </div>
        </div>
        <div className="overview-container">
          <p>{movieDetails?.overview}</p>
        </div>
      </div>
      {/* Style Link component to look like a button */}
      <Link href="/">
        <button className="button-container">Home Page</button>
      </Link>
    </div>
  );
};

export default MovieInfo;

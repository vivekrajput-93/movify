import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link"; // Import Link
import React, { useEffect, useState } from "react";
import "../movie/MovieInfo.css";


interface showsDetails {
  original_name: string;
  overview: string;
  poster_path: string;
  first_air_date: number;
  last_air_date:number
  vote_average: number;
  number_of_seasons : number
}

const MovieInfo: React.FC<showsDetails> = () => {
  const [showDetails, setShowsDetails] = useState<showsDetails | null>(null);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details only if id exists
        if (id) {
          const res = await fetch(
            `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODcxMzYzODkzZjZkOWVmNWM2YzA1NDFkNmQ4M2IzYiIsInN1YiI6IjY1NjU5YmM4MTU2Y2M3MDBlYmMwZDEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ujJbbgrjNjTiP4cM_ITOPJe0o3unx3aV6UaG00NBzb4",
              },
            }
          );
          const data = await res.json();
          if (data) {
            setShowsDetails(data);
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
              src={`https://image.tmdb.org/t/p/w500${showDetails?.poster_path}`}
              alt="movie-name"
              width={300}
              height={300}
              className="w-full h-[160px] object-contain aspect-auto rounded-xl"
            />
          </div>
          <div className="info-container">
            <div className="info-head">
              <span>Name:</span>
              <h4>{showDetails?.original_name}</h4>
            </div>
            <div className="info-head">
              <span>Release Date:</span>
              <h4>{showDetails?.first_air_date}</h4>
            </div>
            <div className="info-head">
              <span>End Date :</span>
              <h4>{showDetails?.last_air_date}</h4>
            </div>
            <div className="info-head">
              <span>IMDB Rating:</span>
              <h4>{showDetails?.vote_average} /10</h4>
            </div>{" "}
            <div className="info-head">
              <span>Seasons:</span>
              <h4>{showDetails?.number_of_seasons}</h4>
            </div>
          </div>
        </div>
        <div className="overview-container">
          <p>{showDetails?.overview}</p>
        </div>
      </div>
      {/* Style Link component to look like a button */}
      <Link href="/shows">
        <button className="button-container">Home Page</button>
      </Link>
    </div>
  );
};

export default MovieInfo;

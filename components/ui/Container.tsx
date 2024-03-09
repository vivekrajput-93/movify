import React from "react";
import { Card, CardFooter, CardHeader } from "./card";
import { Skeleton } from "./skeleton";
import Header from "../Header";

const Container = () => {
  return (
    <div className="grid place-items-center">
      <Card className="w-[250px] h-fit border-none place-items-center shadow-2xl bg-neutral-700 ">
        <CardHeader>
          <Skeleton className="w-full h-[160px]  rounded-xl" />
        </CardHeader>
        <CardFooter className="grid">
          <Skeleton className="h-4  flex-grow mt-2" />
          <Skeleton className="h-4 flex-grow mt-2" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Container;

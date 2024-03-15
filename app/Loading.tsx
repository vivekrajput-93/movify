import Header from "@/components/Header";
import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <main className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto  ">
      <Header>
        <Skeleton className="h-8 mt-2 w-fit bg-neutral-900" />
      </Header>
      <div className="w-full h-fit grid grid-cols-4 gap-y-10 mt-7 mb-7 bg-neutral-900  2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-3  lg:grid lg:grid-cols-2 lg:gap-x-12 md:grid md:grid-cols-2  sm:grid sm:grid-cols-2  place-items-center  max-[540px]:grid max-[540px]:grid-cols-1  ">
        {"abcdefgh".split("").map((index) => (
          <Container key={index} />
        ))}
      </div>
    </main>
  );
}

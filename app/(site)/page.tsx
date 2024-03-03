import Header from "@/components/Header";
import ListItem from "@/components/ListItem";


export default function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>

      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Trending Songs</h1>
        </div>
        <div>
          List of Songs!
        </div>
      </div>
      </Header>
    </div>
  );
}


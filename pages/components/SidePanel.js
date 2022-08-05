import PlaceCard from "./PlaceCard";
const SidePanel = () => {
  const teset = Array.from({ length: 12 }, () => <PlaceCard />);

  return (
    // fix top of the scrollbar
    // add function to bookmark/save results and display bookmarked items somewhere on page 
      // model with buttom?? 
      // initialize floating button that updates with number of saved places 
    <div className="fixed inset-y-0 hidden w-[42rem] pt-20 mb-4 overflow-x-hidden overflow-y-auto scrollbar sm:block">
      <div className="min-h-full pt-8 border-r-2 shadow-md border-r-gray-200">
        <div className="flex flex-col gap-2 mx-4">
          {Array.from({ length: 12 }, () => (
            <PlaceCard key={Math.random()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;

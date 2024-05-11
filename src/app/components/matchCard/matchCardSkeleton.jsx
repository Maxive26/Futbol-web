import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MatchCardSkeleton() {
  return (
    <>
      <div className="flex items-center mb-4 justify-between">
        <h1 className="text-center font-bold truncate w-64 h-10 mt-3">
          <Skeleton />
        </h1>
        <div className=" truncate w-20 h-10 mt-3">
          <Skeleton />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  bg-grayPage rounded-xl p-5 items-center mb-4 justify-between">
        {Array(3)
          .fill(0)
          .map((card, index) => (
            <div
              key={index}
              className=" w-80 h-52 rounded-3xl border-2 border-grayPage relative flex flex-col"
            >
              <div className="h-6 flex items-center justify-center">
                <span className="text-center font-bold truncate w-16 mt-3">
                  <Skeleton />
                </span>
              </div>
              <div className="h-[146px] flex justify-center items-center gap-4">
                <div className="flex flex-col items-center w-28">
                  <Skeleton circle width={80} height={80} />
                  <span className="text-center font-bold truncate w-32 mt-3">
                    <Skeleton />
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold">
                    <Skeleton />
                  </span>
                  <span className="font-bold w-10">
                    <Skeleton />
                  </span>
                  <span className="font-bold text-xl w-10">
                    <Skeleton />
                  </span>
                </div>
                <div className="flex flex-col items-center w-28">
                  <Skeleton circle width={80} height={80} />
                  <span className="text-center font-bold truncate w-32 mt-3">
                    <Skeleton />
                  </span>
                </div>
              </div>
              <div className="h-9  flex px-6 items-center justify-center">
                <span className="font-bold ml-2 ">
                  <Skeleton />
                </span>
              </div>
              <div className="h-9 flex px-6 items-center justify-center">
                <span className="text-center font-bold truncate w-32">
                  <Skeleton />
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

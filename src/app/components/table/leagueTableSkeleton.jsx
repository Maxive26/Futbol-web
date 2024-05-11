import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LeagueTableSkeleton() {
  return (
    <div>
      <h1 className="text-2xl w-64  mb-4 ">
        <Skeleton />
      </h1>
      <div className="bg-grayPage rounded-xl p-5">
        <div>
          <h1 className="text-2xl w-32  mb-4 ">
            <Skeleton />
          </h1>
          <table className="border-collapse mb-3">
            <thead>
              <tr className="">
                <th className="px-2  w-10">
                  <Skeleton />
                </th>
                <th className="px-2  w-10">
                  <Skeleton />
                </th>
                <th className="px-2  w-10">
                  <Skeleton />
                </th>
                <th className="px-2  w-10">
                  <Skeleton />
                </th>
                <th className="px-2  w-10">
                  <Skeleton />
                </th>
                <th className="px-2  w-10">
                  <Skeleton />
                </th>
                <th className="px-2  w-10">
                  <Skeleton />
                </th>
                <th className="px-2  w-10">
                  <Skeleton />
                </th>
                <th className="px-2  w-10">
                  <Skeleton />
                </th>
                <th className="px-2  w-10">
                  <Skeleton />
                </th>
              </tr>
            </thead>
            {Array(10)
              .fill(0)
              .map((card, index) => (
                <tbody key={index}>
                  <tr className="">
                    <td className="py-2">
                      <Skeleton />
                    </td>
                    <td className="p-2 w-64  ">
                      <Skeleton />
                    </td>
                    <td className="py-2 font-bold">
                      <Skeleton />
                    </td>
                    <td className="py-2  ">
                      <Skeleton />
                    </td>
                    <td className="py-2  ">
                      <Skeleton />
                    </td>
                    <td className="py-2  ">
                      <Skeleton />
                    </td>
                    <td className="py-2  ">
                      <Skeleton />
                    </td>
                    <td className="py-2  ">
                      <Skeleton />
                    </td>
                    <td className="py-2  ">
                      <Skeleton />
                    </td>
                    <td className="py-2  ">
                      <Skeleton />
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}

import Link from "./link";

export default function Sidebar() {
  return (
    <>
      <div className="h-10 ">Logo</div>
      <div className=" text-whiteCard flex flex-col gap-2">
        <span>LIGAS</span>
        <Link href={"#"} liga={"Copa de la liga"} />
        <Link href={"#"} liga={"Premier League"} />
        <Link href={"#"} liga={"Serie A"} />
        <Link href={"#"} liga={"Brasileirao"} />
      </div>
    </>
  );
}

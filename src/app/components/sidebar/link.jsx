export default function Links({ liga, href }) {
  return (
    <div className="flex border-l-2 border-grayPage ml-2  transition-all ease-in hover:border-greenCard">
      <a
        href={href}
        className="w-full  pl-5 transition-all opacity-70 ease-in hover:text-greenCard hover:opacity-100"
      >
        {liga}
      </a>
    </div>
  );
}

export default function Link({ liga, href }) {
  return (
    <div className="flex border-l-2 ml-2 transition-all ease-in hover:border-greenCard">
      <a
        href={href}
        className="w-full pl-5 transition-all ease-in hover:text-greenCard"
      >
        {liga}
      </a>
    </div>
  );
}

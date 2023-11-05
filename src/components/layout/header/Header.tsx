import Link from "next/link";

export default function Header({ icone, nome, url }: any) {
  return (
    <Link href={url}>
      <div className="flex flex-col py-4 px-3 mx-4 justify-center items-center text-white rounded-lg hover:bg-blue-900 cursor-pointer">
        <span className="text-2xl">{icone}</span>
        <p className="text-base mt-2">{nome}</p>
        <div className="flex space-x-2 mt-2">
        </div>
      </div>
    </Link>
  );
}
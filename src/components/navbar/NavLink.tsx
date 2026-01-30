import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export default function Navlink({ href, label }: Props) {
  return (
    <li className="flex">
      <Link className="flex-1 font-semibold" href={href}>
        {label}
      </Link>
    </li>
  );
}

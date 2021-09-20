import Link from 'next/link';

interface FooterLinkItemProps {
    title: string;
    href: string;
}
export default function FooterLinkItem(props: Partial<FooterLinkItemProps>) {
  const { title, href = '/' } = props;
  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
}

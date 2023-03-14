import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={50} height={50} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Users</Link>
    </nav>
  );
}

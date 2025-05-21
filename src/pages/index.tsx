import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Next.js App</h1>
      <Link href="/auth/login">
        <a>Login</a>
      </Link>
    </div>
  );
}
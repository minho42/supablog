import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex w-full items-center justify-evenly bg-white text-5xl px-4 py-2 space-x-3 mb-3">
      <Link href="/">
        <a>🔥 supablog</a>
      </Link>
      <Link href="/login">
        <a>🗝 Login</a>
      </Link>
    </div>
  );
}

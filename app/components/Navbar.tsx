import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/">Srbgl</Link>
        <Link href="about">ABOUT</Link>
    </nav>
  )
}

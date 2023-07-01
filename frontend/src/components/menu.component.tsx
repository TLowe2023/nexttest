import Link from "next/link";

export function MainMenu() {
  return (
    <nav>
      <ul className="border-right">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/test1">Test 1 - Displaying an image</Link>
        </li>
        <li>
          <Link href="/test2">Test 2 - Backend Call</Link>
        </li>
        <li>
          <Link href="/test4">Test 3 - Frontend Call</Link>
        </li>
        {/* <li>
          <Link href="/test4">Test 4 - Front to Back Request</Link>
        </li> */}
      </ul>
    </nav>
  );
}

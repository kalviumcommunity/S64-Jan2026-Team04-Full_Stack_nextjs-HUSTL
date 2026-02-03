import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/users", label: "Users" },
  { href: "/reports", label: "Reports" },
];

export default function Sidebar() {
  return (
    <aside
      className="w-64 bg-gray-100 h-full border-r p-4"
      aria-label="Sidebar navigation"
    >
      <h2 className="text-lg font-bold mb-4">Navigation</h2>

      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

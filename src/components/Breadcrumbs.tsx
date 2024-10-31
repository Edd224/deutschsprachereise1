"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<{ name: string; href: string }>>([]);

  useEffect(() => {
    console.log('Current Pathname:', pathname); // Debugging
    if (pathname) {
      const pathArray = pathname.split("/").filter((x) => x); // Rozdelenie URL na časti
      console.log('Path Array:', pathArray); // Debugging

      const breadcrumbArray = pathArray.map((path, index) => {
        const href = `/${pathArray.slice(0, index + 1).join("/")}`;
        return { name: path.charAt(0).toUpperCase() + path.slice(1), href };
      });

      console.log('Breadcrumb Array:', breadcrumbArray); // Debugging
      if (pathname === "/") {
        setBreadcrumbs([]); // Pre domovskú stránku
      } else {
        setBreadcrumbs(breadcrumbArray); // Pre ostatné stránky
      }
    }
  }, [pathname]);

  return (
    <nav aria-label="breadcrumbs">
      <ol className="flex space-x-2 fixed">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">Domov</Link>
        </li>
        {breadcrumbs.length > 0 && breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">/</span>
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-500">{breadcrumb.name}</span>
            ) : (
              <Link href={breadcrumb.href} className="text-blue-600 hover:underline">
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

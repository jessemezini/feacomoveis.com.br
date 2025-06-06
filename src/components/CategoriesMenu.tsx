import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

import { categories } from "../data/categories";

export default function CategoriesMenu({
  name = "Filtrar por Categoria",
}: {
  name?: string;
}) {
  return (
    <Menu
      align="end"
      arrow
      menuButton={({ open }) => (
        <MenuButton className="flex items-center gap-2 btn btn-secondary rounded-3xl">
          {name}
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeDasharray={10}
                strokeDashoffset={10}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9l-5 5M12 9l5 5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="10;0"
                ></animate>
              </path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeDasharray={10}
                strokeDashoffset={10}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15l-5 -5M12 15l5 -5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="10;0"
                ></animate>
              </path>
            </svg>
          )}
        </MenuButton>
      )}
      transition
      menuClassName="font-semibold text-sm !rounded-2xl"
    >
      {categories.map((category, index) => (
        <MenuItem
          key={index}
          href={`/produtos?category=${category.name}`}
          className="mx-2 rounded-md"
        >
          {category.name}
        </MenuItem>
      ))}
    </Menu>
  );
}

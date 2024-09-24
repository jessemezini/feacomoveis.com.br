import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

import { categories } from "../data/categories";

export default function CategoriesMenu() {
  return (
    <Menu
      align="end"
      arrow
      menuButton={
        <MenuButton className="flex items-center gap-2 btn btn-secondary">
          Filtrar por Categoria
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.25em"
            width="1.25em"
          >
            <path d="M10 3H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
          </svg>
        </MenuButton>
      }
      transition
    >
      {categories.map((category, index) => (
        <MenuItem key={index} href={`/produtos?category=${category.name}`}>
          {category.name}
        </MenuItem>
      ))}
    </Menu>
  );
}

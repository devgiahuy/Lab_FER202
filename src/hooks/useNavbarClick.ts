import { useState } from "react";

export function useNavbarClick<T extends string>(defaultMenu: T) {
  const [active, setActive] = useState<T>(defaultMenu);

  // check active
  const isActive = (menu: T) => active === menu;

  // trả về props để gắn trực tiếp vào button/menu
  const getMenuProps = (menu: T) => ({
    onClick: () => setActive(menu),
    "data-active": isActive(menu), // có thể dùng để style bằng CSS nếu muốn
  });

  return { active, isActive, getMenuProps };
}

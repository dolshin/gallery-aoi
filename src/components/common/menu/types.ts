export type MenuItemType = { to: string; name: string };
export type MenuProps = {
  menuLabel: string;
  menuItems: Readonly<MenuItemType[]>;
  style?: React.CSSProperties;
};

import React from "react";
import { useEventCategory } from "../../../lib/hooks/useEventCategory";
import Menu from "../../common/menu/Menu";

const EventCategory = () => {
  const categories = useEventCategory();
  const menuItems = categories.map((category) => ({
    name: category.name ?? "",
    to: `/event/category/${category.slug}`,
  }));
  return <Menu menuItems={menuItems} menuLabel="カテゴリ" />;
};

export default EventCategory;

import React from "react";
import { useEventArchive } from "../../../lib/hooks/useEventArchive";
import Menu from "../../common/menu/Menu";

const EventArchiveMenu = () => {
  const yearMonthes = useEventArchive();
  const menuItems = yearMonthes.map((yearMonth) => ({
    name: yearMonth,
    to: `/event/archive/${yearMonth.replace("年", "/").replace("月", "")}`,
  }));
  return <Menu menuItems={menuItems} menuLabel="アーカイブ" />;
};

export default EventArchiveMenu;

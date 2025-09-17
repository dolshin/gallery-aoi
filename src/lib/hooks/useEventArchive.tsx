import { graphql, useStaticQuery } from "gatsby";

export const useEventArchive = () => {
  const data = useStaticQuery<Queries.AllEventArchiveQuery>(graphql`
    query AllEventArchive {
      allMicrocmsEvent {
        nodes {
          startDate(formatString: "YYYY-MM-DD")
        }
      }
    }
  `);
  const eventNodes = data.allMicrocmsEvent.nodes;
  let YearMonthes: string[] = [];
  for (const event of eventNodes) {
    if (!event.startDate) continue;
    const date = new Date(event.startDate);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const yearMonth = `${year}年${month}月`;
    if (!YearMonthes.includes(yearMonth)) {
      // 年月がまだ登録されていない場合、YearMonthesに追加
      YearMonthes = [...YearMonthes, yearMonth];
    }
  }
  return YearMonthes;
};

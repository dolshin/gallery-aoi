import path from "path";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  // const newsPage = async (
  //   createPage: Parameters<
  //     NonNullable<GatsbyNode["createPages"]>
  //   >["0"]["actions"]["createPage"],
  //   graphql: Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["graphql"],
  // ) => {
  //   const NewsIndexPageResult = await graphql<Queries.NewsQueryQuery>(`
  //     query NewsQuery {
  //       allMicrocmsNews(limit: 100, sort: { publishedAt: DESC }) {
  //         edges {
  //           node {
  //             category {
  //               name
  //             }
  //             newsId
  //             publishDate
  //             title
  //             body
  //             image {
  //               alt
  //               url
  //               width
  //               height
  //             }
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `);

  //   if (!NewsIndexPageResult.data || NewsIndexPageResult.errors) {
  //     throw new Error("News 用のデータ取得に失敗しました。");
  //   }

  //   const posts = NewsIndexPageResult.data.allMicrocmsNews.edges;

  //   if (posts === undefined) {
  //     throw new Error("News 用のデータが見つかりませんでした。");
  //   }

  //   const postsPerPage = 10;
  //   const totalPages = Math.ceil(posts.length / postsPerPage);
  //   Array.from({ length: totalPages }).forEach((_, i) => {
  //     createPage({
  //       path: i === 0 ? `/news` : `/news/page/${i + 1}`,
  //       component: path.resolve("./src/templates/news-list-template.tsx"),
  //       context: {
  //         limit: postsPerPage,
  //         skip: i * postsPerPage,
  //         totalPages,
  //         currentPage: i + 1,
  //       },
  //     });
  //   });
  // };

  // const newsCategoryPage = async (
  //   createPage: Parameters<
  //     NonNullable<GatsbyNode["createPages"]>
  //   >["0"]["actions"]["createPage"],
  //   graphql: Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["graphql"],
  // ) => {
  //   const categoryResult = await graphql<Queries.AllNewsCategoryQuery>(`
  //     query AllNewsCategory {
  //       allMicrocmsNewsCategory {
  //         nodes {
  //           newsCategoryId
  //           slug
  //           name
  //         }
  //       }
  //     }
  //   `);

  //   if (!categoryResult.data || categoryResult.errors) {
  //     throw new Error("News Category用のデータ取得に失敗しました。");
  //   }

  //   const categories = categoryResult.data.allMicrocmsNewsCategory.nodes;

  //   for (const category of categories) {
  //     const newsResult =
  //       await graphql<Queries.NewsCategoryQuery>(`query NewsCategory {
  //         allMicrocmsNews(filter: { category: { id: { eq: "${category.newsCategoryId}" } } }) {
  //           totalCount
  //       }
  //     }
  //   `);

  //     if (!newsResult.data || newsResult.errors) {
  //       throw new Error("News Category 用のデータ取得に失敗しました。");
  //     }

  //     const totalCount = newsResult.data.allMicrocmsNews.totalCount;
  //     const postsPerPage = 10;
  //     const totalPages = Math.ceil(totalCount / postsPerPage);
  //     // 3. 各ページを作成
  //     Array.from({ length: totalPages }).forEach((_, i) => {
  //       const currentPage = i + 1;
  //       createPage({
  //         path:
  //           i === 0
  //             ? `/news/category/${category.slug}`
  //             : `/news/category/${category.slug}/page/${currentPage}`,
  //         component: path.resolve("./src/templates/news-category-template.tsx"),
  //         context: {
  //           categoryId: category.newsCategoryId ?? "",
  //           categorySlug: category.slug,
  //           limit: postsPerPage,
  //           skip: i * postsPerPage,
  //           currentPage,
  //           totalPages,
  //         },
  //       });
  //     });
  //   }
  // };

  // const newsArchivePage = async (
  //   createPage: Parameters<
  //     NonNullable<GatsbyNode["createPages"]>
  //   >["0"]["actions"]["createPage"],
  //   graphql: Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["graphql"],
  // ) => {
  //   const archiveResult = await graphql<Queries.NewsArchiveQuery>(`
  //     query NewsArchive {
  //       allMicrocmsNews(sort: { publishedAt: DESC }, limit: 1000) {
  //         nodes {
  //           id
  //           slug
  //           publishedAt
  //         }
  //       }
  //     }
  //   `);
  //   if (!archiveResult.data || archiveResult.errors) {
  //     throw new Error("News Archive 用のデータ取得に失敗しました。");
  //   }

  //   const posts = archiveResult.data.allMicrocmsNews.nodes;

  //   const POSTS_PER_PAGE = 10;
  //   // --- 月別グルーピング ---
  //   const archiveMap: Record<string, typeof posts> = {}; // e.g. "2025/07": [post1, post2]
  //   const yearMap: Record<string, Set<string>> = {}; // e.g. "2025": Set(["07", "08"])

  //   for (const post of posts) {
  //     if (!post.publishedAt) continue; // publishedAtがない場合はスキップ
  //     const date = new Date(post.publishedAt);
  //     const year = date.getFullYear().toString();
  //     const month = (date.getMonth() + 1).toString().padStart(2, "0");
  //     const key = `${year}/${month}`;
  //     if (!archiveMap[key]) archiveMap[key] = [];
  //     archiveMap[key] = [...archiveMap[key], post];

  //     if (!yearMap[year]) yearMap[year] = new Set();
  //     yearMap[year].add(month);
  //   }

  //   // --- 月別アーカイブページ（ページネーション付き）生成 ---
  //   for (const [key, posts] of Object.entries(archiveMap)) {
  //     const [year, month] = key.split("/");
  //     const startMonth = `${year}-${month}-01T00:00:00+09:00`;
  //     const endMonth = `${year}-${month}-31T23:59:59+09:00`;
  //     const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  //     for (let i = 0; i < totalPages; i++) {
  //       const currentPage = i + 1;
  //       createPage({
  //         path:
  //           currentPage === 1
  //             ? `/news/archive/${year}/${month}`
  //             : `/news/archive/${year}/${month}/page/${currentPage}`,
  //         component: path.resolve("src/templates/news-archive-template.tsx"),
  //         context: {
  //           year,
  //           month,
  //           startMonth,
  //           endMonth,
  //           limit: POSTS_PER_PAGE,
  //           skip: i * POSTS_PER_PAGE,
  //           currentPage,
  //           totalPages,
  //         },
  //       });
  //     }
  //   }

  //   // --- 年別アーカイブナビページを生成 ---
  //   for (const year of Object.keys(yearMap)) {
  //     const yearPosts = posts.filter((post) => {
  //       if (!post.publishedAt) return false; // publishedAtがない場合はスキップ
  //       const date = new Date(post.publishedAt);
  //       return date.getFullYear().toString() === year;
  //     });

  //     const startYear = `${year}-01-01T00:00:00+09:00`;
  //     const endYear = `${year}-12-31T23:59:59+09:00`;
  //     const totalPages = Math.ceil(yearPosts.length / POSTS_PER_PAGE);

  //     for (let i = 0; i < totalPages; i++) {
  //       const currentPage = i + 1;

  //       createPage({
  //         path:
  //           currentPage === 1
  //             ? `/news/archive/${year}`
  //             : `/news/archive/${year}/page/${currentPage}`,
  //         component: path.resolve(
  //           "src/templates/news-archive-year-template.tsx",
  //         ),
  //         context: {
  //           year,
  //           startYear,
  //           endYear,
  //           skip: i * POSTS_PER_PAGE,
  //           limit: POSTS_PER_PAGE,
  //           currentPage,
  //           totalPages,
  //         },
  //       });
  //     }
  //   }
  // };

  const eventPage = async (
    createPage: Parameters<
      NonNullable<GatsbyNode["createPages"]>
    >["0"]["actions"]["createPage"],
    graphql: Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["graphql"],
  ) => {
    const EventIndexPageResult = await graphql<Queries.EventQuery>(`
      query Event {
        allMicrocmsEvent(limit: 1000, sort: { publishedAt: DESC }) {
          edges {
            node {
              category {
                name
              }
              eventId
              title
              body
              startDate
              endDate
              organizer
              slug
              image {
                url
              }
            }
          }
        }
      }
    `);

    if (!EventIndexPageResult.data || EventIndexPageResult.errors) {
      throw new Error("Event 用のデータ取得に失敗しました。");
    }

    const posts = EventIndexPageResult.data.allMicrocmsEvent.edges;

    if (posts === undefined) {
      throw new Error("Event 用のデータが見つかりませんでした。");
    }

    const postsPerPage = 10;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: totalPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/event` : `/event/page/${i + 1}`,
        component: path.resolve("./src/templates/event-list-template.tsx"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          totalPages,
          currentPage: i + 1,
        },
      });
    });
  };
  const eventCategoryPage = async (
    createPage: Parameters<
      NonNullable<GatsbyNode["createPages"]>
    >["0"]["actions"]["createPage"],
    graphql: Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["graphql"],
  ) => {
    const categoryResult = await graphql<Queries.AllEventCategoryQuery>(`
      query AllEventCategory {
        allMicrocmsEventCategory {
          nodes {
            eventCategoryId
            slug
            name
          }
        }
      }
    `);

    if (!categoryResult.data || categoryResult.errors) {
      throw categoryResult.errors;
    }

    const categories = categoryResult.data?.allMicrocmsEventCategory.nodes;

    for (const category of categories) {
      const eventResult =
        await graphql<Queries.EventCategoryQuery>(`query EventCategory {
          allMicrocmsEvent(filter: { category: { id: { eq: "${category.eventCategoryId}" } } }) {
            totalCount
          }
        }
      `);
      if (!eventResult.data || eventResult.errors) {
        throw new Error("Event Category 用のデータ取得に失敗しました。");
      }

      const totalCount = eventResult.data.allMicrocmsEvent.totalCount;
      const postsPerPage = 10;
      const totalPages = Math.ceil(totalCount / postsPerPage);

      // 3. 各ページを作成
      Array.from({ length: totalPages }).forEach((_, i) => {
        const currentPage = i + 1;
        createPage({
          path:
            i === 0
              ? `/event/category/${category.slug}`
              : `/event/category/${category.slug}/page/${currentPage}`,
          component: path.resolve(
            "./src/templates/event-category-template.tsx",
          ),
          context: {
            categoryId: category.eventCategoryId ?? "",
            categorySlug: category.slug,
            categoryName: category.name,
            limit: postsPerPage,
            skip: i * postsPerPage,
            currentPage,
            totalPages,
          },
        });
      });
    }
  };
  const eventArchivePage = async (
    createPage: Parameters<
      NonNullable<GatsbyNode["createPages"]>
    >["0"]["actions"]["createPage"],
    graphql: Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["graphql"],
  ) => {
    const archiveResult = await graphql<Queries.EventArchiveQuery>(`
      query EventArchive {
        allMicrocmsEvent(sort: { startDate: DESC }, limit: 1000) {
          nodes {
            id
            slug
            startDate
            endDate
          }
        }
      }
    `);
    if (!archiveResult.data || archiveResult.errors) {
      throw new Error("Event Archive 用のデータ取得に失敗しました。");
    }
    const posts = archiveResult.data.allMicrocmsEvent.nodes;
    const POSTS_PER_PAGE = 10;
    // --- 月別グルーピング ---
    const archiveMap: Record<string, typeof posts> = {}; // e.g. "2025/07": [post1, post2]
    const yearMap: Record<string, Set<string>> = {}; // e.g. "2025": Set(["07", "08"])
    posts.forEach((post) => {
      if (!post.startDate) return; // startDateがない場合はスキップ
      const startDate = new Date(post.startDate);
      const year = startDate.getFullYear().toString();
      const month = String(startDate.getMonth() + 1).padStart(2, "0");
      const key = `${year}/${month}`;
      if (!archiveMap[key]) {
        archiveMap[key] = [];
      }
      archiveMap[key] = [...archiveMap[key], post];
      if (!yearMap[year]) {
        yearMap[year] = new Set();
      }
      yearMap[year].add(month);
    });
    // --- 月別アーカイブページ（ページネーション付き）生成 ---
    for (const [key, posts] of Object.entries(archiveMap)) {
      const [year, month] = key.split("/");
      const startMonth = `${year}-${month}-01T00:00:00+09:00`;
      const endMonth = `${year}-${month}-31T23:59:59+09:00`;
      const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
      for (let i = 0; i < totalPages; i++) {
        const currentPage = i + 1;
        createPage({
          path:
            currentPage === 1
              ? `/event/archive/${year}/${month}`
              : `/event/archive/${year}/${month}/page/${currentPage}`,
          component: path.resolve("./src/templates/event-archive-template.tsx"),
          context: {
            year,
            month,
            startMonth,
            endMonth,
            limit: POSTS_PER_PAGE,
            skip: i * POSTS_PER_PAGE,
            currentPage,
            totalPages,
          },
        });
      }
    }
    // --- 年別アーカイブナビページを生成 ---
    for (const year of Object.keys(yearMap)) {
      const yearPosts = posts.filter((post) => {
        if (!post.startDate) return false; // startDateがない場合はスキップ
        const startDate = new Date(post.startDate);
        return startDate.getFullYear().toString() === year;
      });

      const startYear = `${year}-01-01T00:00:00+09:00`;
      const endYear = `${year}-12-31T23:59:59+09:00`;
      const totalPages = Math.ceil(yearPosts.length / POSTS_PER_PAGE);

      for (let i = 0; i < totalPages; i++) {
        const currentPage = i + 1;

        createPage({
          path:
            currentPage === 1
              ? `/event/archive/${year}`
              : `/event/archive/${year}/page/${currentPage}`,
          component: path.resolve(
            "./src/templates/event-archive-year-template.tsx",
          ),
          context: {
            year,
            startYear,
            endYear,
            limit: POSTS_PER_PAGE,
            skip: i * POSTS_PER_PAGE,
            currentPage,
            totalPages,
          },
        });
      }
    }
  };

  // await newsPage(createPage, graphql);
  // await newsCategoryPage(createPage, graphql);
  // await newsArchivePage(createPage, graphql);
  await eventPage(createPage, graphql);
  await eventCategoryPage(createPage, graphql);
  await eventArchivePage(createPage, graphql);
};

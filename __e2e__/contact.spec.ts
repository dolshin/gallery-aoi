import { test, expect } from "@playwright/test";

test.describe("お問い合わせフォーム", () => {
  test("正常に送信できる", async ({ page }) => {
    // トップページに遷移
    await page.goto("/");
    await page.waitForSelector("form", { state: "visible" });

    // フィールド入力
    const f = await page.locator("form");
    await f.getByLabel("お名前").fill("山田太郎");
    await f.getByLabel("フリガナ").fill("ヤマダタロウ");
    await f.getByLabel("メールアドレス").fill("test@example.com");
    await f.getByLabel("電話番号").fill("");
    await f.getByLabel("件名").selectOption("予約について");
    await f
      .getByLabel("お問い合わせ内容")
      .fill("展示スペースの予約状況を知りたいです。");

    // 送信
    await page.getByRole("button", { name: "入力内容を確認する" }).click();

    // 成功確認（確認画面に遷移）
    await expect(page).toHaveURL("/contact/confirm/");
    await expect(page.getByText("入力内容の確認")).toBeVisible();
    await expect(page.getByText("山田太郎")).toBeVisible();
    await expect(page.getByText("ヤマダタロウ")).toBeVisible();
    await expect(page.getByText("test@example.com")).toBeVisible();
    await expect(page.getByText("入力なし")).toBeVisible();
    await expect(page.getByText("予約について")).toBeVisible();
    await expect(
      page.getByText("展示スペースの予約状況を知りたいです。"),
    ).toBeVisible();

    // サンクスページに遷移
    await page.route("**/send-contact-email", (route) => {
      route.fulfill({
        status: 200,
        body: JSON.stringify({ success: true, id: "test-id" }),
      });
    });
    await page.getByRole("button", { name: "送信する" }).click();
    await page.goto("/contact/thanks/");
    await expect(page).toHaveURL("/contact/thanks/");
    await expect(page.getByText("お問い合わせが完了しました")).toBeVisible();
    await expect(
      page.getByText(
        "お問い合わせいただき、ありがとうございます。担当者より折り返しご連絡いたしますので、しばらくお待ちください。",
      ),
    ).toBeVisible();
  });
});

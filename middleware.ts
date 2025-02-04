import createMiddlware from "next-intl/middleware";
import { locales } from "./config";

export default createMiddlware({
  locales,
  defaultLocale: "en",
});
export const config = {
  matcher: ["/", "/(hi|en)/:path*"],
};

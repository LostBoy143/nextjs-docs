import { locales } from "@/config";
import {
  useLocale,
  useTranslations,
} from "next-intl";
import LangSwitcher from "./LangSwitcher";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LangSwitcher
      defaultValue={locale}
      label={t("label")}
    >
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>

        // Add more language options here if needed
      ))}
    </LangSwitcher>
  );
}

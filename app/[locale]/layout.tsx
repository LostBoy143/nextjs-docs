import "@/app/ui/global.css";
import { ReactNode } from "react";
import { inter } from "@/app/ui/fonts";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} antialiased`}
      >
        <NextIntlClientProvider
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

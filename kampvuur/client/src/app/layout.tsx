import QueryProvider from "@/context/QueryProvider";
import { montserrat, poppins } from "@/styles/fonts";
import "@styles/global.css";
import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";

// Initialize AWS Amplify
Amplify.configure(awsExports);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

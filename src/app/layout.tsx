import { ThemeProvider } from "@/components/providers/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import { CONSTANT } from "@/lib/constant";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: CONSTANT.name,
		template: `%s - ${CONSTANT.name}`,
	},
	description: CONSTANT.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} min-h-screen min-w-screen antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
        {
          process.env.NODE_ENV === "production" && <>
            {/* Todo: Add Google Analytics */}
            {/* Todo: Add Vercel Web Analytics */}
            {/* Todo: Add other analytics services*/}
          </>
        }
			</body>
		</html>
	);
}

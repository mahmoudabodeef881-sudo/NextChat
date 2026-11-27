/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { getServerSideConfig } from "./config/server";

export const metadata: Metadata = {
  title: "NextChat",
  description: "Your personal AI assistant.",
  appleWebApp: {
    title: "NextChat",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serverConfig = getServerSideConfig();

  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
          crossOrigin="use-credentials"
        ></link>
        <script dangerouslySetInnerHTML={{ __html: "(function(){\nif(\"serviceWorker\" in navigator){window.addEventListener(\"load\",function(){navigator.serviceWorker.register(\"/serviceWorker.js\").catch(function(){})})}\nvar H=[\"Enable Artifacts\",\"Enable CodeFold\",\"\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0633\u062d\u0627\u0628\u0629\",\"\u0625\u062e\u0641\u0627\u0621 \u0627\u0644\u0623\u0642\u0646\u0639\u0629 \u0627\u0644\u0645\u062f\u0645\u062c\u0629\",\"\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a\",\"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u062e\u0635\u0635\u0629\",\"\u0627\u0633\u062a\u062e\u062f\u0627\u0645 NextChat AI\",\"\u0648\u0627\u062c\u0647\u0629 \u0645\u062e\u0635\u0635\u0629\",\"\u0627\u0633\u0645 \u0627\u0644\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u0645\u062e\u0635\u0635\",\"\u0639\u064a\u0646\u0627\u062a \u0627\u0644\u0646\u0648\u0627\u0629\",\"\u062a\u062c\u062f\u062f \u0627\u0644\u0645\u0648\u0636\u0648\u0639\",\"\u0639\u0642\u0648\u0628\u0629 \u0627\u0644\u062a\u0643\u0631\u0627\u0631\",\"\u062d\u0642\u0646 \u0627\u0644\u0631\u0633\u0627\u0626\u0644\",\"\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0625\u062f\u062e\u0627\u0644\",\"\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u0636\u063a\u0637\",\"Realtime Chat\",\"Enable TTS\",\"TTS Engine\",\"Model\",\"Voice\",\"Speed\"];\nfunction run(){if(location.hash.indexOf(\"settings\")<0)return;document.querySelectorAll('[class*=\"list-item\"]').forEach(function(e){if(/list-item-(title|sub-title)/.test(e.className))return;var t=(e.innerText||\"\").trim();if(!t)return;for(var i=0;i<H.length;i++){if(t.indexOf(H[i])===0){e.style.display=\"none\";return}}})}\nnew MutationObserver(run).observe(document.documentElement,{childList:true,subtree:true});\n})();" }} />
      </head>
      <body>
        {children}
        {serverConfig?.isVercel && (
          <>
            <SpeedInsights />
          </>
        )}
        {serverConfig?.gtmId && (
          <>
            <GoogleTagManager gtmId={serverConfig.gtmId} />
          </>
        )}
        {false && (
          <>
            <GoogleAnalytics gaId={serverConfig.gaId} />
          </>
        )}
      </body>
    </html>
  );
}

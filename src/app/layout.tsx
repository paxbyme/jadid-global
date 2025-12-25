import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Jadid Global — milliy ma’rifat multimedia portali",
    template: "%s | Jadid Global",
  },
  description:
    "Jadid merosi, milliy ma’rifat, maqolalar, PDF/EPUB kutubxona, video va audio arxiv.",
  keywords: [
    "jadid",
    "jadidchilik",
    "milliy ma’rifat",
    "uzbek history",
    "jadid merosi",
    "islom ma’rifati",
    "uzbek culture",
  ],
  metadataBase: new URL("https://jadid.global"),
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://jadid.global",
    siteName: "Jadid Global",
    title: "Jadid Global — milliy ma’rifat multimedia portali",
    description:
      "Jadid merosi va milliy ma’rifatni zamonaviy formatda taqdim etuvchi portal.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Jadid Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jadid Global",
    description:
      "Jadid merosi va milliy ma’rifat multimedia portali",
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

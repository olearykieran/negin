import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/work`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TheatreRedirectPage() {
  redirect("/work#theatre");
}

import { Link } from "@remix-run/react";
import { constants } from "~/data/siteData";

export function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} {constants.firstLastname} All rights
      reserved. Website by{" "}
      <Link
        to="https://alphacast.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary"
      >
        Alphacast.dev
      </Link>
    </footer>
  );
}

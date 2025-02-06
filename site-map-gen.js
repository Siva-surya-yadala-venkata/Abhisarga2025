import { writeFile } from "fs/promises";
import { SitemapStream, streamToPromise } from "sitemap";
import { fileURLToPath } from "url";
import path from "path";

// Define your base URL
const baseUrl = "https://abhisarga-iiits.in";

// Define your website's important routes
const pages = [
  "/", 
  "/about", 
  "/events", 
  "/schedule", 
  "/merch", 
  "/call-for-sponsors", 
  "/sponsors", 
  "/contact", 
  "/accommodation"
];

// Get the current directory equivalent to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const sitemap = new SitemapStream({ hostname: baseUrl });

  pages.forEach((page) => {
    sitemap.write({ url: page, changefreq: "daily", priority: 0.8 });
  });

  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap);

  // Save the sitemap.xml inside the 'public' folder
  await writeFile(path.join(__dirname, "public", "sitemap.xml"), sitemapXML);

  console.log("✅ Sitemap successfully generated in the 'public/' folder!");
})();

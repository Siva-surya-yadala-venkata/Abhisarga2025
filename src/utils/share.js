export async function shareEvent(title, text, url) {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
      return "Shared successfully!";
    } catch (error) {
      console.log(error)
      if (error.name !== "AbortError") {
        return await fallbackToClipboard(url);
      }
      return "";
    }
  }

  return await fallbackToClipboard(url);
}

async function fallbackToClipboard(url) {
  try {
    await navigator.clipboard.writeText(url);
    return "Link copied to clipboard!";
  } catch (error) {
    return "Failed to share. Please try again.";
  }
}

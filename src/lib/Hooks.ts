function removeHttpsAndWww(url: string) {
  let cleanedUrl = url?.replace(/^https:\/\//, "");
  cleanedUrl = cleanedUrl?.replace(/^www\./, "");

  return cleanedUrl;
}

export function isUrlValid(url: string) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

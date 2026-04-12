const CDN_BASE = process.env.NEXT_PUBLIC_CDN_BASE?.replace(/\/+$/, "");

function splitSuffix(path: string) {
  const hashIndex = path.indexOf("#");
  const queryIndex = path.indexOf("?");
  const splitIndex =
    hashIndex === -1
      ? queryIndex
      : queryIndex === -1
        ? hashIndex
        : Math.min(hashIndex, queryIndex);

  if (splitIndex === -1) {
    return { base: path, suffix: "" };
  }

  return {
    base: path.slice(0, splitIndex),
    suffix: path.slice(splitIndex),
  };
}

function withReplacedExtension(path: string, nextExt: string) {
  const { base, suffix } = splitSuffix(path);
  const extIndex = base.lastIndexOf(".");

  if (extIndex === -1) {
    return undefined;
  }

  return `${base.slice(0, extIndex)}.${nextExt}${suffix}`;
}

export function mediaAssetUrl(path?: string) {
  if (!path) {
    return undefined;
  }

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  if (!CDN_BASE) {
    return path;
  }

  return path.startsWith("/") ? `${CDN_BASE}${path}` : `${CDN_BASE}/${path}`;
}

export function webmVariant(path?: string) {
  if (!path) {
    return undefined;
  }

  const { base } = splitSuffix(path);
  if (!base.toLowerCase().endsWith(".mp4")) {
    return undefined;
  }

  return withReplacedExtension(path, "webm");
}

export function webpVariant(path?: string) {
  if (!path) {
    return undefined;
  }

  const { base } = splitSuffix(path);
  const lower = base.toLowerCase();
  if (
    !(lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg"))
  ) {
    return undefined;
  }

  return withReplacedExtension(path, "webp");
}


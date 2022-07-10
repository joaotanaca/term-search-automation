export function removeHostname(url: string) {
    return url.split("/").at(-1)?.replace(".html", "") as string;
}

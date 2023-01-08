import {
  basename,
  dirname,
  fromFileUrl,
  join,
} from "https://deno.land/std@0.171.0/path/mod.ts";
import { walk } from "https://deno.land/std@0.171.0/fs/mod.ts";
import { parse } from "https://deno.land/std@0.171.0/encoding/yaml.ts";
import {
  extract,
  test,
} from "https://deno.land/std@0.171.0/encoding/front_matter/yaml.ts";
import { ms } from "https://raw.githubusercontent.com/denolib/ms/master/ms.ts";
import {
  DEFAULT_CANVAS_HEIGHT,
  DEFAULT_CANVAS_WIDTH,
  DEFAULT_FONT_SIZE,
  DEFAULT_PADDING,
  DEFAULT_TEXT,
  Options,
} from "https://raw.githubusercontent.com/roziscoding/deno-text-to-banner/main/options.ts";
import { textToImage } from "https://raw.githubusercontent.com/roziscoding/deno-text-to-banner/main/canvas.ts";

const __dirname = dirname(fromFileUrl(import.meta.url));

const font = await Deno.readFile(
  join(
    __dirname,
    "src",
    ".vuepress",
    "public",
    "assets",
    "fonts",
    "bryantpro-bold-webfont.woff",
  ),
);

const postsDir = join(
  __dirname,
  "src",
  "_posts",
);

const DEFAULT_BACKGROUND_URL = join(
  __dirname,
  "src",
  ".vuepress",
  "public",
  "assets",
  "images",
  "bg_full.png",
);

// deno-lint-ignore no-explicit-any
function getOptions(frontMatter: any): Options {
  return {
    text: frontMatter.title ?? frontMatter.banner?.text ?? DEFAULT_TEXT,
    backgroundUrl: frontMatter.banner?.background ?? DEFAULT_BACKGROUND_URL,
    canvasHeight: frontMatter.banner?.canvasHeight ?? DEFAULT_CANVAS_HEIGHT,
    canvasWidth: frontMatter.banner?.canvasWidth ?? DEFAULT_CANVAS_WIDTH,
    hPadding: frontMatter.banner?.hPadding ?? DEFAULT_PADDING,
    wPadding: frontMatter.banner?.wPadding ?? DEFAULT_PADDING,
    debug: frontMatter.banner?.debug ?? false,
    initialFontSize: frontMatter.banner?.initialFontSize ?? DEFAULT_FONT_SIZE,
    nowrap: frontMatter.banner?.nowrap ?? false,
    font,
  };
}

async function exists(path: string) {
  try {
    await Deno.stat(path);
    return true;
  } catch {
    return false;
  }
}

function log(text: string) {
  const encoder = new TextEncoder();
  Deno.stdout.write(encoder.encode(text));
}

const start = Date.now();
let count = 0;

for await (
  const file of walk(postsDir, { match: [/.*\.md/] })
) {
  const decoder = new TextDecoder();
  const imageFileName = basename(file.path).replace(".md", ".png");
  const bannerPath = join(
    __dirname,
    "src",
    ".vuepress",
    "public",
    "assets",
    "images",
    "titles",
    imageFileName,
  );

  if (await exists(bannerPath)) continue;

  const fileContent = decoder.decode(await Deno.readFile(file.path));

  if (!test(fileContent)) continue;

  const { frontMatter } = extract(fileContent);

  const frontMatterOptions = parse(frontMatter);

  const options = getOptions(frontMatterOptions);

  log(`Generating banner for "${basename(options.text)}"... `);
  const image = await textToImage(options);
  await Deno.writeFile(bannerPath, image);
  log("Adding URL to frontmatter... ");
  await Deno.writeTextFile(
    file.path,
    fileContent.replace(
      "nobanner: true",
      `image: https://blog.roz.ninja/assets/images/titles/${imageFileName}`,
    ),
  );
  log("Done\n");
  count++;
}

const took = Date.now() - start;

console.log(`Generated ${count} image(s). Took ${ms(took)}`);

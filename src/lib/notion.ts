import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import fs from "fs";
// or
// import {NotionToMarkdown} from "notion-to-md";

const notion = new Client({
  auth: import.meta.env.NOTION_SECRET,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

export function test() {
  (async () => {
    const mdblocks = await n2m.pageToMarkdown(
      "12693886c7ee80bea99af8ff23266325"
    );
    const mdString = n2m.toMarkdownString(mdblocks);
    console.log(mdString.parent);
  })();
}

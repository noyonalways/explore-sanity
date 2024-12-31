import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { dataset, projectId } from "./src/environment";

export default defineConfig({
  name: "default",
  title: "explore-sanity",

  projectId: projectId!,
  dataset: dataset!,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});

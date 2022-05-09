import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default [
  // ES Modules
  {
    input: "src/useScrollOnDrag.ts",
    output: {
      file: "dist/index.es.js",
      format: "es",
    },
    plugins: [typescript(), babel({ extensions: [".ts"] })],
  },

  // UMD
  {
    input: "src/useScrollOnDrag.ts",
    output: {
      file: "dist/index.umd.min.js",
      format: "umd",
      name: "react-use-scroll-on-drag",
      indent: false,
    },
    plugins: [
      typescript(),
      babel({ extensions: [".ts"], exclude: "node_modules/**" }),
      terser(),
    ],
  },
];

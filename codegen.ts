import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://secure-egret-29.hasura.app/v1/graphql",
  documents: "src/core/graphql/*.gql",
  generates: {
    "src/core/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://0.0.0.0:1337/graphql',
    documents: 'src/posts/**/*.graphql',
    generates: {
        'src/types.ts': { plugins: ['typescript'] },
        'src/': {
            preset: 'near-operation-file',
            presetConfig: {
                extension: '.generated.tsx',
                baseTypesPath: 'types.ts',
            },
            plugins: ['typescript-operations', 'typescript-react-apollo'],
        },
    },
    config: {
        addDocBlocks: false,
        useTypeImports: true,
        withHooks: true,
        preResolveTypes: true,
        pureMagicComment: true,
        optimizeDocumentNode: true,
        withResultType: false,
    },
};

export default config;

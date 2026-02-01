import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
    appName: 'cheer-up-wife',
    // @ts-ignore - outdir might not be in the type definition but is required by the framework logic or documentation
    outdir: 'out',
    brand: {
        displayName: '아내를 위한 응원',
        primaryColor: '#FF2D55',
        icon: '',
    },
    web: {
        host: 'localhost',
        port: 3000,
        commands: {
            dev: 'npm run next-dev',
            build: 'IS_TOSS=true npm run next-build',
        },
    },
    permissions: [],
});

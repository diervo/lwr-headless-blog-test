import { generateStaticSite } from 'lwr';

const serverMode = 'dev';

await generateStaticSite({
    serverMode,
    staticSiteGenerator: {
        outputDir: `__generated_site_${serverMode}__`
    }
});

process.exit(0);
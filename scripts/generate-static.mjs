import { generateStaticSite } from 'lwr';

const serverMode = 'dev';

const result = await generateStaticSite({
    serverMode,
    staticSiteGenerator: {
        outputDir: `__generated_site_${serverMode}__`
    }
});

console.log(result);
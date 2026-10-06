const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
let htmlFiles = [];

function walk(dir) {
    const list = fs.readdirSync(dir);
    for (let file of list) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) walk(file);
        else if (file.endsWith('.html')) htmlFiles.push(file);
    }
}
walk(distDir);

let stats = {
    totalChecked: htmlFiles.length,
    canonical: { multiple: 0, wrongOrigin: 0, wrongFormat: 0 },
    indexability: { noindex: 0, nofollow: 0, missingTitle: 0, missingDesc: 0 },
    schemasFound: new Set(),
    internalLinks: { total: 0, broken: 0, orphans: 0 },
    security: [],
    openGraph: { missingTitle: 0, missingDesc: 0, missingUrl: 0, missingType: 0 }
};

const allValidRoutes = new Set(htmlFiles.map(f => {
    let r = f.replace(distDir, '').replace(/\\/g, '/');
    if (r.endsWith('/index.html') && r !== '/index.html') r = r.slice(0, -11);
    if (r === '/index.html') r = '/';
    return r;
}));
// also accept trailing slashes in hrefs
const allValidHrefs = new Set([...allValidRoutes].map(r => r === '/' ? '/' : r + '/').concat([...allValidRoutes]));

for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8');

    // canonical
    const canonicalMatches = html.match(/<link rel="canonical" href="([^"]+)"/g) || [];
    if (canonicalMatches.length > 1) stats.canonical.multiple++;
    if (canonicalMatches.length === 1) {
        const href = canonicalMatches[0].match(/href="([^"]+)"/)[1];
        if (!href.startsWith('https://studentkit.in')) stats.canonical.wrongOrigin++;
        if (href !== 'https://studentkit.in/' && !href.endsWith('/')) stats.canonical.wrongFormat++;
    }

    // indexability
    if (!/<title>/i.test(html)) stats.indexability.missingTitle++;
    if (!/<meta[^>]+name="description"[^>]+content="/i.test(html) && !/<meta[^>]+content="[^"]+"[^>]+name="description"/i.test(html)) stats.indexability.missingDesc++;
    if (/noindex/i.test(html)) stats.indexability.noindex++;
    if (/nofollow/i.test(html)) stats.indexability.nofollow++;

    // opengraph
    if (!/property="og:title"/i.test(html)) stats.openGraph.missingTitle++;
    if (!/property="og:description"/i.test(html)) stats.openGraph.missingDesc++;
    if (!/property="og:url"/i.test(html)) stats.openGraph.missingUrl++;
    if (!/property="og:type"/i.test(html)) stats.openGraph.missingType++;

    // schemas
    const schemaMatches = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/g) || [];
    for (const match of schemaMatches) {
        try {
            const inner = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
            const parsed = JSON.parse(inner);
            if (parsed['@type']) stats.schemasFound.add(parsed['@type']);
        } catch (e) { }
    }

    // links
    const linkMatches = html.match(/href="(\/(tools|category)\/[^"]+)"/g) || [];
    for (const link of linkMatches) {
        stats.internalLinks.total++;
        const href = link.match(/href="([^"]+)"/)[1];
        if (!allValidHrefs.has(href)) {
            stats.internalLinks.broken++;
            // console.log("BROKEN:", href, "in", file);
        }
    }

    // security
    if (/localhost/.test(html)) stats.security.push('localhost found in ' + file);
    if (/file:\/\//.test(html)) stats.security.push('file:// found in ' + file);
}

// Sitemap audit
const sitemapPath = path.join(distDir, 'sitemap-0.xml');
let sitemapStats = { urls: 0, duplicates: 0, malformed: 0 };
if (fs.existsSync(sitemapPath)) {
    const sm = fs.readFileSync(sitemapPath, 'utf8');
    const locs = sm.match(/<loc>([^<]+)<\/loc>/g) || [];
    sitemapStats.urls = locs.length;
    const unique = new Set();
    locs.forEach(l => {
        const url = l.replace(/<\/?loc>/g, '');
        if (unique.has(url)) sitemapStats.duplicates++;
        unique.add(url);
        if (!url.startsWith('https://studentkit.in')) sitemapStats.malformed++;
    });
}

// Robots audit
const robotsPath = path.join(distDir, 'robots.txt');
let robotsPass = false;
if (fs.existsSync(robotsPath)) {
    const rb = fs.readFileSync(robotsPath, 'utf8');
    if (rb.includes('Allow: /') && !rb.includes('Disallow: /tools') && !rb.includes('Disallow: /category')) {
        robotsPass = true;
    }
}

console.log(JSON.stringify({ stats, sitemapStats, robotsPass }, null, 2));

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
    module.exports = {
        title: 'WikIG',
        tagline: 'Le Wiki de la section IG',
        url: 'https://section-ig.github.io',
        baseUrl: '/wiki/',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        favicon: 'img/favicon.ico',
        organizationName: 'section-ig', // Usually your GitHub org/user name.
        projectName: 'wiki', // Usually your repo name.

        plugins: ['@docusaurus/plugin-ideal-image'],
        presets: [
            [
                '@docusaurus/preset-classic',
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        sidebarPath: require.resolve('./sidebars.js'),
                        editUrl: 'https://github.com/section-ig/wiki/edit/main/'
                    },
                    blog: false,
                    theme: {
                        customCss: require.resolve('./src/css/custom.css')
                    }
                })
            ]
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                navbar: {
                    title: 'WikIG',
                    logo: {
                        alt: 'WikIG Logo',
                        src: 'img/logo.svg'
                    },
                    items: [
                        {
                            type: 'doc',
                            docId: 'intro',
                            position: 'left',
                            label: 'Articles'
                        },
                        {
                            to: 'resources',
                            label: 'Ressources',
                            position: 'left'
                        },
                        {
                            href: 'https://github.com/section-IG/wiki',
                            label: 'GitHub',
                            position: 'right'
                        }
                    ]
                },
                footer: {
                    style: 'dark',
                    copyright: `Copyright © ${new Date().getFullYear()} WikIG, Inc. Built with Docusaurus.`
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme
                }
            })
    }
);

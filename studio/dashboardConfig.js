export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dffb3c1e91cba5f5df913b9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dimzi2eg',
                  apiId: 'beed1b9f-ba0a-4371-9096-611060af0f99'
                },
                {
                  buildHookId: '5dffb3c25695336a46c83ea7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fea4dj9a',
                  apiId: '2be8a2ea-4655-4333-8dec-ca0ad59c65b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josephstrid/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fea4dj9a.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

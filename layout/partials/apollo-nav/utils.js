export const colors = {
  primary: '#220a82',
  secondary: '#e535ab',
  tertiary: '#14cbc4',
  lightest: '#ffffff',
  light: '#f7f8fa',
  medium: '#d8d9e0',
  dark: '#747790',
  darker: '#343c5a',
  darkest: '#23232f',
};

export const navItems = [
  {
    title: 'Home',
    href: '/',
    class: '',
    children: [],
  },
  {
    title: 'Client',
    href: '/client',
    class: 'client',
    children: [
      {
        title: 'React + React Native',
        href: 'https://www.apollographql.com/docs/react/',
      },
      {
        title: 'Angular',
        href: 'https://www.apollographql.com/docs/angular',
      },
      {
        title: 'Vue.js',
        href: 'https://github.com/akryum/vue-apollo',
        newPage: true,
      },
      {
        title: 'Apollo Link',
        href: 'https://www.apollographql.com/docs/link',
      },
      {
        title: 'Native iOS',
        href: 'https://www.apollographql.com/docs/ios',
      },
      {
        title: 'Native Android',
        href: 'https://github.com/apollographql/apollo-android',
        newPage: true,
      },
      {
        title: 'Scala.js',
        href: 'https://www.apollographql.com/docs/scalajs',
      },
    ],
  },

  {
    title: 'Engine',
    href: '/engine',
    class: 'engine',
    children: [
      {
        title: 'Features',
        href: '/engine',
      },
      {
        title: 'Setup',
        href: 'https://www.apollographql.com/docs/engine/setup-node.html',
      },
      {
        title: 'Performance Tracing',
        href: 'https://www.apollographql.com/docs/engine/performance.html',
      },
      {
        title: 'Caching',
        href: 'https://www.apollographql.com/docs/engine/caching.html',
      },
      {
        title: 'Error Tracking',
        href: 'https://www.apollographql.com/docs/engine/error-tracking.html',
      },
    ],
  },

  {
    title: 'Server',
    href: '/server',
    class: 'server',
    children: [
      {
        title: 'Apollo Server',
        href: 'https://www.apollographql.com/docs/apollo-server/',
      },
      {
        title: 'graphql-tools',
        href: 'https://www.apollographql.com/docs/graphql-tools/',
      },
      {
        title: 'Schema Stitching',
        href:
          'https://www.apollographql.com/docs/graphql-tools/schema-stitching.html',
      },
      {
        title: 'GraphQL Subscriptions',
        href: 'https://www.apollographql.com/docs/graphql-subscriptions/',
      },
    ],
  },

  {
    title: 'Docs',
    href: '/docs',
    class: 'docs',
    children: [
      {
        subheading: 'Client',
        children: [
          {
            title: 'React + React Native',
            href: 'https://www.apollographql.com/docs/react',
          },
          {
            title: 'Angular',
            href: 'https://www.apollographql.com/docs/angular',
          },
          {
            title: 'Vue.js',
            href: 'https://github.com/akryum/vue-apollo',
            newPage: true,
          },
          {
            title: 'Apollo Link',
            href: 'https://www.apollographql.com/docs/link',
          },
          {
            title: 'Native iOS',
            href: 'https://www.apollographql.com/docs/ios',
          },
          {
            title: 'Native Android',
            href: 'https://github.com/apollographql/apollo-android',
            newPage: true,
          },
          {
            title: 'Scala.js',
            href: 'https://www.apollographql.com/docs/scalajs',
          },
        ],
      },
      {
        subheading: 'Engine',
        children: [
          {
            title: 'Setup',
            href: 'https://www.apollographql.com/docs/engine/setup-node.html',
          },
          {
            title: 'Performance Tracing',
            href: 'https://www.apollographql.com/docs/engine',
          },
          {
            title: 'Caching',
            href: 'https://www.apollographql.com/docs/engine',
          },
          {
            title: 'Error Tracking',
            href: 'https://www.apollographql.com/docs/engine',
          },
        ],
      },
      {
        subheading: 'Server',
        children: [
          {
            title: 'Apollo Server',
            href: 'https://www.apollographql.com/docs/apollo-server',
          },
          {
            title: 'graphql-tools',
            href: 'https://www.apollographql.com/docs/graphql-tools',
          },
          {
            title: 'Schema Stitching',
            href:
              'https://www.apollographql.com/docs/graphql-tools/schema-stitching.html',
          },
          {
            title: 'GraphQL Subscriptions',
            href: 'https://www.apollographql.com/docs/graphql-subscriptions',
          },
        ],
      },
    ],
  },

  {
    title: 'Support',
    href: '/support',
    class: 'support',
  },

  {
    title: 'Careers',
    href: '/careers',
    class: 'careers',
    children: [
      {
        title: 'Careers',
        href: '/careers',
      },
      {
        title: 'Open Positions',
        href: '/careers/positions',
      },
      {
        title: 'Culture',
        href: '/careers/culture',
      },
      {
        title: 'Team',
        href: '/careers/team',
      },
      {
        title: 'Interns',
        href: '/careers/interns',
      },
    ],
  },

  {
    title: 'Community',
    href: '/docs/community',
    class: 'community',
    children: [
      {
        subheading: 'Social',
        children: [
          {
            title: 'Blog',
            href: 'https://dev-blog.apollodata.com/',
            newPage: true,
          },
          {
            title: 'Slack',
            href: '/slack',
          },
          {
            title: 'Twitter',
            href: 'https://twitter.com/apollographql',
            newPage: true,
          },
          {
            title: 'YouTube',
            href: 'https://www.youtube.com/c/ApolloGraphQL',
            newPage: true,
          },
        ],
      },
      {
        subheading: 'Get involved',
        children: [
          {
            title: 'Contribute',
            href: 'https://www.apollographql.com/docs/community/',
          },
          {
            title: 'GraphQL Summit',
            href: 'https://summit.graphql.com/',
            newPage: true,
          },
          {
            title: 'Explore GraphQL',
            href: 'https://www.graphql.com/',
            newPage: true,
          },
        ],
      },
    ],
  },
];

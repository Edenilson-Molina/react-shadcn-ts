export const rootPaths = {
  root: '/',
  adminRoot: '/admin',
  pagesRoot: '/',
  authRoot: '/auth',
  errorRoot: '/error',
}

const paths = {
  default: rootPaths.root,
  login: `${rootPaths.authRoot}/login`,
  signup: `${rootPaths.authRoot}/signup`,
  notFound: `${rootPaths.errorRoot}/404`,
}

export default paths;
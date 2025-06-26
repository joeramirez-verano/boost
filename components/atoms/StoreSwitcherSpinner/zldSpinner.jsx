import ContentLoader from 'react-content-loader'

export const SwitcherSpinnerZld = (props) => (
  <ContentLoader speed={2} height={50} backgroundColor="#52525b" foregroundColor="#09090b" {...props}>
    <rect x="0" y="0" rx="3" ry="3" width="40" height="40" />
    <rect x="48" y="8" rx="3" ry="3" width="88" height="8" />
    <rect x="48" y="32" rx="3" ry="3" width="130" height="8" />
  </ContentLoader>
)

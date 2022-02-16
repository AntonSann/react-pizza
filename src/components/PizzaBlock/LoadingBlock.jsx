import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {

  return (
  <ContentLoader 
  className='pizza-block'
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="130" r="130" /> 
    <rect x="0" y="275" rx="10" ry="10" width="280" height="24" /> 
    <rect x="0" y="319" rx="10" ry="10" width="280" height="84" /> 
    <rect x="0" y="419" rx="10" ry="10" width="75" height="30" /> 
    <rect x="129" y="411" rx="25" ry="25" width="150" height="44" />
  </ContentLoader>
  )
}

export default LoadingBlock


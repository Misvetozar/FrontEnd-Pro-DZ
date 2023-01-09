import React from 'react'

function NavigationLink({path, navigate, label, currentPath}) {
  return (
    <div
        className={
            ' navigation-link' +
            (currentPath === path ? ' active' : '')
         }
         onClick={() => navigate(path)}>
            {label}</div>
  )
}

export default NavigationLink
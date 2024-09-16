import React from 'react'

export default function Tabs({wrapperType,children}) {
    //directly using the wrapper here would search for internal tag cause of samll csae, so assign to a variable with PascalCase
    const Wrapper = wrapperType // menu or ul or custom component.,
  return (
    <Wrapper>{children}</Wrapper>
  )
}

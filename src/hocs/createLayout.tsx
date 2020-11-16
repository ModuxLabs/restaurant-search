import React, { FC } from 'react'

export type LayoutComp = FC<{ Child: FC<{ render: FC }> }>

function createLayout<LayoutChildren> (Comp: LayoutComp): FC & any {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    if (!props.children) {
      return <Comp {...props} Child={() => null} />
    }

    const childArr = React.Children.toArray(props.children)

    const Child: FC<{ render: FC }> = ({ render }) => (
      childArr.find(({ type }) => (
        type && type.name === render.name
      )) || null
    )

    return <Comp {...props} Child={Child} />
  }
}

export default createLayout

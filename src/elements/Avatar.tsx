// @ts-ignore
import React from "react"
import styled from "styled-components"
import { space, SpaceProps } from "styled-system"

const sizeValue = ({ size = "" }) => {
  switch (size) {
    case "small":
      return "70px"
    default:
      return "100px"
  }
}

export interface AvatarProps extends SpaceProps {
  /** The size of the Avatar */
  size?: "small" | "default"
}

/**
 * A circular avatar image component.
 */
export const Avatar = styled.img.attrs<AvatarProps>({})`
  width: ${props => sizeValue(props)};
  height: ${props => sizeValue(props)};
  border-radius: ${props => sizeValue(props)};
  ${space};
`

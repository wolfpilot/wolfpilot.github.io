import styled from "styled-components"

// Types
import { Tag } from "./Showcase"

// Utils
import { usePageDispatch } from "@utils/context/PageContext"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { duration, ease } from "@styles/animation"

export interface Props {
  tag: Tag
  isActive: boolean
  taggedItemsAmount: number
}

const ShowcaseNavItem: React.FC<Props> = ({
  tag,
  isActive,
  taggedItemsAmount,
}) => {
  const pageDispatch = usePageDispatch()

  const handleClickTag = () => {
    pageDispatch({
      type: "updateShowcaseActiveTag",
      payload: tag,
    })
  }

  return (
    <Wrapper>
      <Button $isActive={isActive} onClick={handleClickTag}>
        {tag} <sup>{taggedItemsAmount}</sup>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;

  ${mq.from.L`
    margin-top: 0;
    margin-bottom: 0;
  `}

  &:not(:last-child) {
    // Spacer pseudo-element
    &::after {
      content: "|";
      display: block;
      margin-right: calc(var(--spacing-default) / 2);
      margin-left: calc(var(--spacing-default) / 2);
      color: var(--c-neutral2);
    }
  }
`

const Button = styled.button<{ $isActive: boolean }>`
  padding: 4px 0;
  outline: none;
  border: none;
  background: none;
  color: ${({ $isActive }) =>
    $isActive ? "var(--c-accent2)" : "var(--c-neutral1)"};
  transition: color ${duration.medium}s ${ease.cubic};

  &:focus {
    color: var(--c-black);
  }

  &:hover {
    color: var(--c-accent2);
  }
`

export default ShowcaseNavItem

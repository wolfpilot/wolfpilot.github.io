import Image from "next/image"
import { motion } from "framer-motion"
import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { textStyles } from "@styles/textStyles"
import { duration, ease } from "@styles/animation"

// Components
import Container from "@components/layout/Container/Container"
import ExternalLink from "@components/generic/ExternalLink"
import InternalLink from "@components/generic/InternalLink"
import Text from "@components/generic/Text"
import Tooltip from "@components/generic/Tooltip"

export const Wrapper = styled.article``

export const Header = styled.header`
  padding-top: var(--spacing-block);
`

export const Hero = styled.div`
  margin-bottom: var(--spacing-block);
  background-color: var(--c-neutral5);
`

export const HeroTagline = styled(Text)`
  ${textStyles.copyL};
  padding-top: var(--spacing-default);
  padding-bottom: var(--spacing-default);
`

export const HeroImageCredits = styled(Tooltip)`
  display: block;
`

export const HeroImageCreditsLink = styled(ExternalLink)`
  position: absolute;
  right: var(--spacing-default);
  bottom: var(--spacing-default);
  color: var(--c-white);
  opacity: 0.2;
  transition: opacity ${duration.medium}s ${ease.cubic};

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    opacity: 1;
    outline: none;
    text-decoration: underline;
  }
`

export const HeroImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  &:hover {
    ${HeroImageCreditsLink} {
      opacity: 1;
    }
  }
`

export const HeroImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, transparent, var(--c-neutral5));
  pointer-events: none;
`

export const HeroImage = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
  min-height: 320px;
  object-fit: cover;

  ${mq.from.XL`
    max-height: 640px;
  `}
`

export const HeroInfo = styled.div`
  padding-top: calc(2 * var(--spacing-default));
  padding-bottom: calc(2 * var(--spacing-default));

  ${mq.from.M`
    display: flex;
  `}
`

export const HeroInfoBlock = styled.div`
  text-align: center;

  ${mq.from.M`
    flex: 1;
  `}

  &:not(:last-child) {
    margin-bottom: var(--spacing-default);

    ${mq.from.M`
      margin-bottom: 0;
    `}
  }
`

export const HeroInfoType = styled.div`
  ${textStyles.copy};
  color: var(--c-neutral2);
`

export const HeroInfoText = styled.div`
  ${textStyles.copy};
`

export const HeroInfoLink = styled(InternalLink)`
  ${textStyles.copy};
  ${textStyles.hyperlink};
`

export const Summary = styled.div`
  margin-bottom: calc(2 * var(--spacing-block));
`

export const SummaryContent = styled.div`
  ${mq.from.M`
    display: flex;
    justify-content: space-between;
  `}

  ${mq.from.L`
    padding-left: calc(var(--grid-column-size) + var(--grid-gutter-size));
    padding-right: calc(var(--grid-column-size) + var(--grid-gutter-size));
  `}
`

export const SummaryHeadingWrapper = styled.div`
  ${mq.from.M`
    width: calc(2 * var(--grid-column-size) + 1 * var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(4 * var(--grid-column-size) + 4 * var(--grid-gutter-size));
  `}
`

export const SummaryRichTextWrapper = styled.div`
  ${mq.from.M`
    width: calc(3 * var(--grid-column-size) + 2 * var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(5 * var(--grid-column-size) + 4 * var(--grid-gutter-size));
  `}
`

export const Statement = styled.div`
  margin-bottom: calc(3 * var(--spacing-block));
`

export const Content = styled.div`
  margin-bottom: calc(2 * var(--spacing-block));
`

export const Footer = styled.footer`
  position: relative;
  height: 350px;

  ${mq.from.M`
    height: 400px;
  `}

  ${mq.from.L`
    height: 450px;
  `}
`

export const FooterImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--g-neutral-radial);
  }
`

export const FooterImage = styled(Image)<{ $isLoaded: boolean }>`
  z-index: -1;
  object-fit: cover;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity ${duration.slow}s ${ease.cubic};
`

export const FooterNavContainer = styled(Container)`
  height: 100%;
`

export const FooterNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${mq.from.L`
    flex-direction: row;
  `}
`

export const FooterNavLinkWrapper = styled.div`
  text-align: center;

  ${mq.from.L`
    width: calc(3 * var(--grid-column-size) + 3 * var(--grid-gutter-size));
    text-align: center;
  `}

  &:not(:last-child) {
    margin-bottom: var(--spacing-default);

    ${mq.from.L`
      margin-bottom: 0;
    `}
  }
`

export const FooterNavLink = styled(InternalLink)`
  ${textStyles.headingS};
  color: var(--c-accent3);
  text-align: center;
  transition: color ${duration.medium}s ${ease.cubic};

  &:focus,
  &:hover {
    outline: none;
    text-decoration: underline;
  }
`

export const FooterNavLinkText = styled.div`
  ${textStyles.copyL};
  color: var(--c-white);
`

export const FooterCaseCurrent = styled.div`
  order: -1;
  margin-bottom: var(--spacing-default);
  color: var(--c-white);
  text-align: center;

  ${mq.from.L`
    order: initial;
    margin-bottom: 0;
    width: calc(6 * var(--grid-column-size) + 5 * var(--grid-gutter-size));
  `}
`

export const FooterCaseText = styled.div`
  ${textStyles.copyL};
`

export const FooterCaseName = styled.div`
  ${textStyles.headingM};
`

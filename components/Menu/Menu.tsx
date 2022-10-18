import React from 'react'
import Link from 'next/link'
import { withRouter, NextRouter } from 'next/router'
import style from './menu.module.css'

interface WithRouterProps {
  router: NextRouter
}

interface ComposedComponent extends WithRouterProps {
  children: React.ReactElement
  href: string
}

const ComposedComponent = ({ router, children, ...props }: ComposedComponent) => (
  <Link {...props}>
    {React.cloneElement(children, {
      className: router.pathname === props.href ? `${style.item} ${style.item_active}` : style.item,
    })}
  </Link>
)

const ActiveLink = withRouter(ComposedComponent)

export default function Menu () {
  return (
    <nav className={style.root}>
      <ActiveLink href="/"><a>Главная</a></ActiveLink>
      <ActiveLink href="/ci-cd"><a>CI/CD</a></ActiveLink>
      <ActiveLink href="/react"><a>React</a></ActiveLink>
      <ActiveLink href="/nextjs"><a>Next.js</a></ActiveLink>
      <ActiveLink href="/api/hello"><a>API</a></ActiveLink>
    </nav>
  )
}

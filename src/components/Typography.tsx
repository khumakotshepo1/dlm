import { cn } from "@/lib/utils";

export function TypographyH1({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
      {children}
    </h1>
  )
}

export function TypographyH2({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h2 className={cn("scroll-m-20 text-3xl font-extrabold tracking-tight", className)}>
      {children}
    </h2>
  )
}

export function TypographyH3({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-extrabold tracking-tight", className)}>
      {children}
    </h3>
  )
}

export function TypographyH4({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  )
}

export function TypographyP({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p className={cn("scroll-m-20 text-lg text-gray-500 dark:text-gray-400", className)}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <blockquote className={cn("scroll-m-20 text-lg text-gray-500 dark:text-gray-400", className)}>
      {children}
    </blockquote>
  )
}

export function TypographyList({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <ul className={cn("scroll-m-20 text-lg text-gray-500 dark:text-gray-400", className)}>
      <li>{children}</li>
      <li>{children}</li>
      <li>{children}</li>
    </ul>
  )
}

export function TypographyInlineCode({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <code className={cn("scroll-m-20 text-lg text-gray-500 dark:text-gray-400", className)}>
      {children}
    </code>
  )
}

export function TypographyLead({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p className={cn("scroll-m-20 text-lg text-gray-500 dark:text-gray-400", className)}>
      {children}
    </p>
  )
}

export function TypographyLarge({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p className={cn("scroll-m-20 text-2xl text-gray-500 dark:text-gray-400", className)}>
      {children}
    </p>
  )
}

export function TypographySmall({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p className={cn("scroll-m-20 text-sm text-gray-500 dark:text-gray-400", className)}>
      {children}
    </p>
  )
}

export function TypographyMuted({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p className={cn("scroll-m-20 text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}

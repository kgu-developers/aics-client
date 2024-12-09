import { ChevronRight } from 'lucide-react';

import { cn } from '../../utils';

import * as styles from './breadcrumb.css';

export default function Breadcrumb({
  ref,
  ...props
}: React.ComponentPropsWithoutRef<'nav'> & { ref?: React.Ref<HTMLElement> }) {
  return <nav ref={ref} aria-label="breadcrumb" {...props} />;
}

function List({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'ol'> & {
  ref?: React.Ref<HTMLOListElement>;
}) {
  return (
    <ol ref={ref} className={cn(styles.breadcrumbList, className)} {...props} />
  );
}

function Item({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { ref?: React.Ref<HTMLLIElement> }) {
  return (
    <li ref={ref} className={cn(styles.breadcrumbItem, className)} {...props} />
  );
}

function Link({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'a'> & {
  ref?: React.Ref<HTMLAnchorElement>;
  isLast?: boolean;
}) {
  return (
    <a ref={ref} className={cn(styles.breadcrumbLink, className)} {...props} />
  );
}

function Page({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'> & {
  ref?: React.Ref<HTMLSpanElement>;
}) {
  return (
    <span
      ref={ref}
      className={cn(styles.breadcrumbPage, className)}
      {...props}
    />
  );
}

function Separator({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'li'>) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn(styles.breadcrumbSeperator, className)}
      {...props}
    >
      {children ?? <ChevronRight size={'0.875rem'} />}
    </li>
  );
}

Breadcrumb.Item = Item;
Breadcrumb.Link = Link;
Breadcrumb.List = List;
Breadcrumb.Page = Page;
Breadcrumb.Separator = Separator;

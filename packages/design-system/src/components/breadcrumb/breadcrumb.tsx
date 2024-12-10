import { ChevronRight } from 'lucide-react';

import { cn } from '../../utils';

import * as styles from './breadcrumb.css';

export default function Breadcrumb({
  ...props
}: React.ComponentPropsWithoutRef<'nav'>) {
  return <nav aria-label="breadcrumb" {...props} />;
}

function List({ className, ...props }: React.ComponentPropsWithoutRef<'ol'>) {
  return <ol className={cn(styles.breadcrumbList, className)} {...props} />;
}

function Item({ className, ...props }: React.ComponentPropsWithoutRef<'li'>) {
  return <li className={cn(styles.breadcrumbItem, className)} {...props} />;
}

function Link({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'a'> & {
  isLast?: boolean;
}) {
  return <a className={cn(styles.breadcrumbLink, className)} {...props} />;
}

function Page({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'> & {}) {
  return <span className={cn(styles.breadcrumbPage, className)} {...props} />;
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

import { Link, createFileRoute } from '@tanstack/react-router'
import { Button } from 'antd'

import { useAboutServiceGetApiV1AboutsSuspense } from '~/features/dept/services'

import DeptIntroContent from '~/features/dept/components/deptIntroContent'
import {
  isDeptIntroEmpty,
  DEPT_INTRO_LABELS,
  DEPT_INTRO_CATEGORY,
} from '~/features/dept/constants/deptIntro'
import { DEPT_ROUTE, PATH_DEPT } from '~/features/dept/constants/path'
export const Route = createFileRoute(DEPT_ROUTE)({
  component: DeptPage,
})

function DeptPage() {
  const { data } = useAboutServiceGetApiV1AboutsSuspense({
    category: DEPT_INTRO_CATEGORY,
  })

  const empty = isDeptIntroEmpty(data.content)

  return (
    <section className="flex flex-col w-full gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold ">{DEPT_INTRO_LABELS.title}</h1>
        <Link to={PATH_DEPT.EDIT_DEPT} className="self-end">
          <Button type="primary">
            {empty ? DEPT_INTRO_LABELS.create : DEPT_INTRO_LABELS.edit}
          </Button>
        </Link>
      </div>
      <DeptIntroContent content={data.content} />
    </section>
  )
}

export default DeptPage

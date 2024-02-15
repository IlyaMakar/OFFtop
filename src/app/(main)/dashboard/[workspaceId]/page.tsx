export const dynamic = 'force-dynamic'

import QuillEditor from '@/components/quill-editor/quill-editor'
import { getWorkspaceDetails } from '@/lib/supabase/queries'
import { redirect } from 'next/navigation'
import React from 'react'

interface Task {
	id: number
	text: string
}

interface List {
	id: number
	title: string
	cards: Task[]
}

const lists: List[] = [
	{
		id: 1,
		title: 'To Do',
		cards: [
			{ id: 1, text: 'Task 1' },
			{ id: 2, text: 'Task 2' }
		]
	},
	{ id: 2, title: 'In Progress', cards: [{ id: 3, text: 'Task 3' }] },
	{ id: 3, title: 'Done', cards: [] }
]

const Workspace = async ({ params }: { params: { workspaceId: string } }) => {
	const { data, error } = await getWorkspaceDetails(params.workspaceId)
	if (error || !data.length) redirect('/dashboard')
	return (
		<div className='relative'>
			<QuillEditor
				dirType='workspace'
				fileId={params.workspaceId}
				dirDetails={data[0] || {}}
			/>
		</div>
	)
}

export default Workspace

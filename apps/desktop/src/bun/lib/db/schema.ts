import {
	int,
	sqliteTable,
	text,
	uniqueIndex,
	index,
} from 'drizzle-orm/sqlite-core'

export const exampleTable = sqliteTable('example_table', {
	id: text(),
	name: text(),
})

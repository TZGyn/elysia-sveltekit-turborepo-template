const env = (Bun.env.ELECTROBUN_ENV as string) || 'dev'

console.log('ENV', env)

const name = 'example-app' as const

export const getENV = () => {
	if (env === 'stable') {
		return {
			env,
			appName: name,
			dbFilename: `${name}.db`,
		} as const
	} else {
		return {
			env,
			appName: `${name}-${env}`,
			dbFilename: `${name}-${env}.db`,
		} as const
	}
}

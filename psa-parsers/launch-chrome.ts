import { spawn } from 'node:child_process'
import { homedir } from 'node:os'
import { join } from 'node:path'

const debug_port = 9222
const chrome_path =
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const profile_dir = join(homedir(), '.psa-chrome-profile')

const launch_chrome = () => {
	const child = spawn(
		chrome_path,
		[
			`--remote-debugging-port=${debug_port}`,
			`--user-data-dir=${profile_dir}`,
			'--no-first-run',
			'--no-default-browser-check',
		],
		{ detached: true, stdio: 'ignore' }
	)

	child.unref()

	console.log(
		`Launched Chrome with remote debugging on port ${debug_port}\n` +
			`Profile: ${profile_dir}\n` +
			`Solve any Cloudflare challenge once; the clearance cookie persists in this profile.`
	)
}

launch_chrome()

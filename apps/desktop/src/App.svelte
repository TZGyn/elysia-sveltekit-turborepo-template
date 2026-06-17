<script lang="ts">
	import './app.css'
	import { Router } from 'sv-router'
	import { p } from 'sv-router/generated'
	import { ModeWatcher } from 'mode-watcher'
</script>

<a href={p('/')}>Home</a>
<a href={p('/about')}>About</a>
<Router />
<ModeWatcher />

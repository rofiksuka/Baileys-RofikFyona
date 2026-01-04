import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { UserFacingSocketConfig } from '../Types'
import { makeCommunitiesSocket } from './communities'

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
	// --- MULAI BRANDING ROFIK ---
	console.log('\n')
	console.log('╔════════════════════════════════════════════════════════╗')
	console.log('║            🔥 MODIFIED BAILEYS BY ROFIK 🔥             ║')
	console.log('║                                                        ║')
	console.log('║ • My Contact : @punyakah                               ║')
	console.log('║ • Thank you to the Users of My Baileys                 ║')
	console.log('║   and I thank you for using this script!               ║')
	console.log('╚════════════════════════════════════════════════════════╝')
	console.log('\n')
	// --- SELESAI BRANDING ROFIK ---

	const newConfig = {
		...DEFAULT_CONNECTION_CONFIG,
		...config
	}

	// If the user hasn't provided their own history sync function,
	// let's create a default one that respects the syncFullHistory flag.
	// TODO: Change
	if (config.shouldSyncHistoryMessage === undefined) {
		newConfig.shouldSyncHistoryMessage = () => !!newConfig.syncFullHistory
	}

	return makeCommunitiesSocket(newConfig)
}

export default makeWASocket
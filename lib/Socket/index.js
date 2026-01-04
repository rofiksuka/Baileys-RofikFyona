import { DEFAULT_CONNECTION_CONFIG } from '../Defaults/index.js';
import { makeCommunitiesSocket } from './communities.js';
// --- 1. FITUR POLISI VERSI (TETAP ADA) ---
const checkDependency = (moduleName, requiredVersion) => {
    try {
        // @ts-ignore
        const installedVersion = require(`${moduleName}/package.json`).version;
        if (!installedVersion.startsWith(requiredVersion.split('.')[0])) {
            console.log('\n\n');
            console.log('🚨 ----------------------------------------------------------- 🚨');
            console.log(`⚠️  WOY BRO! MODULE ${moduleName.toUpperCase()} LU TU JADUL BANGET! 😂`);
            console.log(`   Versi di bot lu : ${installedVersion}`);
            console.log(`   Versi yang bener: ^${requiredVersion}`);
            console.log(`👉 INSTALL VERSI INI BIAR GAK JADUL LAGI:`);
            console.log(`   npm install ${moduleName}@^${requiredVersion}`);
            console.log('🚨 ----------------------------------------------------------- 🚨');
            console.log('\n');
        }
    }
    catch (error) {
        console.log(`\n⚠️  WADUH! Lu belum install ${moduleName} bro! Install dulu gih. 😂\n`);
    }
};
// export the last socket layer
const makeWASocket = (config) => {
    // Cek JIMP pas start
    checkDependency('jimp', '1.6.0');
    // --- 2. BRANDING BANNER LENGKAP (TETAP ADA) ---
    console.log('\n');
    console.log('╔════════════════════════════════════════════════════════╗');
    console.log('║            🔥 MODIFIED BAILEYS BY ROFIK 🔥             ║');
    console.log('║                                                        ║');
    console.log('║ • My Contact : @punyakah                               ║');
    console.log('║ • Thank you to the Users of My Baileys                 ║');
    console.log('║   and I thank you for using this script!               ║');
    console.log('╚════════════════════════════════════════════════════════╝');
    console.log('\n');
    const newConfig = {
        ...DEFAULT_CONNECTION_CONFIG,
        ...config
    };
    if (config.shouldSyncHistoryMessage === undefined) {
        newConfig.shouldSyncHistoryMessage = () => !!newConfig.syncFullHistory;
    }
    // KEMBALI ORIGINAL: Langsung return tanpa di-intercept
    // Pairing Code bakal muncul normal (acak) sesuai aslinya.
    return makeCommunitiesSocket(newConfig);
};
export default makeWASocket;
//# sourceMappingURL=index.js.map
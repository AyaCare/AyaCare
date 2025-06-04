const crypto = require('crypto');
const fs = require('fs');

const KEY_TYPES = {
    '10min': 10 * 60 * 1000,
    '1day': 24 * 60 * 60 * 1000,
    '30days': 30 * 24 * 60 * 60 * 1000,
    '6months': 6 * 30 * 24 * 60 * 60 * 1000,
    '1year': 365 * 24 * 60 * 60 * 1000
};

function generateKey(validity) {
    const key = crypto.randomBytes(32).toString('hex');
    const expiry = Date.now() + validity;
    return { key, expiry, used: false };
}

function saveKey(keyData) {
    const keys = loadKeys();
    keys.push(keyData);
    fs.writeFileSync('keys.json', JSON.stringify(keys));
}

function validateKey(keyToCheck, deviceId) {
    try {
        const keys = loadKeys();
        const now = Date.now();
        const keyData = keys.find(k => k.key === keyToCheck);
        
        if (!keyData) return false;
        if (keyData.expiry <= now) return false;
        if (keyData.used && keyData.deviceId !== deviceId) return false;
        
        // 如果是首次使用，记录设备ID
        if (!keyData.used && deviceId) {
            keyData.used = true;
            keyData.deviceId = deviceId;
            fs.writeFileSync('keys.json', JSON.stringify(keys));
        }
        
        return true;
    } catch (e) {
        console.error('密钥验证出错:', e);
        return false;
    }
}

function loadKeys() {
    try {
        return JSON.parse(fs.readFileSync('keys.json'));
    } catch (e) {
        return [];
    }
}

// 生成新的测试密钥(有效期延长)
const testKey = generateKey(KEY_TYPES['1day']);
saveKey(testKey);
console.log('New test key:', testKey.key);

module.exports = {
    generateKey,
    saveKey,
    loadKeys,
    validateKey,
    KEY_TYPES
};

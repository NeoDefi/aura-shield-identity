// Contract address (will be set after deployment)
export const AURA_SHIELD_ADDRESS = process.env.VITE_AURA_SHIELD_ADDRESS || '0x0000000000000000000000000000000000000000';

// Contract ABI for AuraShieldIdentity
export const AURA_SHIELD_ABI = [
  {
    "inputs": [
      {"internalType": "address", "name": "_verifier", "type": "address"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "profileId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "owner", "type": "address"},
      {"indexed": false, "internalType": "string", "name": "publicName", "type": "string"}
    ],
    "name": "ProfileCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "profileId", "type": "uint256"},
      {"indexed": false, "internalType": "uint32", "name": "newScore", "type": "uint32"},
      {"indexed": true, "internalType": "address", "name": "issuer", "type": "address"}
    ],
    "name": "ReputationUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "requestId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "requester", "type": "address"},
      {"indexed": false, "internalType": "uint8", "name": "verificationType", "type": "uint8"}
    ],
    "name": "VerificationRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "requestId", "type": "uint256"},
      {"indexed": false, "internalType": "bool", "name": "approved", "type": "bool"},
      {"indexed": true, "internalType": "address", "name": "verifier", "type": "address"}
    ],
    "name": "VerificationCompleted",
    "type": "event"
  },
  {
    "inputs": [
      {"internalType": "string", "name": "_publicName", "type": "string"},
      {"internalType": "string", "name": "_publicDescription", "type": "string"}
    ],
    "name": "createProfile",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "_profileId", "type": "uint256"},
      {"internalType": "string", "name": "_publicName", "type": "string"},
      {"internalType": "string", "name": "_publicDescription", "type": "string"}
    ],
    "name": "updateProfile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "_profileId", "type": "uint256"},
      {"internalType": "uint8", "name": "_verificationType", "type": "uint8"},
      {"internalType": "string", "name": "_evidenceHash", "type": "string"}
    ],
    "name": "requestVerification",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "_targetUser", "type": "address"},
      {"internalType": "uint32", "name": "_score", "type": "uint32"},
      {"internalType": "uint8", "name": "_category", "type": "uint8"},
      {"internalType": "bool", "name": "_isPositive", "type": "bool"},
      {"internalType": "string", "name": "_description", "type": "string"}
    ],
    "name": "addReputationRecord",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "_profileId", "type": "uint256"}
    ],
    "name": "getProfileInfo",
    "outputs": [
      {"internalType": "string", "name": "publicName", "type": "string"},
      {"internalType": "string", "name": "publicDescription", "type": "string"},
      {"internalType": "uint8", "name": "verificationLevel", "type": "uint8"},
      {"internalType": "uint32", "name": "reputationScore", "type": "uint32"},
      {"internalType": "bool", "name": "isVerified", "type": "bool"},
      {"internalType": "bool", "name": "isActive", "type": "bool"},
      {"internalType": "address", "name": "owner", "type": "address"},
      {"internalType": "uint256", "name": "createdAt", "type": "uint256"},
      {"internalType": "uint256", "name": "lastUpdated", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "_user", "type": "address"}
    ],
    "name": "getUserReputationScore",
    "outputs": [{"internalType": "uint32", "name": "", "type": "uint32"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "_profileId", "type": "uint256"}
    ],
    "name": "deactivateProfile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

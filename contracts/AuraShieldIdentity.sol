// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@fhevm/lib/Reencrypt.sol";
import "@fhevm/lib/Fhe.sol";

contract AuraShieldIdentity {
    using Fhe for euint32;
    using Fhe for ebool;
    using Fhe for euint8;
    
    struct IdentityProfile {
        euint32 profileId;
        euint8 verificationLevel;
        euint32 reputationScore;
        ebool isVerified;
        ebool isActive;
        string publicName;
        string publicDescription;
        address owner;
        uint256 createdAt;
        uint256 lastUpdated;
    }
    
    struct ReputationRecord {
        euint32 recordId;
        euint32 score;
        euint8 category;
        ebool isPositive;
        string description;
        address issuer;
        uint256 timestamp;
    }
    
    struct VerificationRequest {
        euint32 requestId;
        euint8 verificationType;
        ebool isApproved;
        ebool isRejected;
        string evidenceHash;
        address requester;
        address verifier;
        uint256 timestamp;
    }
    
    mapping(uint256 => IdentityProfile) public profiles;
    mapping(uint256 => ReputationRecord) public reputationRecords;
    mapping(uint256 => VerificationRequest) public verificationRequests;
    mapping(address => uint256) public userProfileIds;
    mapping(address => euint32) public userReputationScores;
    
    uint256 public profileCounter;
    uint256 public reputationCounter;
    uint256 public verificationCounter;
    
    address public owner;
    address public verifier;
    
    event ProfileCreated(uint256 indexed profileId, address indexed owner, string publicName);
    event ReputationUpdated(uint256 indexed profileId, uint32 newScore, address indexed issuer);
    event VerificationRequested(uint256 indexed requestId, address indexed requester, uint8 verificationType);
    event VerificationCompleted(uint256 indexed requestId, bool approved, address indexed verifier);
    event ProfileUpdated(uint256 indexed profileId, address indexed owner);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createProfile(
        string memory _publicName,
        string memory _publicDescription
    ) public returns (uint256) {
        require(bytes(_publicName).length > 0, "Public name cannot be empty");
        require(userProfileIds[msg.sender] == 0, "Profile already exists");
        
        uint256 profileId = profileCounter++;
        
        profiles[profileId] = IdentityProfile({
            profileId: Fhe.asEuint32(profileId),
            verificationLevel: Fhe.asEuint8(0),
            reputationScore: Fhe.asEuint32(0),
            isVerified: Fhe.asEbool(false),
            isActive: Fhe.asEbool(true),
            publicName: _publicName,
            publicDescription: _publicDescription,
            owner: msg.sender,
            createdAt: block.timestamp,
            lastUpdated: block.timestamp
        });
        
        userProfileIds[msg.sender] = profileId;
        
        emit ProfileCreated(profileId, msg.sender, _publicName);
        return profileId;
    }
    
    function updateProfile(
        uint256 _profileId,
        string memory _publicName,
        string memory _publicDescription
    ) public {
        require(profiles[_profileId].owner == msg.sender, "Only profile owner can update");
        require(Fhe.decrypt(profiles[_profileId].isActive), "Profile is not active");
        
        profiles[_profileId].publicName = _publicName;
        profiles[_profileId].publicDescription = _publicDescription;
        profiles[_profileId].lastUpdated = block.timestamp;
        
        emit ProfileUpdated(_profileId, msg.sender);
    }
    
    function requestVerification(
        uint256 _profileId,
        euint8 _verificationType,
        string memory _evidenceHash
    ) public returns (uint256) {
        require(profiles[_profileId].owner == msg.sender, "Only profile owner can request verification");
        require(Fhe.decrypt(profiles[_profileId].isActive), "Profile is not active");
        
        uint256 requestId = verificationCounter++;
        
        verificationRequests[requestId] = VerificationRequest({
            requestId: Fhe.asEuint32(requestId),
            verificationType: _verificationType,
            isApproved: Fhe.asEbool(false),
            isRejected: Fhe.asEbool(false),
            evidenceHash: _evidenceHash,
            requester: msg.sender,
            verifier: address(0),
            timestamp: block.timestamp
        });
        
        emit VerificationRequested(requestId, msg.sender, Fhe.decrypt(_verificationType));
        return requestId;
    }
    
    function processVerification(
        uint256 _requestId,
        ebool _approved
    ) public {
        require(msg.sender == verifier, "Only verifier can process verification");
        require(verificationRequests[_requestId].requester != address(0), "Request does not exist");
        
        verificationRequests[_requestId].isApproved = _approved;
        verificationRequests[_requestId].isRejected = !_approved;
        verificationRequests[_requestId].verifier = msg.sender;
        
        if (Fhe.decrypt(_approved)) {
            uint256 profileId = userProfileIds[verificationRequests[_requestId].requester];
            profiles[profileId].isVerified = Fhe.asEbool(true);
            profiles[profileId].verificationLevel = profiles[profileId].verificationLevel + Fhe.asEuint8(1);
        }
        
        emit VerificationCompleted(_requestId, Fhe.decrypt(_approved), msg.sender);
    }
    
    function addReputationRecord(
        address _targetUser,
        euint32 _score,
        euint8 _category,
        ebool _isPositive,
        string memory _description
    ) public returns (uint256) {
        require(_targetUser != address(0), "Invalid target user");
        require(userProfileIds[_targetUser] != 0, "Target user has no profile");
        
        uint256 recordId = reputationCounter++;
        
        reputationRecords[recordId] = ReputationRecord({
            recordId: Fhe.asEuint32(recordId),
            score: _score,
            category: _category,
            isPositive: _isPositive,
            description: _description,
            issuer: msg.sender,
            timestamp: block.timestamp
        });
        
        // Update user's reputation score
        uint256 profileId = userProfileIds[_targetUser];
        if (Fhe.decrypt(_isPositive)) {
            profiles[profileId].reputationScore = profiles[profileId].reputationScore + _score;
        } else {
            profiles[profileId].reputationScore = profiles[profileId].reputationScore - _score;
        }
        
        userReputationScores[_targetUser] = userReputationScores[_targetUser] + Fhe.decrypt(_score);
        
        emit ReputationUpdated(profileId, Fhe.decrypt(profiles[profileId].reputationScore), msg.sender);
        return recordId;
    }
    
    function getProfileInfo(uint256 _profileId) public view returns (
        string memory publicName,
        string memory publicDescription,
        uint8 verificationLevel,
        uint32 reputationScore,
        bool isVerified,
        bool isActive,
        address owner,
        uint256 createdAt,
        uint256 lastUpdated
    ) {
        IdentityProfile storage profile = profiles[_profileId];
        return (
            profile.publicName,
            profile.publicDescription,
            Fhe.decrypt(profile.verificationLevel),
            Fhe.decrypt(profile.reputationScore),
            Fhe.decrypt(profile.isVerified),
            Fhe.decrypt(profile.isActive),
            profile.owner,
            profile.createdAt,
            profile.lastUpdated
        );
    }
    
    function getReputationRecord(uint256 _recordId) public view returns (
        uint32 score,
        uint8 category,
        bool isPositive,
        string memory description,
        address issuer,
        uint256 timestamp
    ) {
        ReputationRecord storage record = reputationRecords[_recordId];
        return (
            Fhe.decrypt(record.score),
            Fhe.decrypt(record.category),
            Fhe.decrypt(record.isPositive),
            record.description,
            record.issuer,
            record.timestamp
        );
    }
    
    function getVerificationRequest(uint256 _requestId) public view returns (
        uint8 verificationType,
        bool isApproved,
        bool isRejected,
        string memory evidenceHash,
        address requester,
        address verifier,
        uint256 timestamp
    ) {
        VerificationRequest storage request = verificationRequests[_requestId];
        return (
            Fhe.decrypt(request.verificationType),
            Fhe.decrypt(request.isApproved),
            Fhe.decrypt(request.isRejected),
            request.evidenceHash,
            request.requester,
            request.verifier,
            request.timestamp
        );
    }
    
    function getUserReputationScore(address _user) public view returns (uint32) {
        return Fhe.decrypt(userReputationScores[_user]);
    }
    
    function deactivateProfile(uint256 _profileId) public {
        require(profiles[_profileId].owner == msg.sender, "Only profile owner can deactivate");
        profiles[_profileId].isActive = Fhe.asEbool(false);
        emit ProfileUpdated(_profileId, msg.sender);
    }
    
    function setVerifier(address _newVerifier) public {
        require(msg.sender == owner, "Only owner can set verifier");
        verifier = _newVerifier;
    }
}

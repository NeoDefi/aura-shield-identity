import { useState } from 'react';
import { useAccount } from 'wagmi';
import { useCreateProfile, useUpdateProfile, useRequestVerification, useGetProfileInfo } from '../hooks/useAuraShield';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, Shield, CheckCircle, AlertCircle } from 'lucide-react';

export const IdentityManager = () => {
  const { address, isConnected } = useAccount();
  const [profileId, setProfileId] = useState<number | null>(null);
  const [publicName, setPublicName] = useState('');
  const [publicDescription, setPublicDescription] = useState('');
  const [verificationType, setVerificationType] = useState(1);
  const [evidenceHash, setEvidenceHash] = useState('');

  const { createProfile, isLoading: isCreating, isSuccess: createSuccess } = useCreateProfile();
  const { updateProfile, isLoading: isUpdating, isSuccess: updateSuccess } = useUpdateProfile();
  const { requestVerification, isLoading: isRequesting, isSuccess: requestSuccess } = useRequestVerification();
  const { profileInfo, isLoading: isLoadingProfile } = useGetProfileInfo(profileId || 0);

  const handleCreateProfile = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    await createProfile(publicName, publicDescription);
  };

  const handleUpdateProfile = async () => {
    if (!profileId) {
      alert('Please enter a profile ID');
      return;
    }

    await updateProfile(profileId, publicName, publicDescription);
  };

  const handleRequestVerification = async () => {
    if (!profileId) {
      alert('Please enter a profile ID');
      return;
    }

    await requestVerification(profileId, verificationType, evidenceHash);
  };

  if (!isConnected) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Identity Management
          </CardTitle>
          <CardDescription>
            Connect your wallet to manage your decentralized identity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Please connect your wallet to access identity management features.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Create Identity Profile
          </CardTitle>
          <CardDescription>
            Create your encrypted identity profile on the blockchain
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Public Name</label>
            <Input
              value={publicName}
              onChange={(e) => setPublicName(e.target.value)}
              placeholder="Enter your public name"
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Public Description</label>
            <Textarea
              value={publicDescription}
              onChange={(e) => setPublicDescription(e.target.value)}
              placeholder="Describe yourself (this will be encrypted)"
              className="mt-1"
            />
          </div>
          <Button 
            onClick={handleCreateProfile} 
            disabled={isCreating || !publicName}
            className="w-full"
          >
            {isCreating ? 'Creating Profile...' : 'Create Encrypted Profile'}
          </Button>
          {createSuccess && (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Profile created successfully! Your data is encrypted and stored on-chain.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Update Profile
          </CardTitle>
          <CardDescription>
            Update your encrypted identity information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Profile ID</label>
            <Input
              type="number"
              value={profileId || ''}
              onChange={(e) => setProfileId(Number(e.target.value))}
              placeholder="Enter your profile ID"
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Updated Name</label>
            <Input
              value={publicName}
              onChange={(e) => setPublicName(e.target.value)}
              placeholder="Enter updated name"
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Updated Description</label>
            <Textarea
              value={publicDescription}
              onChange={(e) => setPublicDescription(e.target.value)}
              placeholder="Enter updated description"
              className="mt-1"
            />
          </div>
          <Button 
            onClick={handleUpdateProfile} 
            disabled={isUpdating || !profileId}
            className="w-full"
          >
            {isUpdating ? 'Updating Profile...' : 'Update Encrypted Profile'}
          </Button>
          {updateSuccess && (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Profile updated successfully! Changes are encrypted and stored on-chain.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Request Verification
          </CardTitle>
          <CardDescription>
            Request identity verification with encrypted evidence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Profile ID</label>
            <Input
              type="number"
              value={profileId || ''}
              onChange={(e) => setProfileId(Number(e.target.value))}
              placeholder="Enter your profile ID"
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Verification Type</label>
            <Input
              type="number"
              value={verificationType}
              onChange={(e) => setVerificationType(Number(e.target.value))}
              placeholder="Enter verification type (1-5)"
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Evidence Hash</label>
            <Input
              value={evidenceHash}
              onChange={(e) => setEvidenceHash(e.target.value)}
              placeholder="Enter evidence hash (encrypted)"
              className="mt-1"
            />
          </div>
          <Button 
            onClick={handleRequestVerification} 
            disabled={isRequesting || !profileId || !evidenceHash}
            className="w-full"
          >
            {isRequesting ? 'Requesting Verification...' : 'Request Encrypted Verification'}
          </Button>
          {requestSuccess && (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Verification request submitted! Your evidence is encrypted and stored securely.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {profileId && (
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              View your encrypted profile data
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoadingProfile ? (
              <div>Loading profile information...</div>
            ) : profileInfo ? (
              <div className="space-y-2">
                <div><strong>Name:</strong> {profileInfo.publicName}</div>
                <div><strong>Description:</strong> {profileInfo.publicDescription}</div>
                <div><strong>Verification Level:</strong> {profileInfo.verificationLevel}</div>
                <div><strong>Reputation Score:</strong> {profileInfo.reputationScore}</div>
                <div><strong>Verified:</strong> {profileInfo.isVerified ? 'Yes' : 'No'}</div>
                <div><strong>Active:</strong> {profileInfo.isActive ? 'Yes' : 'No'}</div>
              </div>
            ) : (
              <div>No profile information found</div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

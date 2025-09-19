import { useWriteContract, useReadContract } from 'wagmi';
import { AURA_SHIELD_ADDRESS, AURA_SHIELD_ABI } from '../lib/contract';

export const useCreateProfile = () => {
  const { writeContract, isPending, isSuccess, error } = useWriteContract();

  const createProfile = async (publicName: string, publicDescription: string) => {
    try {
      await writeContract({
        address: AURA_SHIELD_ADDRESS,
        abi: AURA_SHIELD_ABI,
        functionName: 'createProfile',
        args: [publicName, publicDescription],
      });
    } catch (err) {
      console.error('Error creating profile:', err);
    }
  };

  return {
    createProfile,
    isLoading: isPending,
    isSuccess,
    error,
  };
};

export const useUpdateProfile = () => {
  const { writeContract, isPending, isSuccess, error } = useWriteContract();

  const updateProfile = async (profileId: number, publicName: string, publicDescription: string) => {
    try {
      await writeContract({
        address: AURA_SHIELD_ADDRESS,
        abi: AURA_SHIELD_ABI,
        functionName: 'updateProfile',
        args: [profileId, publicName, publicDescription],
      });
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  return {
    updateProfile,
    isLoading: isPending,
    isSuccess,
    error,
  };
};

export const useRequestVerification = () => {
  const { writeContract, isPending, isSuccess, error } = useWriteContract();

  const requestVerification = async (profileId: number, verificationType: number, evidenceHash: string) => {
    try {
      await writeContract({
        address: AURA_SHIELD_ADDRESS,
        abi: AURA_SHIELD_ABI,
        functionName: 'requestVerification',
        args: [profileId, verificationType, evidenceHash],
      });
    } catch (err) {
      console.error('Error requesting verification:', err);
    }
  };

  return {
    requestVerification,
    isLoading: isPending,
    isSuccess,
    error,
  };
};

export const useAddReputationRecord = () => {
  const { writeContract, isPending, isSuccess, error } = useWriteContract();

  const addReputationRecord = async (
    targetUser: string,
    score: number,
    category: number,
    isPositive: boolean,
    description: string
  ) => {
    try {
      await writeContract({
        address: AURA_SHIELD_ADDRESS,
        abi: AURA_SHIELD_ABI,
        functionName: 'addReputationRecord',
        args: [targetUser, score, category, isPositive, description],
      });
    } catch (err) {
      console.error('Error adding reputation record:', err);
    }
  };

  return {
    addReputationRecord,
    isLoading: isPending,
    isSuccess,
    error,
  };
};

export const useGetProfileInfo = (profileId: number) => {
  const { data, isLoading, error } = useReadContract({
    address: AURA_SHIELD_ADDRESS,
    abi: AURA_SHIELD_ABI,
    functionName: 'getProfileInfo',
    args: [profileId],
  });

  return {
    profileInfo: data,
    isLoading,
    error,
  };
};

export const useGetUserReputationScore = (userAddress: string) => {
  const { data, isLoading, error } = useReadContract({
    address: AURA_SHIELD_ADDRESS,
    abi: AURA_SHIELD_ABI,
    functionName: 'getUserReputationScore',
    args: [userAddress],
  });

  return {
    reputationScore: data,
    isLoading,
    error,
  };
};

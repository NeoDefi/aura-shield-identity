import { useContract, useContractWrite, useContractRead } from 'wagmi';
import { AURA_SHIELD_ADDRESS, AURA_SHIELD_ABI } from '../lib/contract';

export const useAuraShield = () => {
  const contract = useContract({
    address: AURA_SHIELD_ADDRESS,
    abi: AURA_SHIELD_ABI,
  });

  return {
    contract,
  };
};

export const useCreateProfile = () => {
  const { write, isLoading, isSuccess, error } = useContractWrite({
    address: AURA_SHIELD_ADDRESS,
    abi: AURA_SHIELD_ABI,
    functionName: 'createProfile',
  });

  const createProfile = (publicName: string, publicDescription: string) => {
    write({
      args: [publicName, publicDescription],
    });
  };

  return {
    createProfile,
    isLoading,
    isSuccess,
    error,
  };
};

export const useUpdateProfile = () => {
  const { write, isLoading, isSuccess, error } = useContractWrite({
    address: AURA_SHIELD_ADDRESS,
    abi: AURA_SHIELD_ABI,
    functionName: 'updateProfile',
  });

  const updateProfile = (profileId: number, publicName: string, publicDescription: string) => {
    write({
      args: [profileId, publicName, publicDescription],
    });
  };

  return {
    updateProfile,
    isLoading,
    isSuccess,
    error,
  };
};

export const useRequestVerification = () => {
  const { write, isLoading, isSuccess, error } = useContractWrite({
    address: AURA_SHIELD_ADDRESS,
    abi: AURA_SHIELD_ABI,
    functionName: 'requestVerification',
  });

  const requestVerification = (profileId: number, verificationType: number, evidenceHash: string) => {
    write({
      args: [profileId, verificationType, evidenceHash],
    });
  };

  return {
    requestVerification,
    isLoading,
    isSuccess,
    error,
  };
};

export const useAddReputationRecord = () => {
  const { write, isLoading, isSuccess, error } = useContractWrite({
    address: AURA_SHIELD_ADDRESS,
    abi: AURA_SHIELD_ABI,
    functionName: 'addReputationRecord',
  });

  const addReputationRecord = (
    targetUser: string,
    score: number,
    category: number,
    isPositive: boolean,
    description: string
  ) => {
    write({
      args: [targetUser, score, category, isPositive, description],
    });
  };

  return {
    addReputationRecord,
    isLoading,
    isSuccess,
    error,
  };
};

export const useGetProfileInfo = (profileId: number) => {
  const { data, isLoading, error } = useContractRead({
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
  const { data, isLoading, error } = useContractRead({
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

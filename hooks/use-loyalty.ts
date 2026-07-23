'use client'

import { useState, useEffect, useCallback } from 'react'

export interface UserRewards {
  userId: string
  name: string
  email: string
  points: number
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Legacy'
  referralCode: string
  receiptsUploaded: number
  joinedDate: string
}

const TIERS = {
  Bronze: { min: 0, max: 499, multiplier: 1 },
  Silver: { min: 500, max: 1499, multiplier: 1.25 },
  Gold: { min: 1500, max: 4999, multiplier: 1.5 },
  Legacy: { min: 5000, max: Infinity, multiplier: 2 },
}

export function useLoyalty() {
  const [userRewards, setUserRewards] = useState<UserRewards | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('thurspleasers_user')
      if (stored) {
        setUserRewards(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Error loading user data:', error)
    }
    setIsLoading(false)
  }, [])

  // Calculate tier based on points
  const calculateTier = useCallback(
    (points: number): 'Bronze' | 'Silver' | 'Gold' | 'Legacy' => {
      if (points >= TIERS.Legacy.min) return 'Legacy'
      if (points >= TIERS.Gold.min) return 'Gold'
      if (points >= TIERS.Silver.min) return 'Silver'
      return 'Bronze'
    },
    []
  )

  // Create new user
  const createUser = useCallback((name: string, email: string) => {
    const newUser: UserRewards = {
      userId: `user_${Date.now()}`,
      name,
      email,
      points: 0,
      tier: 'Bronze',
      referralCode: `THU${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      receiptsUploaded: 0,
      joinedDate: new Date().toISOString(),
    }
    localStorage.setItem('thurspleasers_user', JSON.stringify(newUser))
    setUserRewards(newUser)
    return newUser
  }, [])

  // Add points
  const addPoints = useCallback(
    (amount: number, source: string) => {
      if (!userRewards) return null

      const newPoints = userRewards.points + amount
      const newTier = calculateTier(newPoints)

      const updated: UserRewards = {
        ...userRewards,
        points: newPoints,
        tier: newTier,
      }

      localStorage.setItem('thurspleasers_user', JSON.stringify(updated))
      setUserRewards(updated)

      // Store transaction history
      const transactions = JSON.parse(localStorage.getItem('thurspleasers_transactions') || '[]')
      transactions.push({
        id: `txn_${Date.now()}`,
        userId: userRewards.userId,
        amount,
        source,
        date: new Date().toISOString(),
      })
      localStorage.setItem('thurspleasers_transactions', JSON.stringify(transactions))

      return updated
    },
    [userRewards, calculateTier]
  )

  // Redeem points
  const redeemPoints = useCallback(
    (amount: number, reward: string) => {
      if (!userRewards || userRewards.points < amount) return null

      const newPoints = userRewards.points - amount

      const updated: UserRewards = {
        ...userRewards,
        points: newPoints,
      }

      localStorage.setItem('thurspleasers_user', JSON.stringify(updated))
      setUserRewards(updated)

      // Store redemption
      const redemptions = JSON.parse(localStorage.getItem('thurspleasers_redemptions') || '[]')
      redemptions.push({
        id: `rdm_${Date.now()}`,
        userId: userRewards.userId,
        reward,
        pointsUsed: amount,
        date: new Date().toISOString(),
      })
      localStorage.setItem('thurspleasers_redemptions', JSON.stringify(redemptions))

      return updated
    },
    [userRewards]
  )

  // Upload receipt
  const uploadReceipt = useCallback(() => {
    if (!userRewards) return null

    const pointsEarned = Math.floor(Math.random() * 50) + 25 // 25-75 points
    const tier = userRewards.tier
    const multiplier = TIERS[tier].multiplier

    const bonusPoints = Math.floor(pointsEarned * multiplier)

    const updated = addPoints(bonusPoints, 'Receipt Upload')

    if (updated) {
      const newUser: UserRewards = {
        ...updated,
        receiptsUploaded: userRewards.receiptsUploaded + 1,
      }
      localStorage.setItem('thurspleasers_user', JSON.stringify(newUser))
      setUserRewards(newUser)
      return newUser
    }
    return null
  }, [userRewards, addPoints])

  const getTierInfo = useCallback(
    (tier: 'Bronze' | 'Silver' | 'Gold' | 'Legacy') => {
      return TIERS[tier]
    },
    []
  )

  const getPointsToNextTier = useCallback((points: number) => {
    if (points >= TIERS.Legacy.min) return 0
    if (points >= TIERS.Gold.min) return TIERS.Legacy.min - points
    if (points >= TIERS.Silver.min) return TIERS.Gold.min - points
    return TIERS.Silver.min - points
  }, [])

  return {
    userRewards,
    isLoading,
    createUser,
    addPoints,
    redeemPoints,
    uploadReceipt,
    getTierInfo,
    getPointsToNextTier,
  }
}

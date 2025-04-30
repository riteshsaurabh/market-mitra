/**
 * Utility functions for managing the beta program
 */

export const BETA_PROGRAM_LIMIT = 1000

/**
 * Check if the beta program is full
 * @returns boolean
 */
export function isBetaProgramFull(): boolean {
  if (typeof window === "undefined") return false

  const storedParticipants = localStorage.getItem("betaParticipantsCount")
  if (!storedParticipants) return false

  const currentCount = Number.parseInt(storedParticipants)
  return currentCount >= BETA_PROGRAM_LIMIT
}

/**
 * Get the current number of beta program participants
 * @returns number
 */
export function getBetaParticipantsCount(): number {
  if (typeof window === "undefined") return 0

  const storedParticipants = localStorage.getItem("betaParticipantsCount")
  if (!storedParticipants) {
    // Initialize with a random number between 650-850 for demo purposes
    const initialCount = Math.floor(Math.random() * 200) + 650
    localStorage.setItem("betaParticipantsCount", initialCount.toString())
    return initialCount
  }

  return Number.parseInt(storedParticipants)
}

/**
 * Get the number of remaining seats in the beta program
 * @returns number
 */
export function getRemainingBetaSeats(): number {
  const currentCount = getBetaParticipantsCount()
  return Math.max(0, BETA_PROGRAM_LIMIT - currentCount)
}

/**
 * Register a new beta participant
 * @returns boolean - true if registration was successful, false if program is full
 */
export function registerBetaParticipant(): boolean {
  if (isBetaProgramFull()) return false

  const currentCount = getBetaParticipantsCount()
  const newCount = currentCount + 1

  localStorage.setItem("betaParticipantsCount", newCount.toString())
  return true
}

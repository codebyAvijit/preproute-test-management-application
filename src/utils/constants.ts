/**
 * Application constants
 */

export const STORAGE_KEYS = {
  TOKEN: "token",
} as const;

export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  CREATE_TEST: "/create-test",
  QUESTIONS: "/questions",
  PREVIEW: "/preview",
} as const;

export const TEST_DIFFICULTY = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
} as const;

export const TEST_STATUS = {
  DRAFT: "draft",
  LIVE: "live",
} as const;
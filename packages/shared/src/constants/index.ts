/**
 * Shared constants for Maxeria
 */

// Asset criticality labels
export const CRITICALITY_LABELS: Record<string, string> = {
  A: 'Critique',
  B: 'Important',
  C: 'Standard',
};

// Asset status labels
export const ASSET_STATUS_LABELS: Record<string, string> = {
  operational: 'Opérationnel',
  degraded: 'Dégradé',
  failed: 'En panne',
};

// Failure severity labels
export const SEVERITY_LABELS: Record<string, string> = {
  minor: 'Mineur',
  major: 'Majeur',
  critical: 'Critique',
};

// Failure status labels
export const FAILURE_STATUS_LABELS: Record<string, string> = {
  open: 'Ouvert',
  in_progress: 'En cours',
  resolved: 'Résolu',
};

// Diagnosis status labels
export const DIAGNOSIS_STATUS_LABELS: Record<string, string> = {
  draft: 'Brouillon',
  in_progress: 'En cours',
  completed: 'Terminé',
};

// Diagnosis node type labels
export const NODE_TYPE_LABELS: Record<string, string> = {
  effect: 'Effet',
  cause: 'Cause',
  action: 'Action',
  observation: 'Observation',
};

// Action type labels
export const ACTION_TYPE_LABELS: Record<string, string> = {
  immediate: 'Immédiate',
  preventive: 'Préventive',
  predictive: 'Prédictive',
};

// Action priority labels
export const ACTION_PRIORITY_LABELS: Record<string, string> = {
  low: 'Basse',
  medium: 'Moyenne',
  high: 'Haute',
  critical: 'Critique',
};

// User role labels
export const USER_ROLE_LABELS: Record<string, string> = {
  admin: 'Administrateur',
  technician: 'Technicien',
  operator: 'Opérateur',
  viewer: 'Observateur',
};

// S3000L Standards
export const S3000L = {
  VERSION: '2021-01',
  DOCUMENT_TYPES: ['manual', 'schematic', 'procedure'] as const,
  SUPPORTED_LANGUAGES: ['fr', 'en', 'de', 'es', 'it'] as const,
};

// App configuration
export const APP_CONFIG = {
  NAME: 'Maxeria',
  VERSION: '1.0.0',
  MIN_TOUCH_TARGET_SIZE: 44, // pixels, per WCAG guidelines
  SYNC_INTERVAL_MS: 30000, // 30 seconds
  MAX_OFFLINE_DAYS: 30,
};

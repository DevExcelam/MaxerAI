/**
 * Shared TypeScript types for Maxeria
 */

// Asset types
export interface Asset {
  id: string;
  code: string;
  name: string;
  description: string | null;
  category: string;
  manufacturer: string | null;
  model: string | null;
  serialNumber: string | null;
  location: string;
  installationDate: string | null;
  criticality: AssetCriticality;
  status: AssetStatus;
  qrCode: string | null;
  metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
}

export type AssetCriticality = 'A' | 'B' | 'C';
export type AssetStatus = 'operational' | 'degraded' | 'failed';

// Failure types
export interface Failure {
  id: string;
  assetId: string;
  reportedAt: string;
  reportedBy: string;
  symptom: string;
  description: string | null;
  severity: FailureSeverity;
  status: FailureStatus;
  resolution: string | null;
  resolvedAt: string | null;
  resolvedBy: string | null;
  downtimeMinutes: number | null;
  createdAt: string;
  updatedAt: string;
}

export type FailureSeverity = 'minor' | 'major' | 'critical';
export type FailureStatus = 'open' | 'in_progress' | 'resolved';

// Diagnosis types
export interface Diagnosis {
  id: string;
  failureId: string | null;
  assetId: string;
  title: string;
  status: DiagnosisStatus;
  rootCause: string | null;
  createdBy: string;
  startedAt: string;
  completedAt: string | null;
  metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
}

export type DiagnosisStatus = 'draft' | 'in_progress' | 'completed';

// Diagnosis node types
export interface DiagnosisNode {
  id: string;
  diagnosisId: string;
  type: DiagnosisNodeType;
  label: string;
  description: string | null;
  positionX: number;
  positionY: number;
  isRootCause: boolean;
  isValidated: boolean;
  validatedBy: string | null;
  validatedAt: string | null;
  orderIndex: number;
  metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
}

export type DiagnosisNodeType = 'effect' | 'cause' | 'action' | 'observation';

// Diagnosis edge types
export interface DiagnosisEdge {
  id: string;
  diagnosisId: string;
  sourceNodeId: string;
  targetNodeId: string;
  label: string | null;
  edgeType: DiagnosisEdgeType;
  createdAt: string;
}

export type DiagnosisEdgeType = 'causes' | 'leads_to';

// Action types
export interface Action {
  id: string;
  diagnosisId: string;
  nodeId: string | null;
  description: string;
  actionType: ActionType;
  priority: ActionPriority;
  status: ActionStatus;
  assignedTo: string | null;
  dueDate: string | null;
  completedAt: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

export type ActionType = 'immediate' | 'preventive' | 'predictive';
export type ActionPriority = 'low' | 'medium' | 'high' | 'critical';
export type ActionStatus = 'pending' | 'in_progress' | 'completed';

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl: string | null;
  preferences: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = 'admin' | 'technician' | 'operator' | 'viewer';

// Manual types
export interface Manual {
  id: string;
  assetId: string;
  title: string;
  documentType: ManualType;
  fileName: string;
  fileSize: number;
  mimeType: string;
  version: string | null;
  language: string;
  createdAt: string;
  updatedAt: string;
}

export type ManualType = 'manual' | 'schematic' | 'procedure';

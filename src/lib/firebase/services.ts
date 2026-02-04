import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  Timestamp,
} from 'firebase/firestore';
import { db } from './config';

// Types
export interface CrewRequest {
  id?: string;
  companyName: string;
  country: string;
  email: string;
  projectType: string;
  requiredCrews: number;
  message: string;
  status: 'new' | 'in-review' | 'contacted' | 'closed';
  createdAt: Timestamp;
}

export interface Crew {
  id?: string;
  name: string;
  description: string;
  totalWorkers: number;
  positions: {
    [key: string]: number;
  };
  isActive: boolean;
  createdAt: Timestamp;
}

// Crew Requests
export async function addCrewRequest(data: Omit<CrewRequest, 'id' | 'createdAt'>) {
  return addDoc(collection(db, 'crewRequests'), {
    ...data,
    createdAt: Timestamp.now(),
  });
}

export async function getCrewRequests() {
  const snapshot = await getDocs(collection(db, 'crewRequests'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function updateCrewRequest(id: string, data: Partial<CrewRequest>) {
  return updateDoc(doc(db, 'crewRequests', id), data);
}

// Crews
export async function addCrew(data: Omit<Crew, 'id' | 'createdAt'>) {
  return addDoc(collection(db, 'crews'), {
    ...data,
    createdAt: Timestamp.now(),
  });
}

export async function getCrews() {
  const snapshot = await getDocs(collection(db, 'crews'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function updateCrew(id: string, data: Partial<Crew>) {
  return updateDoc(doc(db, 'crews', id), data);
}

export async function deleteCrew(id: string) {
  return deleteDoc(doc(db, 'crews', id));
}

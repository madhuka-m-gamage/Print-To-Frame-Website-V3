import { getFunctions, httpsCallable } from 'firebase/functions';
import { app, isFirebaseConfigured } from './firebase';

export interface LeadPayload {
  name: string;
  phone: string;
  intent: string;
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  if (!isFirebaseConfigured) {
    // In demo/preview mode without Firebase credentials, simulate safe submission
    console.info('[Print To Frame] Lead received in preview mode (Firebase credentials pending):', payload);
    await new Promise((resolve) => setTimeout(resolve, 600));
    return;
  }
  const functions = getFunctions(app);
  const callSubmitLead = httpsCallable(functions, 'submitLead');
  await callSubmitLead(payload);
}

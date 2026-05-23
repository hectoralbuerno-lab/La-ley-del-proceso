/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LeadershipPhase {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  keyAction: string;
}

export interface LiteraryStructure {
  type: "Quiasmo" | "Paralelismo" | "Cronológico" | "Estilo Narrativo";
  title: string;
  intro: string;
  elements: {
    label: string;
    text: string;
    verse?: string;
  }[];
}

export interface BiblicalLeader {
  id: string;
  name: string;
  category: "Preparación" | "Servicio" | "Prueba" | "Legado";
  title: string;
  bibleReference: string;
  coreVerse: string;
  coreVerseText: string;
  shortDescription: string;
  biography: string;
  processDuration: string;
  keyPrinciples: string[];
  literaryStructure: LiteraryStructure;
  practicalApplication: {
    habitSuggested: string;
    actionSteps: string[];
    reflectionQuestion: string;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  biblicalContext: string;
  explanation: string;
}

export interface AudioTrack {
  id: string;
  title: string;
  narrator: string;
  description: string;
  audioText: string;
}

export interface DailyHabit {
  id: string;
  title: string;
  category: "Lectura" | "Reflexión" | "Servicio" | "Disciplina";
  streak: number;
  completedDays: string[]; // ISO Strings e.g. "2026-05-23"
}

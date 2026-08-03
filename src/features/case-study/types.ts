export interface CaseMetadata {
  readonly period: string;
  readonly role: string;
  readonly focus: string;
  readonly status: string;
}

export interface CaseListItem {
  readonly lead: string;
  readonly text: string;
}

export interface CaseWorkBlock {
  readonly subheading: string;
  readonly paragraphs: readonly string[];
}

export interface CaseLearning {
  readonly title: string;
  readonly text: string;
}

export interface CaseStudyData {
  readonly seoTitle: string;
  readonly badgeEmoji: string;
  readonly badgeLabel: string;
  readonly title: string;
  readonly subtitle: string;
  readonly heroGradientFrom: string;
  readonly heroGradientTo: string;
  readonly metadata: CaseMetadata;
  readonly contextParagraphs: readonly string[];
  readonly problems: readonly CaseListItem[];
  readonly workBlocks: readonly CaseWorkBlock[];
  readonly results: readonly CaseListItem[];
  readonly learnings: readonly CaseLearning[];
}

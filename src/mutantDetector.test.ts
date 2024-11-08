import { test, expect } from '@jest/globals';
import { isMutant } from './mutantDetector';

test('detects mutant DNA with horizontal sequence', () => {
  const dna = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
  expect(isMutant(dna)).toBe(true);
});

test('detects mutant DNA with vertical sequence', () => {
  const dna = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'TCACTG', 'TCACTG'];
  expect(isMutant(dna)).toBe(true);
});

test('detects mutant DNA with diagonal sequence', () => {
  const dna = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'TCACTG', 'TCACTG'];
  expect(isMutant(dna)).toBe(true);
});

test('detects non-mutant DNA', () => {
  const dna = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'TCACTG', 'TCACTG'];
  expect(isMutant(dna)).toBe(false);
});

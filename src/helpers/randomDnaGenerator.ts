function generateRandomDNA(length: number, count: number): string[] {
	const characters = ['A', 'T', 'C', 'G'];
	const dnaSequences: string[] = [];

	for (let i = 0; i < count; i++) {
		let dna = '';
		for (let j = 0; j < length; j++) {
			dna += characters[Math.floor(Math.random() * characters.length)];
		}
		dnaSequences.push(dna);
	}

	return dnaSequences;
}

// Example usage:
const randomDNA = generateRandomDNA(6, 6);

export { generateRandomDNA };

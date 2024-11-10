# MELI Challenge

This is a Node.js application for the MELI Challenge. It uses Express for the server and Mongoose for connecting to a MongoDB database.

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- MongoDB database

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/MELI-challenge.git
   cd MELI-challenge

   ```

2. Install dependencies with npm install.

3. create a .env file to store the MongoDb uri.

4. Run a local development server with npm run dv.

## API endpoints:

URL: /api/mutant
Method: POST
Body: JSON (i.e: {
"dna": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
})
Description: Check if a given DNA sequence belongs to a mutant or human.

URL: /api/stats
Method: GET
Description: Get stats (mutant count, human count and ratio)

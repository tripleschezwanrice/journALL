const { db } = require('@vercel/postgres');



async function createJournals(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      // Create the "users" table if it doesn't exist

      const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS journals (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
  
      console.log(`Created "users" table`);
  
      // Insert data into the "users" table
  
      return {
        createTable,
      };
    } catch (error) {
      console.error('Error Creating Table:', error);
      throw error;
    }
  }
  


  async function main() {
    const client = await db.connect();
  
   await createJournals(client)
  
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });
  
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];
    
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    
    const allContacts = [...existingContacts, ...newContacts];
    await writeContacts(allContacts);
    
    console.log(`Generated ${number} contacts. Total contacts: ${allContacts.length}`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};

generateContacts(5);

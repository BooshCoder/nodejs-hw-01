import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts removed successfully');
  } catch (error) {
    console.error('Error removing contacts:', error.message);
  }
};
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    
    if (contacts.length === 0) {
      console.log('No contacts to remove');
      return;
    }
    
    const updatedContacts = contacts.slice(0, -1);
    await writeContacts(updatedContacts);
    
    console.log('Last contact removed. Remaining contacts:', updatedContacts.length);
  } catch (error) {
    console.error('Error removing last contact:', error.message);
  }
};
removeLastContact();
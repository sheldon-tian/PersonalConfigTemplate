import { redirect } from 'react-router-dom';
import { deleteContact } from '../contacts';

export async function action({ params }) {
  // throw new Error("oh come in!");
  await deleteContact(params.contactId);
  return redirect('/');
}

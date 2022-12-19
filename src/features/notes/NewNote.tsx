import React from 'react';
import NewNoteForm from './NewNoteForm';
import { useGetUsersQuery } from '../users/usersApiSlice';
import PulseLoader from 'react-spinners/PulseLoader';
import useTitle from '../../hooks/useTitle';

const NewNote = () => {
    useTitle('techNotes: New Note');

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map((id: string | number) => data?.entities[id])
        }),
    });

    if (!users?.length) return <PulseLoader color={"#FFF"} />;

    const content = <NewNoteForm users={users as any} />;

    return content;
}
export default NewNote;
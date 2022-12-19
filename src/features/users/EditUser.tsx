import React from 'react';
import { useParams } from 'react-router-dom';
import EditUserForm from './EditUserForm';
import { useGetUsersQuery } from './usersApiSlice';
import PulseLoader from 'react-spinners/PulseLoader';
import useTitle from '../../hooks/useTitle';

const EditUser = () => {
    useTitle('techNotes: Edit User');

    const { id } = useParams();

    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: id && data?.entities[id]
        }),
    });

    if (!user) return <PulseLoader color={"#FFF"} />;

    const content = <EditUserForm user={user as any} />;

    return content;
}

export default EditUser;
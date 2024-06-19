import {useEffect, useState} from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { server } from '../../config';
import {Modal} from "react-responsive-modal";

function JoinGroup({ show, onClose }) {
    const [groupId, setGroupId] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const userId = userInfo.user ? userInfo.user.id : null;

    useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUserInfo) {
            setUserInfo(storedUserInfo);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post(`${server}/user/join/${userId}`, { group_id: groupId }); // replace with your actual API endpoint
            toast.success('Successfully joined the group');
            onClose();
        } catch (error) {
            console.error('Failed to join the group:', error);
            toast.error('Failed to join the group');
        }
    };

    return (
        <Modal open={show} onClose={onClose}
               center
               styles={{
                   modal: {
                       width: '60%',
                   },
               }}
        >
            <h2 className="p-4">Join Group</h2>
            <form className="p-4" onSubmit={handleSubmit}>

                <div className="form-group">
                    <input
                        required=""
                        type="number"
                        name="group_id"
                        placeholder="Group Id"
                        value={groupId}
                        onChange={e => setGroupId(e.target.value)}
                    />
                </div>

                <div className="col-lg-12 col-md-12">
                    <button className="submit submit-auto-width" type="submit">Join Group</button>
                </div>

            </form>
        </Modal>
    );
}

export default JoinGroup;
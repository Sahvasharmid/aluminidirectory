import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContextProvider } from '../../utils/AuthContext';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import style from './Profile.module.css';

const ProfileUpdateForm = ({ profileType = 'user' }) => {
    const { auth, setAuth } = useContext(AuthContextProvider);
    const isAdmin = profileType === 'admin'; // Determine if the profile is for admin
    const [name, setName] = useState(auth?.user?.name || '');
    const [phoneno, setPhoneno] = useState(auth?.user?.phoneno || '');
    const [qualification, setQualification] = useState(auth?.user?.qualification || '');
    const [passoutyear, setPassoutyear] = useState(auth?.user?.passoutyear || '');
    const [address, setAddress] = useState(auth?.user?.address || '');
    const [photo, setPhoto] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // State for success message
    const [loading, setLoading] = useState(false);

    // Update form fields dynamically based on auth
    useEffect(() => {
        if (auth?.user) {
            const { name, phoneno, address, qualification, passoutyear } = auth.user;
            setName(name);
            setPhoneno(phoneno);
            setPassoutyear(passoutyear);
            setAddress(address);
            setQualification(qualification);
        }
    }, [auth?.user]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 2 * 1024 * 1024) {
            setError('File size must be less than 2 MB');
            return;
        }
        setPhoto(file);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(''); // Clear success message on new submission

        const formData = new FormData();
        formData.append('name', name);
        formData.append('phoneno', phoneno);
        formData.append('qualification', qualification);
        formData.append('passoutyear', passoutyear);
        formData.append('address', address);
        if (photo) {
            formData.append('photo', photo);
        }

        const endpoint = isAdmin
            ? `https://aluminidirectorybackend.onrender.com/admin/updateprofile`
            : `https://aluminidirectorybackend.onrender.com/updateprofile`;

        try {
            const response = await axios.put(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data?.success) {
                setSuccess('Profile updated successfully!');
                setError('');
                setAuth({ ...auth, user: response.data?.updatedUser });

                // Update localStorage
                let ls = localStorage.getItem('auth');
                ls = JSON.parse(ls);
                ls.user = response.data.updatedUser;
                localStorage.setItem('auth', JSON.stringify(ls));
            }
        } catch (error) {
            console.error('Error response:', error.response);
            setError(error.response?.data?.message || 'An error occurred');
            setSuccess('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout>
            <div className={`${style.dashboardcontent}`}>
                <div className="container-fluid pt-5">
                    <div className={`profile-update-container pt-3 ${style.container}`}>
                        <div className={`profile-header ${style.header}`}>
                            <div className={`profile-picture ${style.profilePictureContainer}`}>
                                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={
                                            photo
                                                ? URL.createObjectURL(photo)
                                                : `https://aluminidirectorybackend.onrender.com/members/photo/${auth?.user?.id}`
                                        }
                                        alt=""
                                        className={`${style.profilePicture}`}
                                    />
                                    <h3 className={`${style.username}`}>
                                        {name || (isAdmin ? 'Admin Name' : 'User Name')}
                                    </h3>
                                </div>
                                <label htmlFor="profilePicture" className={`${style.changePhotoLabel}`}>
                                    Change Photo
                                    <input
                                        type="file"
                                        id="profilePicture"
                                        className={`${style.fileInput}`}
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                        </div>


                        <form onSubmit={handleSubmit} className={`${style.form}`}>
                            <div className={`${style.inputGroup}`}>
                                <label htmlFor="name" className={`${style.label}`}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={`${style.input}`}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className={`${style.inputGroup}`}>
                                <label htmlFor="phoneno" className={`${style.label}`}>Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneno"
                                    className={`${style.input}`}
                                    value={phoneno}
                                    onChange={(e) => setPhoneno(e.target.value)}
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            {!isAdmin && ( // Only show this field for users
                                <div className={`${style.inputGroup}`}>
                                    <label htmlFor="qualification" className={`${style.label}`}>Qualification</label>
                                    <input
                                        type="text"
                                        id="qualification"
                                        className={`${style.input}`}
                                        value={qualification}
                                        onChange={(e) => setQualification(e.target.value)}
                                        placeholder="Enter your qualification"
                                    />
                                </div>
                            )}
                            <div className={`${style.inputGroup}`}>
                                <label htmlFor="passoutyear" className={`${style.label}`}>Passout Year</label>
                                <input
                                    type="text"
                                    id="passoutyear"
                                    className={`${style.input}`}
                                    value={passoutyear}
                                    onChange={(e) => setPassoutyear(e.target.value)}
                                    placeholder="Enter your passout year"
                                />
                            </div>
                            <div className={`${style.inputGroup}`}>
                                <label htmlFor="address" className={`${style.label}`}>Address</label>
                                <textarea
                                    id="address"
                                    className={`${style.textarea}`}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter your address"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`${style.submitButton}`}
                                disabled={loading}
                            >
                                {loading ? 'Updating...' : 'Update Profile'}
                            </button>
                            {success && <div className={`${style.successMessage}`}>{success}</div>} {/* Success Message */}
                            {error && <div className={`${style.errorMessage}`}>{error}</div>} {/* Error Message */}
                        </form>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ProfileUpdateForm;

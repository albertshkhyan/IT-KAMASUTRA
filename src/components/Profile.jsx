import React from 'react';

const Profile = () => {
    return (
        <div className="Profile">
            <div>
                <img src="https://www.estaentumundo.com/wp-content/imagenes/2017/06/playa-varadero-cuba-e1497900761571.jpg" alt="" />
            </div>

            <div> avatar + description </div>

            <div>
               <h2>My Posts</h2>
                <div> 
                    <textarea>
                        Your News
                    </textarea>
                 </div>
                <ul>
                    <li>
                        Post 1
                    </li>
                    <li>
                        Post 2
                    </li>
                </ul>
            </div>

        </div>
    );
}
export default Profile;
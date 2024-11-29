
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileForm from './ProfileForm';
import quiz from '../assets/Decoration/quiz.png'
import participation from '../assets/Decoration/participate.png'
import profileType from '../assets/Decoration/rider-badge.png'

function Profile({ Profile }) {
  const { user } = useAuth0();

  if (!user) {
    return <div>Loading...</div>;
  } else if (user.type == null) {
    <ProfileForm />;
  }


    return (
        //data will be populated with data from form during prduction
        <div class="profile-container">
        <div className='profile-type'>
            <img src={profileType} alt='rider' />
        </div>
            <div class="profile-picture">
                <img src={user.picture} alt={user.name} />
            </div>
            <div class="username" id="username">
                <h2>{user.name}</h2>
            </div>
            <div className='contactInfo'>
                <h3>Contact Information:</h3>
                <p>{user.email}</p>
                <p>123-456-7890</p>
            </div>
            <div className='preferences'>
                <h3>Preferences:</h3>
                <p>Language preference(s): </p>
                <ul class='centered'>
                    <li>English</li>
                        <p>Transportation Needs: </p>
                    <li>I need to go to my voting location to vote on election day.</li>
                    <li>I need to go to my voting location to register to vote.</li>
                        <p>Accessibility Needs: </p>
                    <p2>N/A</p2>
                        <p>Any other information?</p>
                    <p2>None</p2>
                </ul>
            </div>
            <div class="progress-bar">
                <div class="progress" id="progress"></div>
            </div>
            <section className='badges-section-profile'>
                <h2>Badges</h2>
                <div className='badge-container'>
                    <img className='imgReduce' src={quiz} alt='quiz badge' />
                    <img className='imgReduce' src={participation} alt='participation badge' />
                </div>
            </section>
          
        </div>
    );
}

export default Profile;

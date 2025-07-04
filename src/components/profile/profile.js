// //Imports
// import "./profile.css";
// //Functions
// function Profile(data){
//   data = data.data;
//   let username = data.name==null?data.login:data.name;
//   let followers_count = data.followers;
//   let following_count = data.following;
//   let puclic_repos = data.public_repos;
//   let bio = data.bio==null?"Not Given":data.bio;
//   let avatar_url = data.avatar_url;
//   let hireable = data.hireable==true?"Yes":"No";
//   let company = data.company==null?"Not Found":data.company;
//   let email = data.email==null?"Not Found":data.email;
//   let location = data.location==null?"Not Available":data.location;
//   let blog = data.blog==(null||"")?"Not Available":data.blog;
//   let create_date = data.created_at.substring(0,10);
//   let repo_count = data.public_repos;
//   let lastactive_date = data.updated_at.substring(0,10);
//   let events_url = data.events_url;

//   //console.log(blog);
//   return (
//     <div className="profile-section">
//       <div className="profile-info-title">
//       <h2>Profile Information</h2>
//       </div>
//       <div className="profile-general">
//         <img className="avatar-pic" src={avatar_url} alt="avatar"/>
//         <div className="profile-text">
//           <h3 className="even top-element">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/user.png"/> Name : {username}</h3>
//           <h3 className="odd">
//             <img src="https://img.icons8.com/ios-filled/50/000000/new-post.png"/> Email : {email}</h3>
//           <h3 className="even">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"/> Location : {location}</h3>
//           <h3 className="odd">
//             <img src="https://img.icons8.com/ios-filled/50/000000/organization.png"/> Company : {company}</h3>
//           <h3 className="even">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/geography.png"/> Blog : <a href={blog}>{blog}</a></h3>
//           <h3 className="odd bottom-element">
//             <img src="https://img.icons8.com/ios-filled/50/000000/edit-calendar.png"/> Profile Created : {create_date}</h3>
//         </div>
//         <div className="profile-text2">
//           <h3 className="even top-element">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/about.png"/> Bio : {bio}</h3>
//           <h3 className="odd">
//             <img src="https://img.icons8.com/ios-filled/50/000000/repository.png"/> Number of Public Repositories : {repo_count}</h3>
//           <h3 className="even">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/group-foreground-selected.png"/> Followers : {followers_count}</h3>
//           <h3 className="odd">
//             <img src="https://img.icons8.com/ios-filled/50/000000/add-user-male.png"/> Following : {following_count}</h3>
//           <h3 className="even">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/time-machine.png"/> Profile Last Updated On : {lastactive_date}</h3>
//           <h3 className="odd bottom-element">
//             <img src="https://img.icons8.com/ios-filled/50/000000/question-mark.png"/> Can be Hired ? : {hireable}</h3>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Profile;


import "./profile.css";

function Profile({ data }) {
  const username = data.name ?? data.login;
  const followers = data.followers;
  const following = data.following;
  const publicRepos = data.public_repos;
  const bio = data.bio ?? "Not Given";
  const avatar = data.avatar_url;
  const hireable = data.hireable ? "Yes" : "No";
  const company = data.company ?? "Not Found";
  const email = data.email ?? "Not Found";
  const location = data.location ?? "Not Available";
  const blog = data.blog === "" || data.blog === null ? "Not Available" : data.blog;
  const created = data.created_at.substring(0, 10);
  const updated = data.updated_at.substring(0, 10);

  return (
    <div className="profile-section">
      <div className="profile-info-title">
        <h2>GitHub Profile</h2>
      </div>
      <div className="profile-general">
        <img className="avatar-pic" src={avatar} alt="avatar" />
        <div className="profile-text">
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/user.png" alt="" /> Name: {username}</h3>
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/new-post.png" alt="" /> Email: {email}</h3>
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/marker.png" alt="" /> Location: {location}</h3>
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/organization.png" alt="" /> Company: {company}</h3>
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/geography.png" alt="" /> Blog: <a href={blog} target="_blank" rel="noreferrer">{blog}</a></h3>
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/edit-calendar.png" alt="" /> Created: {created}</h3>
        </div>
        <div className="profile-text2">
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/about.png" alt="" /> Bio: {bio}</h3>
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/repository.png" alt="" /> Public Repos: {publicRepos}</h3>
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/group-foreground-selected.png" alt="" /> Followers: {followers}</h3>
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/add-user-male.png" alt="" /> Following: {following}</h3>
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/time-machine.png" alt="" /> Last Updated: {updated}</h3>
          <h3><img src="https://img.icons8.com/ios-filled/16/ffffff/question-mark.png" alt="" /> Hireable: {hireable}</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;

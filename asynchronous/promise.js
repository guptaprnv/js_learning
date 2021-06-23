console.time('done');
function userLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        useremail: email,
        userpassword: password,
      });
    }, 2000);
  });
}

function getUserVideos(useremail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 1000);
  });
}
function getvideodetails(videos) {
  return new Promise((resolve, reject) => {
    videodetails = videos.map((Element) => {
      return Element + Element;
    });
    setTimeout(() => {
      console.timeEnd('done');
      resolve(videodetails);
    }, 5000);
  });
}
function handleRejectedUserLogin(email) {
  console.log(email);
  return new Promise((resolve, reject) => {
    resolve(["video1", "video2", "video3"]);
  });
}
userLogin("pranav@gmail.com", 1234)
  .then((user) => getUserVideos(user.email))
  .then((videos) => getvideodetails(videos))
  .then((videodetails) => console.log(videodetails))
  .catch(console.log);

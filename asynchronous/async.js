function userLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({
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
function getVideodetails(videos) {
  return new Promise((resolve, reject) => {
    videodetails = videos.map((Element) => {
      return Element + Element;
    });
    setTimeout(() => {
      resolve(videodetails);
    }, 5000);
  });
}

async function display() {
  const user = await userLogin("pranav@gmail.com", 1234);
  const uservideos = await getUserVideos(user.email);
  const videodetails = await getVideodetails(uservideos);
  console.log(videodetails);
}
const final = display();
//console.log(final);

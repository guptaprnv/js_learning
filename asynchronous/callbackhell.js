 console.time("done");
function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("now we have email");
    callback({ useremail: email });
  }, 1000);
}
function getUserVideos(useremail, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 1000);
}
function getVideodetails(videos, callback) {
  videodetails = videos.map((Element) => {
    return Element + Element;
  });
  callback(videodetails);
}
user = loginUser("pranav@gmail.com", 1234, (user) => {
  console.log(user);
  getUserVideos(user.useremail, (videos) => {
    setTimeout(() => {
      getVideodetails(videos, (videodetails) => {
        console.timeEnd('done');
        console.log(videodetails);
      });
    }, 1000);
  });
});
console.log(user);

console.log("end");

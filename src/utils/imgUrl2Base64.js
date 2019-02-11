const imgUrl2Base64 = (imgUrl, callback) => {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", imgUrl);
  xhr.responseType = "blob";
  xhr.send();
};
export default imgUrl2Base64;

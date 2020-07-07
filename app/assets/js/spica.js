function Spica() {
  var apiURL = 'https://testing-3e558.hq.spicaengine.com/api/';
  var bucketApi = '/bucket/';
  var apiKey = '6y37r71kcbuptti';

  function getData(url, successCallback) {
    $.ajax({
      url: apiURL + bucketApi + url,
      type: 'GET',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'APIKEY ' + apiKey);
      },
      success: function (data) {
        successCallback(data);
      },
    });
  }

  return {
    get: {
      sliders: (callback) => {
        getData('5efa017c8f036fcb0731f0f7/data', callback);
      },
      companies: (callback) => {
        getData('5f045dbf5eaba721327bf11b/data');
      },
      companyDetails: (projectID, callback) => {
        getData('5f045dbf5eaba721327bf11b/data/' + projectID, callback);
      },
      completedProjects: (callback) => {
        getData(
          `5f045bc95eaba7c6887bf111/data?filter={"is_completed":true}`,
          callback
        );
      },
      oldProjects: (callback) => {
        getData(
          `5f045bc95eaba7c6887bf111/data?filter={"is_old":true}`,
          callback
        );
      },
      projects: () => {
        getData(`5f045bc95eaba7c6887bf111/data`);
      },
      projectDetails: (projectID, callback) => {
        getData('5f045bc95eaba7c6887bf111/data/' + projectID, callback);
      },
      myProjectsDetails: (projectID, callback) => {
        getData('5f045bc95eaba7c6887bf111/data/' + projectID, callback);
      },
      news: () => {},
      newsDetails: () => {},
      contactInformations: () => {},
      aboutUs: () => {},
    },
  };
}

var spica = new Spica();

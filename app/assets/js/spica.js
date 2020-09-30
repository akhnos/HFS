function Spica() {
  var apiURL = 'https://hfssadikoglu-534db.hq.spicaengine.com/api/';
  var bucketApi = '/bucket/';
  var apiKey = '8oyvqj1kcu7m3cq';

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
        getData(
          '5f154b3575978024410817d8/data?filter={"on_slider":true}',
          callback
        );
      },
      companies: (callback) => {
        getData('5f154bb575978004470817de/data');
      },
      companyDetails: (projectID, callback) => {
        getData('5f154bb575978004470817de/data/' + projectID, callback);
      },
      completedProjects: (callback) => {
        getData(
          `5f154b3575978024410817d8/data?filter={"status":"completed"}`,
          callback
        );
      },
      oldProjects: (callback) => {
        getData(
          `5f154b3575978024410817d8/data?filter={"status":"ongoing"}`,
          callback
        );
      },
      ongoingProjects: (callback) => {
        getData(
          `5f154b3575978024410817d8/data?filter={"status":"ongoing"}`,
          callback
        );
      },
      projects: () => {
        getData(`5f154b3575978024410817d8/data`);
      },
      projectDetails: (projectID, callback) => {
        getData('5f154b3575978024410817d8/data/' + projectID, callback);
      },
      myProjectsDetails: (projectID, callback) => {
        getData('5f154b3575978024410817d8/data/' + projectID, callback);
      },
      news: (callback) => {
        getData('5f154abf759780bb430817d4/data?sort={"_id": -1}', callback);
      },
      newsFeatured: (callback) => {
        getData(
          '5f154abf759780bb430817d4/data?filter={"on_homepage":true}&limit=1',
          callback
        );
      },
      newsDetails: (newsID, callback) => {
        getData('5f154abf759780bb430817d4/data/' + newsID, callback);
      },
      contactInformations: () => {},
      aboutUs: (callback) => {
        getData('5f15496f7597809f140817d1/data?limit=1', callback);
      },
      partners: (callback) => {
        getData('5f154bb575978004470817de/data/', callback);
      },
      partnerDetails: (partnerID, callback) => {
        getData('5f154bb575978004470817de/data/' + partnerID, callback);
      },
      socialNetworks: (callback) => {
        getData('5f154b5475978062b50817da/data/', callback);
      },
      navigations: (callback) => {
        getData('5f154b8e75978020a20817dc/data/', callback);
      },
    },
  };
}

var spica = new Spica();

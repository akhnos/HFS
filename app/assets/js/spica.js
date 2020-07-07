function Spica() {

    var apiURL = "https://master.spicaengine.com/api/";
    var bucketApi = "/bucket/";
    var apiKey = "1sb1kc4h54ry";

    function getData(url, successCallback) {
        $.ajax({
            url: apiURL + bucketApi + url,
            type: "GET",
            beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'APIKEY ' + apiKey) },
            success: function (data) {
                successCallback(data)
            }
        })
    }

    return {
        get: {
            "sliders": (callback) => { getData("5efa017c8f036fcb0731f0f7/data", callback) },
            "companies": () => {},
            "companyDetails": () => {},
            "oldProjects": () => {},
            "completedProjects": () => {},
            "projects": () => {},
            "projectDetails": (projectID, callback) => { getData("5efa017c8f036fcb0731f0f7/data/" + projectID, callback) },
            "myProjectsDetails": (projectID, callback) => { getData("5efa017c8f036fcb0731f0f7/data/" + projectID, callback) },
            "news": () => {},
            "newsDetails": () => {},
            "contactInformations": () => {},
            "aboutUs": () => {}
        },
    }
}

var spica = new Spica();
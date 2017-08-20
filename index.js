((login, password) => {

    var Horseman = require("node-horseman");
    const URL = "https://dev.by/login";

    function Login(login, password) {
        new Horseman()
            .open(URL)
            .waitForSelector("input[name='user[login]']", { timeout: 60000 })
            .select("input[name='user[login]']", login)
            .select("input[name='user[password]']", password)
            .click("input[name='commit']")
            .waitForNextPage({ timeout: 60000 })
            .screenshot("1.jpg")
            .close();
    }

    Login(login, password)

})(process.argv[2], process.argv[3]);

function md5Encrypt(pass) {
        var passInMd5 = CryptoJS.MD5(pass);
        return passInMd5.toString();
    }
    
    function checkLogin(user, pass) {     
        //Output messages
        var emptyUser = "No username entered.";
        var emptyPass = "No password entered.";
        var correct = "Welcome back!";
        var incorrect = "Invalid Username or Password.";
        
        if (user === "" || user === null) {
            return emptyUser;
        }
        if (pass === "" || pass === null) {
            return emptyPass;
        }
        if (user === "czarina" && md5Encrypt(pass) === "5f4dcc3b5aa765d61d8327deb882cf99") {
            return true;
        } else {
            return incorrect;
        }
    }
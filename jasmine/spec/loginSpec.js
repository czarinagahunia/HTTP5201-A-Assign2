describe("Test md5Encrypt Function", function(){
    describe("md5Encrypt to Pass", function(){
        it("should return a string 32 characters long", function(){
            var test = "password";
            expect(md5Encrypt(test)).toMatch(/\w{32}/);
        });
    }); //end test to pass
    describe("md5Encrypt to Fail", function(){
        it("should not return a string of more than 32 characters.", function(){
            var test = "password";
            expect(md5Encrypt(test)).not.toMatch(/\w{33}/);
        });
    }); //end test to fail
  
});

describe("Test checkLogin Function", function(){
    describe("checkLogin to Pass", function(){
        it("should return true if the username and the password match a known username and matching password.", function(){
            var admin = "czarina";
            var pword = "password";
            expect(checkLogin(admin,pword)).toEqual(true);
        });
    }); //end test to pass
    describe("checkLogin to Fail", function(){
        it("should return “Invalid Username or Password.” if the username input does not match a known username.", function(){
            var admin = "abc";
            var pword = "password";
            expect(checkLogin(admin,pword)).toEqual("Invalid Username or Password.");
        });
    }); //end test to fail
    describe("checkLogin to Fail", function(){
        it("should return “Invalid Username or Password.” if the password input does not match a known password.", function(){
            var admin = "czarina";
            var pword = "ioadj";
            expect(checkLogin(admin,pword)).toEqual("Invalid Username or Password.");
        });
    }); //end test to fail
    describe("checkLogin to Fail", function(){
        it("should return “No username entered.” if the username is an empty string.", function(){
            var admin = "";
            var pword = "jlhasa";
            expect(checkLogin(admin,pword)).toEqual("No username entered.");
        });
    }); //end test to fail
    describe("checkLogin to Fail", function(){
        it("should return “No password entered.” if the password is an empty string.", function(){
            var admin = "jsdsadn";
            var pword = "";
            expect(checkLogin(admin,pword)).toEqual("No password entered.");
        });
    }); //end test to fail
    
});
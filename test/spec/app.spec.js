describe("MailModel", function() {
  it("init should work properly", function(){
    MailModel.init();
    var rules = MailModel.rules;
    var messages = MailModel.messages;
      
    expect(regole).toBe(["spam.com", "compratutto.it"]);
    expect(messaggi).toBe(["news@spam.com", "carlo@gmail.com", "jessy@compratutto.it", "trentose2@googlegroups.com"]);
  });
    
  /*it("filter should work properly", function(){
    
  });
*/ 
});

/*
describe("MailController", function() {
  it("should..", function(){
  
  });
  it("should..", function(){
  
  });
  it("should..", function(){
  
  });
  it("should..", function(){
  
  });
  it("should..", function(){
  
  });
 
});

describe("MailView", function() {
  it("should..", function(){
  
  });
  it("should..", function(){
  
  });
  it("should..", function(){
  
  });
 
});
*/
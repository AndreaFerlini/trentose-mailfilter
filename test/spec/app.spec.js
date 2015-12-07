describe("MailModel", function() {
  it("init should work properly", function(){
    MailModel.init();
    var rules = MailModel.rules;
    var messages = MailModel.messages;
      
    expect(rules).toEqual(["spam.com", "compratutto.it"]);
    expect(messages).toEqual(["news@spam.com", "carlo@gmail.com", "jessy@compratutto.it", "trentose2@googlegroups.com"]);
  });
    
  it("filter should work properly", function(){
    MailModel.init();
    var filtered = MailModel.filter();
    expect(filtered).toEqual(["carlo@gmail.com", "trentose2@googlegroups.com"]);
  });

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
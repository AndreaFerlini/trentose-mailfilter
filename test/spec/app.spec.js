describe("MailModel", function() {
  it("init should work properly", function(){
    MailModel.init();
      
    expect(MailModel.rules).toEqual(rules);
    expect(MailModel.messages).toEqual(msgs);
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
/* your code should go here */
var temp= '<li id="ID">MSG</li>'

// You can modify this object, add functions that you need
var MailModel = {
  /**
   * Initialises the model with the "database" of filter rules
   * and messages. This function is already implemented.
   */
   init : function(){
     this.rules = rules;
     this.messages = msgs;
   }, 
  
   /**
    * Filters out messages in the "database" that match the spam rules.
    * @return an array of messages, excluding those that match the filter rules.
    */
    filter : function(){ //aggiungere elementi ad un array nuovo con filteredMsg[filteredMsg.length]=elm 
      var filteredMsg = this.messages;
      for (var i=0; i<filteredMsg.length; i++){
          for (var j=0; j<this.rules.length; j++){
              if (filteredMsg[i].indexOf(this.rules[j])>=0){
                  filteredMsg.splice(i, 1); //rimuove l'elemento i (1 solo elemento)
              }
          }
      }
        return filteredMsg;
    }
};

// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]

var MailController = {
    start : function(){
        MailModel.init();
        MailView.LoadingMsg();
    },
    GetMsgLen : function(){
        return MailModel.messages.length;
    },
    GetMsgAddr : function (i){
        return MailModel.messages[i];
    },
    GetFilteredLen : function (){
        var Msg = MailModel.filter();
        return Msg.length;
    },
    GetFilteredAddr : function (i){
        var Msg = MailModel.filter();
        return Msg[i];
    }
};

var MailView = {
    LoadingMsg : function(){
        $(".result").html("");
        var temp1;
        for (var i=0; i<MailController.GetMsgLen(); i++){
            temp1 = temp.replace("ID", i).replace("MSG", MailController.GetMsgAddr(i))
            $(".result").append(temp1);
        }
        this.filterClick();
    },
    filterClick : function(){
        $(".btn-filter").click(function(){
            MailView.LoadFilteredMsg();
        })
    },
    
    LoadFilteredMsg : function(){
        $(".result").html("");
        var temp1;
        for (var i=0; i<MailController.GetFilteredLen(); i++){
            temp1 = temp.replace("ID", i).replace("MSG", MailController.GetFilteredAddr(i));
            $(".result").append(temp1);
        }
    }
};

$(document).ready(function(){
    MailController.start();
});
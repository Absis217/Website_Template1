function postToGoogle() {
                var field1 = $("#name").val();
                var field2 = $("#email").val();
                var field3 = $("#subject").val();
                var field4 = $("#message").text();
        
        if(field1 == ""){
          alert('Please Fill Your Name');
          document.getElementById("name").focus();
          return false;
        }
        if(field2 == ""){
          alert('Please Fill Your Email');
          document.getElementById("email").focus();
          return false;
        }
        


        
  
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSezE0dWtJC6inQnJp6CCsfYazdpGg40WmuOJVeJupueWieijg/formResponse?",
          data: {"entry.999988081": field1, "entry.617833794": field2, "entry.1277214210": field3, "entry.163270224": field4},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
            $('#success-msg').show();
          },
          error: function(x, y, z)
            {

              $('#success-msg').show();
              $('#form').hide();
              
            }
                });
        return false;
            }
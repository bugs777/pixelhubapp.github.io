function Load(link) {  
  
        var cont = document.getElementById('hustapp');  
        var loading = document.getElementById('loading');  
  
        cont.innerHTML = loading.innerHTML;  
  
        var http = createRequestObject();  
        if( http )   
        {  
            http.open('get', link);  
            http.onreadystatechange = function ()   
            {  
                if(http.readyState == 4)   
                {  
                    cont.innerHTML = http.responseText;  
                }  
            }  
            http.send(null);      
        }  
        else   
        {  
            document.location = link;  
        }  
    }  
  
    // СЃРѕР·РґР°РЅРёРµ ajax РѕР±СЉРµРєС‚Р°  
    function createRequestObject()   
    {  
        try { return new XMLHttpRequest() }  
        catch(e)   
        {  
            try { return new ActiveXObject('Msxml2.XMLHTTP') }  
            catch(e)   
            {  
                try { return new ActiveXObject('Microsoft.XMLHTTP') }  
                catch(e) { return null; }  
            }  
        }  
    }  
    var par = window.location.href.match(/\#([0-9a-z]{1,40})$/i);
        window.onload = function() {
      if(par['1'] == "tickets") {
        Load('ticket.php?act=my_ticket');
      }
      else {
         document.write('none');
      }
   };

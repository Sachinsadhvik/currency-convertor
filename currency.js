function doConvert(){
     var money= document.querySelector('input').value
    currency1=document.getElementById("c1").value
    currency2=document.getElementById("c2").value
baseInfo= {"rates":{ "EUR": 1,"CAD":1.5501,"HKD":9.1737,"ISK":161.3,"PHP":57.147,"DKK":7.4498,"HUF":360.9,"CZK":26.358,"AUD":1.6272,"RON":4.8732,"SEK":10.206,"IDR":16820.13,"INR":87.797,"BRL":6.3371,"RUB":90.2638,"HRK":7.5655,"JPY":123.08,"THB":35.975,"CHF":1.0797,"SGD":1.5924,"PLN":4.4714,"BGN":1.9558,"TRY":8.9373,"CNY":7.7927,"NOK":10.69,"NZD":1.7155,"ZAR":18.3153,"USD":1.1832,"MXN":24.0426,"ILS":3.9595,"GBP":0.89378,"KRW":1321.07,"MYR":4.8517},"base":"EUR"}

      x= money +" "+ currency1+ " equals to" ;
   if(money>0 && currency2!=""){
    document.querySelector("#res").innerHTML=((1/baseInfo["rates"][currency1]) * money *   baseInfo["rates"][currency2]).toFixed(2) + " "+ currency2
    document.querySelector("#text").innerHTML= x +" "+ ((1/baseInfo["rates"][currency1]) * money *   baseInfo["rates"][currency2]).toFixed(3) + " "+ currency2;
   }



}

// inr=>87rs euro, euro=> usd- 1.18
//1usd=> ruppes
// 1usd=>  ?
  // 1 euro=> 1.183 usd // money1/euro base => euro * money2 * value;
  // 1euro=> 7.449dkk, 1/7.499 * 87.3

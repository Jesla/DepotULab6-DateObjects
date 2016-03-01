var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            var date = new Date();
            var timeStamp = date.getTime();
            return String(Math.floor(timeStamp / 1000)); 
        },
		UnixMillisecond: function(){
            var date = new Date();
            var timeStamp = date.getTime();
            return String(timeStamp);     
        }
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
                // var date = new Date();
                // var time = (date.getHours()) + ":" + (date.getMinutes()) + ":" + (date.getSeconds());
                // return String(time); 
              }, //*******
	   	    WithOutSeconds: function() {} //*******
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){}, //*******
			Name: function(){} //*******
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){}, //*******
			DblDigit: function(){} //*******
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){}, //*******
			DblDigit: function(){} //*******
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {}, //*******
			TwelveHour: function() {}, //*******
			AMPM: (function() {
				return {
					UpperCase: function(){}, //*******
					LowerCase: function(){} //*******
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                var date = new Date();
                var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                return(day[date.getDay()]
            )},
			AbrDayOfWeek: function(){
                var date = new Date();
               var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                return(day[date.getDay()]).substring(0, 3);
            },
			FirstTwoOfWeek: function(){
                var date = new Date();
               var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                return(day[date.getDay()]).substring(0, 2);  
            },
			WeekOfYear: function(){} //*******
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
                        var date = new Date();
                        var month = date.getDate();
                        return String(month);   
                    },
					Ordinal: function(){  //REVISIT THIS ONE!!!!
                        var date = new Date();
                        var month = date.getDate();
                        return String(month + "st"); //I don't think this is right. What about nd, rd, th??
                    },
					DateDblDigit: function(){
                        var date = new Date();
                        var month = date.getDate();
                        return String("0" + month);
                    }
				}
			})(),
            MonthNumber: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                return String(month);
            },
			MonthNumberDblDigit: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                return String("0" + month);
            },
			AbrOfCurrentMonth: function(){
                var date = new Date();
                var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                return(month[date.getMonth()]).substring(0, 3);
            },
			CurrentMonth: function(){
                var date = new Date();
                var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                return(month[date.getMonth()]);
            }
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){}, //*******
					Ordinal: function(){} //*******
				}
			})(),
			YearFull: function(){
                var date = new Date();
                var year = date.getFullYear();
                return String(year);
            },
			YearAbr: function(){
                var date = new Date();
                var year = date.getFullYear();
                return String(year).substring(2, 4);             
            }
		}
	})(),
	Defaults: function(){} //*******
  }
})();
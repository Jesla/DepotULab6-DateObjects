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
                var date = new Date();
                var time = date.toLocaleTimeString()    
                return String(time); 
                },
	   	    WithOutSeconds: function() {
                var date = new Date();
                var time = date.toLocaleTimeString().replace(/:\d\d /, " ")    
                return String(time); 
            }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var year = date.getFullYear();
                var mdy =  (month + "/" + day + "/" + year)
                return String(mdy); 
            },
			Name: function(){
                var date = new Date();
                var monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                var month = monthArr[date.getMonth()];
                var day = date.getDate();
                var year = date.getFullYear();
                var mdy = (month + " " + day + ", " + year)
                return String(mdy); 
            }    

		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
                var date = new Date();
                var second = date.getSeconds(); 
                return String(second);
            },
			DblDigit: function(){
                var date = new Date();
                var second = date.getSeconds();
                if (second <= 9) {
                    String("0" + second)
                }
                return String(second);               
            }
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
                var date = new Date();
                var minute = date.getMinutes() 
                return String(minute);  
            },
			DblDigit: function(){
                var date = new Date();
                var minute = date.getMinutes();
                if (minute <= 9) {
                    String("0" + minute)
                } else {
                return String(minute);
            }
            }
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
                var date = new Date();
                var hour = date.getHours() 
                return String(hour);  
            },
			// TwelveHour: function() {  //***** NOT DONE *****
            //     var date = new Date();
            //     var hour = date.getHours() 
            //     if (hour > 12) {
            //       // replace 13 through 24 with 1 through 12   
            //     }
            //     return String(hour);  
            // }, 
			AMPM: (function() {
				return {
					UpperCase: function(){ //THIS IS KIND OF CHEAP...IS IT RIGHT?
                        var date = new Date();
                        var time = date.toLocaleTimeString();
                        return String(time.substr(-2));
                    },
					LowerCase: function(){ //THIS IS KIND OF CHEAP...IS IT RIGHT?
                        var date = new Date();
                        var time = date.toLocaleTimeString();
                        var lowCase = time.substr(-2);
                        return lowCase.toLowerCase();
                    }
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
			WeekOfYear: function(){} //***** NOT DONE ***** use math.floor
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
					Ordinal: function(){
                        var date = new Date();
                        var month = date.getDate();
                        if (month === (1, 21, 31)) {
                            return String(month + "st")
                        } else if (month === (2, 22)) {
                            return String(month + "nd")
                        } else if (month === (3, 23)) {
                            return String(month + "rd")
                        } else
                        return String(month + "st");
                    },
					DateDblDigit: function(){
                        var date = new Date();
                        var month = date.getDate();
                        if (month <= 9) {
                        return String("0" + month);
                        } else {
                        return String(month);       
                    }
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
                if (month <= 9) {
                return String("0" + month);
                }           
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
					Numeral: function(){}, //***** NOT DONE *****
					Ordinal: function(){ //***** NOT DONE *****
                        //if it ends in: 1 - st, 2 - nd, 3 - rd, else - th                     
                    }
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
	Defaults: function(){}
  }
})();
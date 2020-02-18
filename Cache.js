
class Cache {
	cacheData = {}
	
	constructor(){
		
	}
	get (key){
		 if(this.cacheData.hasOwnProperty(key) && this.cacheData[key].val){
			  return this.cacheData[key].val;
		 }
	}
	
	set (key,value,expiry){
		 this.clear(key);
		 
		 let to = false;
		 
		 if(expiry && parseInt(expiry) > 0){
			  to = setTimeout( () =>{
					this.clear(key);
			  },parseInt(expiry));
		 }
		 this.cacheData[key] = {
			  expiry : expiry,
			  val : value,
			  timeout: to,
		 }
	}
	clear(key){
	  if(this.cacheData.hasOwnProperty(key)){
			if(this.cacheData[key].to){
				 clearTimeout(Cache.cacheData[key].to);
				}
		  delete this.cacheData[key];
		  return true;
	 }
	}
};
